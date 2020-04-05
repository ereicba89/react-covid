import React from 'react';

import { Cards, Charts, CountrySelect } from './components'
import styles from './App.module.css'

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards>

        </Cards>
        <CountrySelect>

        </CountrySelect>
        <Charts>

        </Charts>
      </div>
    )
  }
}

export default App;
