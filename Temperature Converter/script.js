// Get references to HTML elements
const temperatureInput = document.getElementById('degree');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convert');
const resultDiv = document.getElementById('result');

// Function to convert temperature
function convertTemperature(event) {
    event.preventDefault(); // Prevent page reload

    const temp = parseFloat(temperatureInput.value);
    const inputUnit = unitSelect.value; // Get the selected input unit (Celsius or Fahrenheit)

    // Error handling for invalid input
    if (isNaN(temp)) {
        resultDiv.innerHTML = 'Please enter a valid number.';
        return;
    }

    let celsius, fahrenheit, kelvin;

    // Perform conversions based on input unit
    if (inputUnit === 'celsius') {
        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;
    } else if (inputUnit === 'fahrenheit') {
        celsius = (temp - 32) * 5 / 9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    }

    // Display results for all units
    resultDiv.innerHTML = `
        <p>Celsius: ${celsius.toFixed(2)}°C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)}°F</p>
        <p>Kelvin:${kelvin.toFixed(2)}K</p>
    `;
}

// Add event listener for the Convert button
convertBtn.addEventListener('click', convertTemperature);

