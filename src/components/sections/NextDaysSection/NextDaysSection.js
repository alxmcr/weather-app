import NextDayCard from "components/cards/NextDayCard/NextDayCard";
import { useNextDaysWeather } from "hooks/useNextDaysWeather";
import styles from './NextDaysSection.module.css'

const NextDaysSection = ({ nameCity = '' }) => {
    const [nextDays, loading, error] = useNextDaysWeather(nameCity)

    if (loading) {
        return (
            <p className={styles.NextDaysInfoMSG}>Loading the information about weather in next days for {nameCity.toUpperCase()}</p>
        )
    }
    if (error !== null) {
        return (
            <p className={styles.NextDaysErrorMSG}>I'm so sorry, there was an error. {error.message} Please, try again.</p>
        )
    }

    return (
        <section className={styles.NextDaysSection}>
            <h2 className={styles.NextDaysTitle}>Next days</h2>
            {  nextDays.length === 0
                ? <p>There isn't information about next days.</p>
                : (
                    <div className={styles.NextDaysGroup}>
                        {
                            nextDays.map((nextDay, index) =>
                                <NextDayCard key={index} nextDay={nextDay} />
                            )
                        }
                    </div>
                )
            }
        </section>
    )
}

export default NextDaysSection;