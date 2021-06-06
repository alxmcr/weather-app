import { useEffect, useState } from "react";
import { getCurrentWeatherByCity } from "services/weatherService";

export function useTodayWeather(nameCity = '') {
    const [weather, setWeather] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getCurrentWeatherByCity({ nameCity })
            .then(response => response.json())
            .then(data => setWeather(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [nameCity])

    return [weather, loading, error];
}