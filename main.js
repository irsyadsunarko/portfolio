const greetspan = $( ".greetspan" );
const hour = new Date().getHours();
const greet = ["Selamat Pagi!", "Selamat Siang!", "Selamat Sore!", "Selamat Malam!"];
let welcomeText = "";

if (hour < 11) welcomeText = greet[0];
else if (hour < 15) welcomeText = greet[1];
else if (hour < 19) welcomeText = greet[2];
else welcomeText = greet[3];

$(greetspan).html(welcomeText);