function getWeather() {
    const city = document.getElementById('London, UK (51.51, -0.13)').value;
    const apiKey = '3906cca4e803368a1aaf5a0b9f14d33d';
    const apiUrl = 
    "https://api.openweathermap.org/data/2.5/weather?q=${London, UK (51.51, -0.13}&appid=${3906cca4e803368a1aaf5a0b9f14d33d}&units=metric";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
}
