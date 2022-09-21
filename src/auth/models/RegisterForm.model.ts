import * as yup from 'yup'

export const registerSchema = yup.object({
  firstName: yup
    .string()
    .min(2, 'Ingrese un nombre válido')
    .required('Los nombres son requeridos'),
  lastName: yup
    .string()
    .min(2, 'Ingrese apellidos válidos')
    .required('Los apellidos son requeridos'),
  email: yup
    .string()
    .email('Ingrese un correo electrónico válido')
    .required('El correo es requerido'),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email'), null], 'Los correos electrónicos no coinciden')
    .required('Confirma tu correo'),
  password: yup
    .string()
    .min(8, 'La contraseña debe contener un mínimo de 8 caracteres')
    .required('La contraseña es requerida'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Confirma tu contraseña'),
})
