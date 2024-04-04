import { useState } from "react";
import React from "react";
import "./WeatherWidget.css";
import SearchBox from "./SearchBox";
import WeatherDisplay from "./WeatherDisplay";

export default function WeatherWidget() {
    let [weatherData, useWeatherData] = useState({
        city: "",
        temp: "",
        tempMin: "",
        tempMax: "",
        humidity: "",
        windSpeed: "",
        feelsLike: "",
        weather: "",
    });

    function updateWeatherData(data) {
        useWeatherData(data);
    }

    return (
        <div className="weather-widget">
            <h1>Weather Widget</h1>
            <SearchBox updateWeather={updateWeatherData} />
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );
}
