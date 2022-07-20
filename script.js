let weather =
{
    apikey : "afb7f689abba7158758eb99063869804",
    fetchweather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+ this.apikey)
        .then(
            response => response.json() 
        )
        .then(data=> this.displayweather(data))
// in this tthe reult of the fetch stored in the reponse which then do the response.json and the result of which is stored in the data which then autommaticallly call the displayweather functionn
// The one benefit of the arrow function is that we don't need to call it by name if it it is part of some parent function
    },
    displayweather: function(data)
    {
        // console.log(data)
        /// This is called the de-structuring
       const {name} = data
       const {icon,description} = data.weather[0]
       const {temp , humidity} = data.main
       const {speed} = data.wind
       console.log(name,temp,description)
       document.querySelector(".city").innerText = "Weather in " + name;
    //    document.querySelector(".temperature").innerText = "Temperature: " + temp +"°C";
       document.querySelector(".humidity").innerText = "Humidity: " + humidity+"%";
       document.querySelector(".cityvalue").innerText = name;
       document.querySelector(".windspeed").innerText = "Wind Speed: " + speed+" km/h";
       document.querySelector(".tempvalue").innerText = temp+"°C";
       document.querySelector(".description").innerText = "Description: " + description;
       document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
       document.querySelector(".information").classList.remove("loading")
       document.body.style.background= "url('http://source.unsplash.com/1600x900/?"+ name +"')"
       

    },
    search : function()
    {
       this.fetchweather(document.querySelector(".searchbar").value)
    }
    


};
document.querySelector("#searchbutton").addEventListener("click" , function(){weather.search()})
// the keyup return the event

document.querySelector(".searchbar").addEventListener("keyup",function(event){
    if(event.key == "Enter")
    {
        weather.search();
    }

})
// function x (x, y){
//     x + y

// }

// (a,b) => a + b

// https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=afb7f689abba7158758eb99063869804

