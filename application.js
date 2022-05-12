window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureDesc = document.querySelector('.temperature-desc');
    let locationTimezone = document.querySelector('.timezone');
    let weatherIcon = document.querySelector('.weather_icon');

    if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    const apiKey = '/* insert your api key */'; 

    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=de&appid=${apiKey}&units=metric`;

    async function load() {
       let response = await fetch(api);
       let result = await response.json();
       console.log(result);
       const {temp} = result.current;
       const {description} = result.current.weather[0];
       const {icon} = result.current.weather[0];
       temperatureDegree.textContent = temp;
       temperatureDesc.textContent = description;
       locationTimezone.textContent = result.timezone;
        setIcon(icon);
    }
    load();
       })
     }
    function setIcon(icon) {
        weatherIcon.innerHTML = `<img src="icons/${icon}.png">`;
    }
   
})