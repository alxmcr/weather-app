import { basicFormatDateStr } from 'helpers/dateHelpers';
import styles from './NextDayCard.module.css'

const NextDayCard = ({ nextDay }) => {
    const { date, day } = nextDay;

    return (
        <div className={styles.NextDay}>
            <p className={styles.NextDayDate}>{basicFormatDateStr(date, 'en-US')}</p>
            <img src={day.condition.icon}
                alt={day.condition.text}
                className={styles.NextDayImage}
            />
            <p className={styles.NextDayTemperatures}>
                {day.mintemp_c} / {day.maxtemp_c} °C
            </p>
        </div>
    )
}

export default NextDayCard;