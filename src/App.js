import React from 'react';

import { Cards, Charts, CountrySelect } from './components'
import styles from './App.module.scss'
import image from './assets/image-front.png'

import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const rawData = await fetchData()
    this.setState({ data: rawData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country: country })

  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="covid-19"></img>
        <Cards data={data}>

        </Cards>
        <CountrySelect handleCountryChange={this.handleCountryChange}>

        </CountrySelect>
        <Charts data={data} country={country}>

        </Charts>
      </div>
    )
  }
}

export default App;
