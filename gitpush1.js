function checkTemperature(temperature){
    let message="";
    if(temperature < 25){
        message = "cold";
    }
        else if (temperature >=25 && temperature < 30){
         message = "warm";
        } 
        else
        {
            message = "hot";
        } 
        return message;

    
    }
console.log(checkTemperature(20));
