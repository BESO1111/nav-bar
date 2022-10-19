var    x=[ "about", "home","contact","message","saxli","stumrebi"];

var linkebi=["inxex.html","home.html","contact.html","message.html","saxli.html","stumrebi.html"]

var ul = "<ul>";

for (var z=0; z < x.length; z++){

ul+='<li> <a href=" ' + linkebi[z] + ' ">' + x[z] + "</a> </li>";


}

ul+"</ul>"

document.getElementById("navi").innerHTML=ul;







function antebachakroba(){

    var foto = document.getElementById("img").src;


if(foto =='file:///C:/Users/user/Desktop/nav%20bar/light%20off.png')
{

document.getElementById("img").src = "../nav bar/light onn.png ";

document.getElementById("anteba").innerHTML="ჩააქრე"
}


else {

    document.getElementById("img").src = "../nav bar/light off.png";

    document.getElementById("anteba").innerHTML="ანთება";
    

}

}


function gamotvla(){

let q=parseInt (document.getElementById("num1").value)

let w=  document.getElementById("operator").value;

var e=parseInt  (document.getElementById("num2").value)

switch(w){
case "+":
 document.getElementById("answeri").innerHTML= q+e;

    break;

    case "-":
        document.getElementById("answeri").innerHTML= q-e;

 break;

 default: document.getElementById("answeri").innerHTML="ar agirchevia rajsdgfsdg"


}





}