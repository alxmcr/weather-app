import { useEffect, useState } from "react";
import { getCurrentForecastByCity } from "services/forecastService";

const useForecastByDay = (nameCity = '') => {
    const [forecastByDay, setForecastByDay] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCurrentForecastByCity({ nameCity })
            .then(response => response.json())
            .then(data => {
                const { error } = data;
                if (error === undefined) {
                    const forecast = data ? data.forecast : null;
                    const forecastday = forecast !== null || forecast !== undefined
                        ? [...forecast.forecastday]
                        : []
                    let hoursByDay = [...forecastday].shift();
                    setForecastByDay(hoursByDay ? hoursByDay : {})
                } else {
                    setError(error);
                }
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [nameCity])

    return [forecastByDay, loading, error];
}

export { useForecastByDay }