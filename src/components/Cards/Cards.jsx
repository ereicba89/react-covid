import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.scss'
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography variant='h5' color='textSecondary' gutterBottom>
              Infectados
            </Typography>
            <Typography variant='h5' color='primary'>
              <CountUp
                start={0}
                end={confirmed ? confirmed.value : 0}
                duration={2.5}
                separator=','></CountUp>
            </Typography>
            <br></br>
            <Typography color='textSecondary' gutterBottom>
              {new Date(lastUpdate).toLocaleDateString('ES-es')}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography variant='h5' color='textSecondary' gutterBottom>
              Recuperados
            </Typography>
            <Typography variant='h5' className={styles.textRecovered}>
              <CountUp
                start={0}
                end={recovered ? recovered.value : 0}
                duration={2.5}
                separator=','></CountUp>
            </Typography>
            <br></br>
            <Typography color='textSecondary' gutterBottom>
              {new Date(lastUpdate).toLocaleDateString('ES-es')}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography variant='h5' color='textSecondary' gutterBottom>
              Muertes
            </Typography>
            <Typography variant='h5' color='error'>
              <CountUp
                start={0}
                end={deaths ? deaths.value : 0}
                duration={2.5}
                separator=','></CountUp>
            </Typography>
            <br></br>
            <Typography color='textSecondary' gutterBottom>
              {new Date(lastUpdate).toLocaleDateString('ES-es')}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
