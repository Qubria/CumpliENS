-- Agregar NORMA_ENS al enum tipo_documento para la ingesta directa de normas
ALTER TYPE public.tipo_documento ADD VALUE IF NOT EXISTS 'NORMA_ENS';
