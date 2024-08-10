const $ = document.querySelector.bind(document);

const body = $("body");
const content = $(".content");
const searchInput = $(".search");
const city = $(".city");
const country = $(".country");
const time = $(".time");
const value = $(".value");
const shortDesc = $(".short-desc");
const visibility = $(".visibility span");
const wind = $(".wind span");
const cloud = $(".cloud span");

const renderWeather = async (searchValue) => {
    // Get weather data from API
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${searchValue}&lon=10.99&appid=700b8a9e17e4e417b7ac8748c3b7e731`;

    let data = await fetch(apiURL).then((response) => response.json());
    console.log(data);

    if (data.cod === 200) {
        content.classList.remove("hide");
        city.textContent = data.name;
        country.textContent = data.sys.country;
        time.textContent = new Date().toLocaleString("vi");
        // Convert temperature from Kelvin to Celsius
        let temp = Math.round(data.main.temp - 273.15);
        console.log(temp);
        value.textContent = temp + "°C";

        shortDesc.textContent = data.weather[0] ? data.weather[0].description : "";
        visibility.textContent = data.visibility + "m";
        wind.textContent = data.wind.speed + "m/s";
        cloud.textContent = data.main.humidity + "%";

        // Change background color based on temperature

        if (temp > 20) {
            body.classList.add("hot");
        } else {
            body.classList.remove("hot");
        }
    } else {
        content.classList.add("hide");
    }
};

searchInput.addEventListener("change", (e) => {
    let searchValue = searchInput.value.trim();
    renderWeather(searchValue);
});

renderWeather(0);
