// Herramienta local - sin autenticacion
// UUIDs fijos que coinciden con los creados en la migracion
const ORG_ID = '11111111-1111-1111-1111-111111111111'
const USER_ID = '22222222-2222-2222-2222-222222222222'

export function useAuth() {
  return {
    usuario: { id: USER_ID, email: 'admin@cumpliens.local' },
    perfil: {
      id: USER_ID,
      organizacion_id: ORG_ID,
      nombre_completo: 'Administrador',
      rol: 'administrador' as const,
    },
    cargando: false,
    estaAutenticado: true,
    organizacionId: ORG_ID,
    iniciarSesion: async () => {},
    registrarse: async () => {},
    cerrarSesion: async () => {},
  }
}
