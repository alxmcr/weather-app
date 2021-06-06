import { extractTimeStrFromDate } from 'helpers/dateHelpers';
import styles from './HourWeather.module.css'

const HourWeather = ({ weather }) => {
    const { condition, time, temp_c } = weather;
    return (
        <div className={styles.HourWeather}>
            <div className={styles.HourWeatherHeader}>
                <img
                    src={condition.icon}
                    alt={condition.text}
                    className={styles.HourWeatherImage}
                />
            </div>
            <div className={styles.HourWeatherBody}>
                <p className={styles.HourWeatherTemperature}>
                    {temp_c} °C
                </p>
            </div>
            <div className={styles.HourWeatherFooter}>
                <p className={styles.HourWeatherTime}>
                    {extractTimeStrFromDate(time)}
                </p>
            </div>
        </div>
    )
}

export default HourWeather;