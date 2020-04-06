import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountrySelect.module.scss'

import { fetchCountries } from '../../api'

const CountrySelect = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchApi()
  }, [setFetchedCountries])

  console.log(fetchedCountries)

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => {
          handleCountryChange(e.target.value)
        }}>
        <option value=''>Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountrySelect
