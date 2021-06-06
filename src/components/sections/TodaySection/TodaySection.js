import TodayWeather from "components/cards/TodayWeather/TodayWeather";

const TodaySection = ({ nameCity = '' }) => {
    return (
        <section>
            <h2>Today</h2>
            <TodayWeather nameCity={nameCity} />
        </section>
    )
}

export default TodaySection;