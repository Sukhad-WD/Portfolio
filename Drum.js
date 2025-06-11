var n=document.querySelectorAll(".drum").length;

for(let i=0;i<n;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

//this.style.color="white";
var buttonInnerHTML=this.innerHTML;

sound(buttonInnerHTML);
    
}
);
}
document.addEventListener("keypress",function(event){
    sound(event.key);

});

function sound(key){
 switch(key){

case "l":
var tom=new Audio('sounds/snare.mp3');
tom.play();
break;

case "e":
var tom=new Audio('sounds/tom-1.mp3');
tom.play();
break;

case "t":
var tom=new Audio('sounds/crash.mp3');
tom.play();
break;

case "s":
var tom=new Audio('sounds/tom-2.mp3');
tom.play();
break;

case "f":
var tom=new Audio('sounds/tom-3.mp3');
tom.play();
break;

case "u":
var tom=new Audio('sounds/tom-4.mp3');
tom.play();
break;

case "n":
var tom=new Audio('sounds/kick-bass.mp3');
tom.play();
break;
 }

}

