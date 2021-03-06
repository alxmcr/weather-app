import { faCloud, faMapMarkedAlt, faTint, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { basicFormatDateStr } from "helpers/dateHelpers";
import { useTodayWeather } from "hooks/useTodayWeather";
import styles from './TodayWeather.module.css'

const TodayWeather = ({ nameCity = '' }) => {
    const [todayWeather, loading, error] = useTodayWeather(nameCity);

    if (loading) {
        return (
            <p className={styles.TodayInfoMSG}>Loading the today's weather for {nameCity.toUpperCase()}</p>
        )
    }
    if (error !== null) {
        return (
            <p className={styles.TodayErrorMSG}>I'm so sorry, there was an error. {error.message} Please, try again.</p>
        )
    }

    return (
        <div className={styles.Today}>
            <div className={styles.TodayHeader}>
                <div className={styles.TodayLocation}>
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    <h3 className={styles.TodayLocationDetails}>
                        {todayWeather.location.name}
                    </h3>
                </div>
                <p className={styles.TodayLastUpdated}>
                    {basicFormatDateStr(todayWeather.current.last_updated, 'en-US')}
                </p>
            </div>
            <div className={styles.TodayBody}>
                <img
                    src={todayWeather.current.condition.icon}
                    alt={todayWeather.current.condition.text}
                    className={styles.TodayImage}
                />
                <div className={styles.TodayCondition}>
                    <p className={styles.TodayTemperature}>
                        {todayWeather.current.temp_c} °C
                        </p>
                    <p className={styles.TodayNameCondition}>
                        {todayWeather.current.condition.text}
                    </p>
                </div>
            </div>
            <div className={styles.TodayFooter}>
                <div className={styles.TodayNatureInfo}>
                    <i className={styles.TodayIcon}>
                        <FontAwesomeIcon icon={faWind} />
                    </i>
                    <p className={styles.TodayNatureEvent}>
                        {todayWeather.current.wind_kph} Km/h
                    </p>
                </div>
                <div className={styles.TodayNatureInfo}>
                    <i className={styles.TodayIcon}>
                        <FontAwesomeIcon icon={faTint} />
                    </i>
                    <p className={styles.TodayNatureEvent}>
                        {todayWeather.current.humidity}%
                    </p>
                </div>
                <div className={styles.TodayNatureInfo}>
                    <i className={styles.TodayIcon}>
                        <FontAwesomeIcon icon={faCloud} />
                    </i>
                    <p className={styles.TodayNatureEvent}>
                        {todayWeather.current.cloud}%
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TodayWeather;