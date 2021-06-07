import { useEffect, useState } from "react";
import { getCurrentForecastByCity } from "services/forecastService";

const useNextDaysWeather = (nameCity = '', days = 7) => {
    const [nextDays, setNextDays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCurrentForecastByCity({ nameCity, days })
            .then(response => response.json())
            .then(data => {
                const { error } = data;
                console.log("getCurrentForecastByCity-data", data);
                console.log("error", error);
                if (error === undefined) {
                    const forecast = data ? data.forecast : null;
                    const forecastday = forecast ? [...forecast.forecastday] : []
                    let forecastNextDays = [...forecastday];
                    // remove current weather
                    forecastNextDays.shift()
                    setNextDays(data ? forecastNextDays : [])
                } else {
                    setError(error);
                }
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [nameCity, days])

    return [nextDays, loading, error];
}

export { useNextDaysWeather }