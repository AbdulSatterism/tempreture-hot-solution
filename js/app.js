const API_KEY = '23b1bd60f4ef3aed9245af833f1de3e3';
const searchTempreture = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displayTempreture(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTempreture = (tempreture) => {
    setInnerText('city', tempreture.name)
    setInnerText('temp', tempreture.main.temp);
    setInnerText('condition', tempreture.weather[0].main);
    // set weaather icon
    const url = ` http://openweathermap.org/img/wn/${tempreture.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url)

    // console.log(tempreture.weather[0].icon)

}