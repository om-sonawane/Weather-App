async function getWeather() {
    const location = document.getElementById('location').value;
    const resultDiv = document.getElementById('result');

    if (!location) {
        resultDiv.textContent = 'Please enter a location.';
        resultDiv.style.opacity = '1';
        return;
    }

    const apiKey = '0e82d314af0448baab262937252602';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Location not found');

        const data = await response.json();
        const temperature = data.current.temp_c;
        resultDiv.innerHTML = `The current temperature in <strong>${location}</strong> is <strong>${temperature}°C</strong>.`;
        resultDiv.style.opacity = '1';
    } catch (error) {
        resultDiv.textContent = 'Error fetching weather data. Please try again.';
        resultDiv.style.opacity = '1';
    }
}
