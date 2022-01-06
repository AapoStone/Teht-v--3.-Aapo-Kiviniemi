//EventListeners
document.querySelector("#rovaniemi").addEventListener("click", rovaniemi);
document.querySelector("#oulu").addEventListener("click", oulu);
document.querySelector("#kemijärvi").addEventListener("click", kemijärvi);
document.querySelector("#helsinki").addEventListener("click", helsinki);
document.querySelector("#posio").addEventListener("click", posio);


function rovaniemi(){
//Lets create a HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Rovaniemi&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2",true);
//Send request
xmlhttp.send();


//Lets creata an event handler
xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

        //Response is ready
        //Lets parse JSON response
        let weatherObject = JSON.parse(xmlhttp.response);

    //Lets add text    
    document.getElementById("main").innerHTML = weatherObject.weather[0].main;
    document.getElementById("description").innerHTML = weatherObject.weather[0].description;
    document.getElementById("temperature").innerHTML = weatherObject.main.temp + " &#8451;";
    document.getElementById("feelslike").innerHTML = weatherObject.main.feels_like + " &#8451;";
    document.getElementById("windspeed").innerHTML = weatherObject.wind.speed + " m/s";
    }
    }
}

function oulu(){
    //Lets create a HTTP request
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Oulu&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2",true);
    //Send request
    xmlhttp.send();
    
    
    //Lets creata an event handler
    xmlhttp.onreadystatechange=function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
    
            //Response is ready
            //Lets parse JSON response
            let weatherObject = JSON.parse(xmlhttp.response);
    
        //Lets add text    
        document.getElementById("main").innerHTML = weatherObject.weather[0].main;
        document.getElementById("description").innerHTML = weatherObject.weather[0].description;
        document.getElementById("temperature").innerHTML = weatherObject.main.temp + " &#8451;";
        document.getElementById("feelslike").innerHTML = weatherObject.main.feels_like + " &#8451;";
        document.getElementById("windspeed").innerHTML = weatherObject.wind.speed + " m/s";
        }
        }
    }

    function kemijärvi(){
        //Lets create a HTTP request
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Kemijärvi&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2",true);
        //Send request
        xmlhttp.send();
        
        
        //Lets creata an event handler
        xmlhttp.onreadystatechange=function() {
            if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
        
                //Response is ready
                //Lets parse JSON response
                let weatherObject = JSON.parse(xmlhttp.response);
        
            //Lets add text    
            document.getElementById("main").innerHTML = weatherObject.weather[0].main;
            document.getElementById("description").innerHTML = weatherObject.weather[0].description;
            document.getElementById("temperature").innerHTML = weatherObject.main.temp + " &#8451;";
            document.getElementById("feelslike").innerHTML = weatherObject.main.feels_like + " &#8451;";
            document.getElementById("windspeed").innerHTML = weatherObject.wind.speed + " m/s";
            }
            }
        }

        function helsinki(){
            //Lets create a HTTP request
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2",true);
            //Send request
            xmlhttp.send();
            
            
            //Lets creata an event handler
            xmlhttp.onreadystatechange=function() {
                if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            
                    //Response is ready
                    //Lets parse JSON response
                    let weatherObject = JSON.parse(xmlhttp.response);
            
                //Lets add text    
                document.getElementById("main").innerHTML = weatherObject.weather[0].main;
                document.getElementById("description").innerHTML = weatherObject.weather[0].description;
                document.getElementById("temperature").innerHTML = weatherObject.main.temp + " &#8451;";
                document.getElementById("feelslike").innerHTML = weatherObject.main.feels_like + " &#8451;";
                document.getElementById("windspeed").innerHTML = weatherObject.wind.speed + " m/s";
                }
                }
            }

            function posio(){
                //Lets create a HTTP request
                let xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Posio&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2",true);
                //Send request
                xmlhttp.send();
                
                
                //Lets creata an event handler
                xmlhttp.onreadystatechange=function() {
                    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
                
                        //Response is ready
                        //Lets parse JSON response
                        let weatherObject = JSON.parse(xmlhttp.response);
                
                    //Lets add text    
                    document.getElementById("main").innerHTML = weatherObject.weather[0].main;
                    document.getElementById("description").innerHTML = weatherObject.weather[0].description;
                    document.getElementById("temperature").innerHTML = weatherObject.main.temp + " &#8451;";
                    document.getElementById("feelslike").innerHTML = weatherObject.main.feels_like + " &#8451;";
                    document.getElementById("windspeed").innerHTML = weatherObject.wind.speed + " m/s";
                    }
                    }
                }
