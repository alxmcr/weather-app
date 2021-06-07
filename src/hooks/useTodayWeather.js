import { useEffect, useState } from "react";
import { getCurrentWeatherByCity } from "services/weatherService";

export function useTodayWeather(nameCity = '') {
    const [weather, setWeather] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCurrentWeatherByCity({ nameCity })
            .then(response => response.json())
            .then(data => {
                const { error } = data;
                if (error === undefined) {
                    setWeather(data)
                } else {
                    setError(error);
                }
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [nameCity])

    return [weather, loading, error];
}