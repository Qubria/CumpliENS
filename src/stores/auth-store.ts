import { create } from 'zustand'
import type { User } from '@supabase/supabase-js'
import { supabase } from '@/config/supabase'
import type { RolUsuario } from '@/types/database'

interface Perfil {
  id: string
  organizacion_id: string | null
  nombre_completo: string | null
  rol: RolUsuario
}

interface EstadoAutenticacion {
  usuario: User | null
  perfil: Perfil | null
  cargando: boolean
  inicializar: () => Promise<void>
  iniciarSesion: (email: string, contrasena: string) => Promise<void>
  registrarse: (email: string, contrasena: string, nombreCompleto: string) => Promise<void>
  cerrarSesion: () => Promise<void>
}

export const useAuthStore = create<EstadoAutenticacion>((set) => ({
  usuario: null,
  perfil: null,
  cargando: true,

  inicializar: async () => {
    const { data: { session } } = await supabase.auth.getSession()

    if (session?.user) {
      const { data: perfil } = await supabase
        .from('perfiles')
        .select('*')
        .eq('id', session.user.id)
        .single()

      set({ usuario: session.user, perfil, cargando: false })
    } else {
      set({ cargando: false })
    }

    // Escuchar cambios de autenticacion
    supabase.auth.onAuthStateChange(async (evento, session) => {
      if (evento === 'SIGNED_IN' && session?.user) {
        const { data: perfil } = await supabase
          .from('perfiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        set({ usuario: session.user, perfil })
      } else if (evento === 'SIGNED_OUT') {
        set({ usuario: null, perfil: null })
      }
    })
  },

  iniciarSesion: async (email, contrasena) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password: contrasena })
    if (error) throw error
  },

  registrarse: async (email, contrasena, nombreCompleto) => {
    const { error } = await supabase.auth.signUp({
      email,
      password: contrasena,
      options: { data: { nombre_completo: nombreCompleto } },
    })
    if (error) throw error
  },

  cerrarSesion: async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    set({ usuario: null, perfil: null })
  },
}))
