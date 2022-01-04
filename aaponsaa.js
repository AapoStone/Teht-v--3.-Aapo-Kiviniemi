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
        let vastausObject = JSON.parse(xmlhttp.response);

    //Lets add text    
    document.getElementById("vastaus").innerHTML = vastausObject.main.temp;
    //Lets add image    
    
    }
    }
    