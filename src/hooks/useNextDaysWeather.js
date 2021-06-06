import { useEffect, useState } from "react";
import { getCurrentForecastByCity } from "services/forecastService";

const useNextDaysWeather = (nameCity = '') => {
    const [nextDays, setNextDays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCurrentForecastByCity({ nameCity })
            .then(response => response.json())
            .then(data => {
                const forecast = data ? data.forecast : null;
                const forecastday = forecast ? [...forecast.forecastday] : []
                let forecastNextDays = [...forecastday];
                // remove current weather
                forecastNextDays.shift()
                setNextDays(data ? forecastNextDays : [])
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [nameCity])

    return [nextDays, loading, error];
}

export { useNextDaysWeather }