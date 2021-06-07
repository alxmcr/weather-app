import HourWeather from 'components/cards/HourWeather/HourWeather'
import { useForecastByDay } from 'hooks/useForecastByDay'
import styles from './ForecastByDaySection.module.css'

const ForecastByDaySection = ({ nameCity = '' }) => {
    const [forecastByDay, loading, error] = useForecastByDay(nameCity)

    if (loading) return <p>Loading the weather for next hours...</p>
    if (error !== null) {
        return <p>I'm so sorry, there was an error. {error.message} Please, try again.</p>
    }

    console.log({ forecastByDay })

    return (
        <section className={styles.ForecastByDaySection}>
            <h2>Next Hours</h2>
            {

                forecastByDay.hour
                    ? (
                        <div className={styles.ForecastByDayHours}>
                            {
                                forecastByDay.hour.map((hourWeather, index) => (
                                    <HourWeather key={index} weather={hourWeather} />
                                ))
                            }
                        </div>
                    ) : <p>There isn't any information about next hours.</p>
            }
        </section>
    )
}

export default ForecastByDaySection;