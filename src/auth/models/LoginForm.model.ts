import * as yup from 'yup'

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('Ingrese un correo electrónico válido')
    .required('El correo electrónico es requerido'),
  password: yup
    .string()
    .min(8, 'La contraseña debe contener un mínimo de 8 caracteres')
    .required('La contraseña es requerida'),
})
