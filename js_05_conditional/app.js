let time = 10;
let wishMessage;

if(time > 0 && time<=12){

    wishMessage = "Good Morning";

}

else if (time >12 && time <=18){

    wishMessage = "Good Afternoon";
}
else if (time > 18 && time <=23 ) {

    wishMessage = "Good Evening";

}
else {

    wishMessage= "Enter proper Time";
}

console.info(wishMessage);

let day = new Date().getDay();
let today = '';
console.log(day);

switch (day) {
    case 0:
        today = "Sunday";
        break;

    case 1:
        today = "Monday";
        break;

    case 2:
        today = "Tuesday";
        break;

    case 3:
        today = "Wednsday";
        break;

    case 4:
        today = "Thursday";
        break;
        
    case 5:
        today = "Friday";
        break;
        
    case 6:
        today = "Saturday";
        break;
    default:
        today = "Enter Proper Day";
        break;
}

console.log(today);