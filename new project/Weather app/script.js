let url = 'http://api.weatherapi.com/v1/current.json?key=8e5445931a464c1f8e7111542252806&q=&aqi=yes';

let Name = document.getElementById('name');
let DateTime = document.getElementById('date');
let Icon = document.getElementById('icon');
let Condition = document.getElementById('condition');
let Humidity = document.getElementById('humidity');
let Country = document.getElementById('country');
let Region = document.getElementById('region');
let Lat = document.getElementById('lat');
let Lon = document.getElementById('lon');
let Wind = document.getElementById('wind_mph');
let Temp = document.getElementById('temp');
let Output = document.getElementById('output');
let RecentList = document.getElementById('recent-list');
let Span = document.getElementsByTagName('span');

// Initialize recent searches from localStorage
let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];

// Load recent searches on page load
document.addEventListener('DOMContentLoaded', function() {
    loadRecentSearches();
    
    // Add enter key support for search
    document.getElementById('input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            weatherShow();
        }
    });
});

function weatherShow() {
    let cityInput = document.getElementById('input');
    let city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    
    // Show loading state
    Output.classList.add('active');
    Output.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin" style="font-size: 2rem;"></i><p style="margin-top: 20px;">Loading weather data...</p></div>';
    
    // Create the query URL
    let query = url.replace('q=', 'q=' + encodeURIComponent(city));
    
    // Fetch weather data
    fetch(query)
        .then((response) => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then((data) => {
            // Save to recent searches
            saveToRecentSearches(city, data);
            
            // Display weather data
            displayWeatherData(data);
            
            // Clear input
            cityInput.value = '';
        })
        .catch(err => {
            console.error(err);
            showError('City not found. Please try again with a different city name.');
        });
}

function restoreOutputHTML() {
  Output.innerHTML = `
    <div class="content">
      <div class="city-name" id="name"><h1>Weather App</h1></div>
      <div id="date">Click search to get started</div>
    </div>
    <div class="weather">
      <div id="condition">Enter a city to see weather <img id="icon" /> </div>
      <h3>Humidity: <span id="humidity">--</span></h3>
      <h3>Country: <span id="country">--</span></h3>
      <h3>Region: <span id="region">--</span></h3>
      <h3>Location: Lat <span id="lat">--</span> Lon <span id="lon">--</span></h3>
      <h3>Wind Speed: <span id="wind_mph">--</span> mph</h3>
      <h3>Temperature: <span id="temp">--</span>°C</h3>
    </div>
  `;
  // Re-assign DOM elements after restoring HTML
  Name = document.getElementById('name');
  DateTime = document.getElementById('date');
  Icon = document.getElementById('icon');
  Condition = document.getElementById('condition');
  Humidity = document.getElementById('humidity');
  Country = document.getElementById('country');
  Region = document.getElementById('region');
  Lat = document.getElementById('lat');
  Lon = document.getElementById('lon');
  Wind = document.getElementById('wind_mph');
  Temp = document.getElementById('temp');
}

function displayWeatherData(data) {
    restoreOutputHTML();
    // Update DOM elements
    Name.innerHTML = `<h1>${data.location.name}</h1>`;
    Country.innerHTML = data.location.country;
    Region.innerHTML = data.location.region;
    Lat.innerHTML = data.location.lat.toFixed(2);
    Lon.innerHTML = data.location.lon.toFixed(2);
    Condition.innerHTML = `${data.current.condition.text} <img id="icon" src="https:${data.current.condition.icon}" alt="weather icon" />`;
    Humidity.innerHTML = data.current.humidity + "%";
    Wind.innerHTML = data.current.wind_mph + " mph";
    Temp.innerHTML = data.current.temp_c + "°C";
    
    // Show the output
    Output.classList.add('active');
    
    // Real-time clock
    let currentTime = new Date(data.location.localtime);
    let interval = setInterval(() => {
        currentTime.setSeconds(currentTime.getSeconds() + 1);
        const timeStr = currentTime.toLocaleString();
        DateTime.innerHTML = timeStr;
    }, 1000);
    
    // Click to show city & country
    DateTime.onclick = () => {
        clearInterval(interval);
        DateTime.innerHTML = `${data.location.name}, ${data.location.country}`;
    };
}

function saveToRecentSearches(city, weatherData) {
    // Create search object
    const searchItem = {
        city: city,
        timestamp: new Date().toISOString(),
        weatherData: {
            name: weatherData.location.name,
            country: weatherData.location.country,
            region: weatherData.location.region,
            condition: weatherData.current.condition.text,
            temp: weatherData.current.temp_c,
            humidity: weatherData.current.humidity,
            wind: weatherData.current.wind_mph,
            icon: weatherData.current.condition.icon
        }
    };
    
    // Remove if already exists
    recentSearches = recentSearches.filter(item => item.city.toLowerCase() !== city.toLowerCase());
    
    // Add to beginning
    recentSearches.unshift(searchItem);
    
    // Keep only last 5 searches
    if (recentSearches.length > 5) {
        recentSearches = recentSearches.slice(0, 5);
    }
    
    // Save to localStorage
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    
    // Update display
    loadRecentSearches();
}

function loadRecentSearches() {
    if (recentSearches.length === 0) {
        RecentList.innerHTML = '<p style="color: rgba(255,255,255,0.6); font-style: italic;">No recent searches</p>';
        return;
    }
    
    RecentList.innerHTML = recentSearches.map(item => `
        <div class="recent-item" onclick="loadFromRecent('${item.city}')">
            <i class="fas fa-map-marker-alt"></i> ${item.city}
        </div>
    `).join('');
}

function loadFromRecent(city) {
    document.getElementById('input').value = city;
    weatherShow();
}

function showError(message) {
    Output.classList.remove('active');
    Output.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ff6b6b; margin-bottom: 20px;"></i>
            <p style="font-size: 1.2rem; color: #fff;">${message}</p>
        </div>
    `;
}

// Clear recent searches function
function clearRecentSearches() {
    recentSearches = [];
    localStorage.removeItem('recentSearches');
    loadRecentSearches();
}

// Add clear button to recent searches section
document.addEventListener('DOMContentLoaded', function() {
    const recentSearchesDiv = document.getElementById('recent-searches');
    const clearButton = document.createElement('button');
    clearButton.innerHTML = '<i class="fas fa-trash"></i>';
    clearButton.className = 'clear-recent-btn';
    clearButton.onclick = clearRecentSearches;
    clearButton.title = 'Clear recent searches';
    
    // Add some CSS for the clear button
    const style = document.createElement('style');
    style.textContent = `
        .clear-recent-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: #fff;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .clear-recent-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }
        .recent-searches {
            position: relative;
        }
    `;
    document.head.appendChild(style);
    
    recentSearchesDiv.appendChild(clearButton);
});
