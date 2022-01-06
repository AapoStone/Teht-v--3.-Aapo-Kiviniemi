//EventListeners
document.querySelector("#rovaniemi").addEventListener("click", rovaniemi);
document.querySelector("#oulu").addEventListener("click", oulu);
document.querySelector("#kemijärvi").addEventListener("click", kemijärvi);
document.querySelector("#helsinki").addEventListener("click", helsinki);
document.querySelector("#posio").addEventListener("click", posio);


function rovaniemi(){

let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Rovaniemi&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2",true);

xmlhttp.send();



xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

        
        let weatherObject = JSON.parse(xmlhttp.response);

      
    document.getElementById("main").innerHTML = weatherObject.weather[0].main;
    document.getElementById("description").innerHTML = weatherObject.weather[0].description;
    document.getElementById("temperature").innerHTML = weatherObject.main.temp + " &#8451;";
    document.getElementById("feelslike").innerHTML = weatherObject.main.feels_like + " &#8451;";
    document.getElementById("windspeed").innerHTML = weatherObject.wind.speed + " m/s";

    document.getElementById("suomi").src=("images/saakarttaRovaniemi.png");

    }
    }
}

function oulu(){
    
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Oulu&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2",true);
    
    xmlhttp.send();
    
    
   
    xmlhttp.onreadystatechange=function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
    
            
            let weatherObject = JSON.parse(xmlhttp.response);
    
          
        document.getElementById("main").innerHTML = weatherObject.weather[0].main;
        document.getElementById("description").innerHTML = weatherObject.weather[0].description;
        document.getElementById("temperature").innerHTML = weatherObject.main.temp + " &#8451;";
        document.getElementById("feelslike").innerHTML = weatherObject.main.feels_like + " &#8451;";
        document.getElementById("windspeed").innerHTML = weatherObject.wind.speed + " m/s";

        document.getElementById("suomi").src=("images/saakarttaOulu.png");
        }
        }
    }

    function kemijärvi(){
        
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Kemijärvi&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2",true);
        
        xmlhttp.send();
        
        
        
        xmlhttp.onreadystatechange=function() {
            if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
        
                
                let weatherObject = JSON.parse(xmlhttp.response);
        
                
            document.getElementById("main").innerHTML = weatherObject.weather[0].main;
            document.getElementById("description").innerHTML = weatherObject.weather[0].description;
            document.getElementById("temperature").innerHTML = weatherObject.main.temp + " &#8451;";
            document.getElementById("feelslike").innerHTML = weatherObject.main.feels_like + " &#8451;";
            document.getElementById("windspeed").innerHTML = weatherObject.wind.speed + " m/s";
            
            document.getElementById("suomi").src=("images/saakarttaKemijarvi.png");
            }
            }
        }

        function helsinki(){
            
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2",true);
            
            xmlhttp.send();
            
            
            
            xmlhttp.onreadystatechange=function() {
                if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            
                    
                    let weatherObject = JSON.parse(xmlhttp.response);
            
                    
                document.getElementById("main").innerHTML = weatherObject.weather[0].main;
                document.getElementById("description").innerHTML = weatherObject.weather[0].description;
                document.getElementById("temperature").innerHTML = weatherObject.main.temp + " &#8451;";
                document.getElementById("feelslike").innerHTML = weatherObject.main.feels_like + " &#8451;";
                document.getElementById("windspeed").innerHTML = weatherObject.wind.speed + " m/s";

                document.getElementById("suomi").src=("images/saakarttaHelsinki.png");
                }
                }
            }

            function posio(){
                
                let xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Posio&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2",true);
                
                xmlhttp.send();
                
                
                
                xmlhttp.onreadystatechange=function() {
                    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
                
                        
                        let weatherObject = JSON.parse(xmlhttp.response);
                
                        
                    document.getElementById("main").innerHTML = weatherObject.weather[0].main;
                    document.getElementById("description").innerHTML = weatherObject.weather[0].description;
                    document.getElementById("temperature").innerHTML = weatherObject.main.temp + " &#8451;";
                    document.getElementById("feelslike").innerHTML = weatherObject.main.feels_like + " &#8451;";
                    document.getElementById("windspeed").innerHTML = weatherObject.wind.speed + " m/s";

                    document.getElementById("suomi").src=("images/saakarttaPosio.png");
                    }
                    }
                }
