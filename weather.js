const apiKey=`9876f785cc1f0c498776cdef61f48a1f`;
async function fetchweatherData(city){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

    const data =await response.json(); 
    updateWeatherUI(data); 
}
const cityelement=document.querySelector(".city");
const temperature=document.querySelector(".temp");
const windspd=document.querySelector(".wind-speed");
const humidity=document.querySelector(".humidity-percent");
const visibility=document.querySelector(".visibility-km");
const descpretion=document.querySelector(".info");
const date=document.querySelector(".date");

function updateWeatherUI(data){
    cityelement.textContent=data.name;
    temperature.textContent=`${Math.round(data.main.temp)}°C`;
    windspd.textContent=`${data.wind.speed}km/h`;
    humidity.textContent=`${data.main.humidity}%`;
    visibility.textContent=`${data.visibility/1000}km`;
    descpretion.textContent=data.weather[0].description;
    
    const currdate=new Date();
    date.textContent=currdate.toDateString();
 }  
 const formelem=document.querySelector(".search");
 const inputElement=document.querySelector(".city-input");

 formelem.addEventListener("submit",function(e){
    e.preventDefault();
    const city =inputElement.value;
    if(city!==""){
        fetchweatherData(city);

    }
 });