import ForecastByDaySection from "components/sections/ForecastByDaySection/ForecastByDaySection";
import NextDaysSection from "components/sections/NextDaysSection/NextDaysSection";
import TodaySection from "components/sections/TodaySection/TodaySection";
import { useState } from "react";
import styles from './HomePage.module.css'

export const HomePage = () => {
    const [searching, setSearching] = useState(false);
    const [nameCity, setNameCity] = useState("");

    const handleNameCity = (e) => {
        setSearching(false);
        setNameCity(e.target.value);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        setSearching(true)
    }

    return (
        <>
            <h1 className={styles.HomeTitle}>Weather App</h1>
            <form onSubmit={handleSearch} className={styles.Form}>
                <div className={styles.FormInputGroup}>
                    <label htmlFor="nameCity"
                        className={styles.FormLabel}>City:</label>
                    <input type="search"
                        id="nameCity"
                        name="nameCity"
                        className={styles.FormInputSearch}
                        value={nameCity}
                        onChange={handleNameCity}
                        placeholder="Enter some city"
                        required
                        autoComplete="off" />
                </div>
                <button type="submit"
                    className={styles.FormButtonSearch}>Search</button>
            </form>
            {
                searching && (
                    <>
                        <TodaySection
                            nameCity={nameCity}
                            setNameCity={setNameCity}
                        />
                        <ForecastByDaySection nameCity={nameCity} />
                        <NextDaysSection nameCity={nameCity} />
                    </>
                )
            }
        </>
    )
}