import * as yup from 'yup'

export const registerHotelSchema = yup.object({
  country: yup
    .string()
    .required('Por favor, seleccione el país donde está ubicado el hotel'),
  locality: yup
    .string()
    .required(
      'Por favor, escriba el estado/provincia donde está ubicado el hotel'
    ),
  title: yup
    .string()
    .min(2, 'Ingrese un nombre válido')
    .required('El campo de nombre es obligatorio'),
  description: yup.string(),
  logo: yup.mixed().required('Por favor, sube un logo'),
  type: yup.number().required('Ingresa la categoría del hotel'),
})
