document.addEventListener('DOMContentLoaded', function () {

    // Get the important elements from the page (input fields, dropdown, button, result area)
    const tempInput = document.getElementById('tempInput'); // Where the user enters the temperature
    const conversionType = document.getElementById('conversionType'); // Where the user picks Celsius to Fahrenheit or vice versa
    const convertButton = document.getElementById('convertButton'); //The button that triggers the conversion
    const resultSection = document.getElementById('convertedTemp'); // Where the result will show up
    const errorMessage = document.getElementById('error-message'); // Where error messages will show if something goes wrong

        // This function does the temperature conversion
    function convertTemperature() {
        errorMessage.textContent = '';

                
        const temperature = parseFloat(tempInput.value);
        
        // Get which conversion the user wants (Celsius to Fahrenheit or Fahrenheit to Celsius)
        const conversion = conversionType.value;

        // Check if the user entered a valid number. If not, show an error message
        if (isNaN(temperature)) {
            errorMessage.textContent = 'Please enter a valid number for temperature.';
            resultSection.textContent = '';
            return;
        }

        let convertedTemp;
        if (conversion === 'cToF') {            
            // Convert Celsius to Fahrenheit using the formula: F = (C * 9/5) + 32
            convertedTemp = (temperature * 9/5) + 32;
            resultSection.textContent = `${temperature}°C is ${convertedTemp.toFixed(2)}°F`;
        } else if (conversion === 'fToC') {
            // Convert Fahrenheit to Celsius using the formula: C = (F - 32) * 5/9
            convertedTemp = (temperature - 32) * 5/9;
            resultSection.textContent = `${temperature}°F is ${convertedTemp.toFixed(2)}°C`;
        }
    }

    // When the "Convert" button is clicked, run the conversion
    convertButton.addEventListener('click', convertTemperature);
});

