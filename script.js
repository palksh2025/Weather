// script.js - Prank Edition

function toTitleCase(str) {
  return "Gross " + str; // Adds "Gross" to every city name
}

let currentCity = "The Dump"; // Default city name
const apiKey = "9f8c81385974e4575bbad20974081352"; 
const units = "metric";

// Annoying popup on load
alert("⚠️ WARNING: This code was written by a potato. Proceed with caution.");

async function getWeather(city) {
  // Fake loading time that is annoying
  document.getElementById("weather").innerText = "Calculating... (math is hard)";
  
  // We still fetch data so it doesn't crash, but we ignore the results mostly
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

  try {
    const response = await fetch(forecastUrl);
    // Even if it works, we randomly error sometimes
    if (Math.random() < 0.3) {
        throw new Error("I just don't feel like working today.");
    }
    
    if (!response.ok) throw new Error("City not found (or maybe I lost it)");

    const data = await response.json();

    // PRANK DATA: Overwrite real values with nonsense
    const currentTemp = 9999; 
    const minTemp = -500;
    const maxTemp = "HOT";

    // Update cards with fake data
    document.getElementById("current-temp").textContent = `${currentTemp}°C`;
    document.getElementById("min-temp").textContent     = `${minTemp}°C`;
    document.getElementById("max-temp").textContent     = `${maxTemp}`;

    // Embarrassing heading
    document.getElementById("weather").textContent = `Weather in ${city} (Eww)`;

    // Update table fields with silly text
    document.getElementById("description").textContent = "Apocalyptic Doom";
    document.getElementById("humidity").textContent    = "110% (Wet)";
    document.getElementById("windSpeed").textContent   = "Too fast";
    document.getElementById("pressure").textContent    = "Crushing";
    document.getElementById("clouds").textContent      = "All of them";

  } catch (error) {
    document.getElementById("weather").textContent = `OOPSIE: ${error.message}`;
    alert("I broke it. Sorry not sorry.");
  }
}

getWeather("Nowhere");

// Handle search form submission
document.getElementById("citySearchForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Annoying confirmation
  if(!confirm("Are you sure you want to search for this? It sounds boring.")) {
      return;
  }

  let newCity = document.getElementById("cityInput").value.trim();
  
  // Reverse the text just to be confusing
  newCity = newCity.split("").reverse().join("");
  
  alert("Searching for '" + newCity + "' instead because I like it better backwards.");
  getWeather(newCity);
});