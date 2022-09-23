import * as yup from 'yup'

export const registerHotelSchema = yup.object({
  title: yup
    .string()
    .min(2, 'Ingrese un nombre válido')
    .required('El campo de nombre es obligatorio'),
  description: yup.string(),
})
