var red=document.getElementById("red");
var yellow=document.getElementById("yellow");
var green=document.getElementById("green");
var redd=document.getElementById("redd");

setInterval(()=>
{
    setTimeout(()=>
    {
        red.style.opacity=1;
        green.style.opacity=0;
        yellow.style.opacity=0;
        redd.src="https://thumbs.dreamstime.com/z/cartoon-bodyguard-stop-cartoon-illustration-bodyguard-holding-up-stop-sign-135524686.jpg";
        // red.style.backgroundColor="red";
        // red.innerHTML="STOP";
        // red.style.textAlign="center";
    },1000);

    setTimeout(()=>
    {
        red.style.opacity=0;
        green.style.opacity=0;
        yellow.style.opacity=1;
        yell.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9Yyje5aT8j0ZhXGmEJCZBNX-MxeBqaJ2Rt8OBvqZJdHtZaMHsYMWK6id96Y8JhZyF2g&usqp=CAU";
        // yellow.style.backgroundColor="yellow";
        // yellow.innerHTML="READY";
    },3000);

    setTimeout(()=>
    {
        red.style.opacity=0;
        green.style.opacity=1;
        yellow.style.opacity=0;
        gre.src="https://media.gettyimages.com/id/157397317/photo/an-illuminated-green-led-image-of-a-walking-person.jpg?s=612x612&w=gi&k=20&c=enUAYksxvqkSZ_Fqw_0ErCvTrUpQ1Cc8zHT5IITC8Qo= ";

        // green.style.backgroundColor="green";
        // green.innerHTML="GO";
    },5000);
},6000);

// setInterval(()=>
// {
//     traffic();
// },6000)
