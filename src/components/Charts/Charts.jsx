import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Charts.module.scss'

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData())
    }
    console.log(dailyData)

    fetchApi()
  }, [])

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infectados',
            borderColor: '#3333ff',
            backgroundColor: 'rgba(0,0,255,0.5)',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Muertes',
            borderColor: 'red',
            backgroundColor: 'rgba(255,0, 0,0.5)',
            fill: true,
          },
        ],
      }}></Line>
  ) : null

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infectados', 'Recuperados', 'Muertes'],
        datasets: [
          {
            label: 'Personas',
            backgroundColor: [
              'rgba(0 ,0, 255, 0.5)',
              'rgba(0 ,255, 0, 0.5)',
              'rgba(255 ,0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Estado actual en ${country}` },
      }}></Bar>
  ) : null

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  )
}

export default Charts
