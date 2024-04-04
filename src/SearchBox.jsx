import { useState } from "react";
import React from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ updateWeather }) {
    let [city, useCity] = useState("");

    async function onSearch() {
        let API_URL_RAW = "https://api.openweathermap.org/data/2.5/weather?";
        let API_KEY = "012db46b4a1e7b913d2ee3ea78f4a508";

        let API_URL = `${API_URL_RAW}q=${city}&appid=${API_KEY}&units=metric`;
        let response = await fetch(API_URL);
        let weatherDataRaw = await response.json();
        console.log(weatherDataRaw);

        updateWeather({
            city: weatherDataRaw.name,
            temp: weatherDataRaw.main.temp,
            tempMin: weatherDataRaw.main.temp_min,
            tempMax: weatherDataRaw.main.temp_max,
            humidity: weatherDataRaw.main.humidity,
            windSpeed: weatherDataRaw.wind.speed,
            feelsLike: weatherDataRaw.main.feels_like,
            weather: weatherDataRaw.weather[0].main,
        });

        useCity("");
    }

    return (
        <div className="search-box">
            <TextField
                id="searchBox"
                label="Search for a city..."
                variant="outlined"
                required
                value={city}
                onChange={(e) => useCity(e.target.value)}
                sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#909090",
                    },
                    "& .MuiFormLabel-root": {
                        color: "#909090",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: "rgb(81, 146, 243)",
                    },
                }}
            />
            {/* <button onClick={onSearch}>Search</button> */}
            <Button id="button" variant="outlined" onClick={onSearch}>
                Search
            </Button>
        </div>
    );
}
