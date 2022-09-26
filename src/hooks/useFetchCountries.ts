import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchCountries = () => {
  const [countriesList, setCountriesList] = useState<string[] | null>(null)

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await axios.get('https://restcountries.com/v3.1/region/ame')

      const resultingCountriesList = res.data.map(
        (country: typeof res.data[0]) => {
          const countryName = country.name.common
          const countryFlag = country.flag
          return { name: countryName, flag: countryFlag }
        }
      )

      setCountriesList(resultingCountriesList)
    }

    fetchCountries()
  }, [])

  return { countriesList }
}
