const button = document.getElementById("Search-btn");
const input = document.getElementById("city-input")

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const cityCondition = document.getElementById("city-condition");


async function getData(cityName){
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=13cd7843a8d240a5a9e121532241111&q=${cityName}&aqi=yes`)

   return (await promise.json());
}

button.addEventListener("click", async ()=>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerHTML = `${result.location.name}, ${result.location.country}` ;
    cityTime.innerHTML = `${result.location.localtime}`;
    cityTemp.innerHTML = `${result.current.temp_c}` 
    cityCondition.innerHTML = `${result.current.condition.text}`  
})


