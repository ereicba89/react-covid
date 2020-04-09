import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import Chart from 'react-apexcharts'
import moment from 'moment'

import styles from './Charts.module.scss'

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData())
    }

    fetchApi()
  }, [])

  const lineChart = dailyData.length ? (
    <Chart
      series={[
        {
          name: 'Infectados',
          data: dailyData.map(({ confirmed }) => confirmed),
        },
        {
          name: 'Muertes',
          data: dailyData.map(({ deaths }) => deaths),
        },
      ]}
      options={{
        legend: {
          show: true,
        },
        colors: ['#3333ff', 'red'],
        chart: {
          toolbar: {
            show: true,
          },
          id: 'area',
        },
        xaxis: {
          labels: {
            trim: false,
          },
          categories: dailyData.map(({ date }) =>
            moment(date).format('MMMM Do YYYY')
          ),
        },
      }}
      type='area'
      width='800px'
    />
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
