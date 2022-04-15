//Ejecutar funcion en el evento click

document.getElementById("btn_open").addEventListener("click",open_close_menu);



//declarar variables 

var side_menu=document.getElementById("menu_side");
var btn_menu=document.getElementById("btn_menu") ;
var body=document.getElementById("body");
var unselected_1=document.getElementById("anim_option_1")
var unselected_2=document.getElementById("anim_option_2")
var unselected_3=document.getElementById("anim_option_3")
var unselected_4=document.getElementById("anim_option_4")
var unselected_5=document.getElementById("anim_option_5")

//evento para mostrar y ocultar menu

function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
    unselected_1.classList.toggle("unselected");
    unselected_2.classList.toggle("unselected");
    unselected_3.classList.toggle("unselected");
    unselected_4.classList.toggle("unselected");
    unselected_5.classList.toggle("unselected");
}


/* creamos una funcion para cuando la  pantalla sea menor a 760px */

if(window.innerWidth<710){

    body.classList.add("body_move");
    side_menu.classList.add("menu_side_move");
    unselected_1.classList.add("unselected");
    unselected_2.classList.add("unselected");
    unselected_3.classList.add("unselected");
    unselected_4.classList.add("unselected");
    unselected_5.classList.add("unselected");
}


//haciendo el menu resonsive

window.addEventListener("resize",function(){

    if(window.innerWidth > 710){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu_side_move");
        unselected_1.classList.remove("unselected");
        unselected_2.classList.remove("unselected");
        unselected_3.classList.remove("unselected");
        unselected_4.classList.remove("unselected");
        unselected_5.classList.remove("unselected");
    }

    if(window.innerWidth<717){

        body.classList.add("body_move");
        side_menu.classList.add("menu_side_move");
        unselected_1.classList.add("unselected");
        unselected_2.classList.add("unselected");
        unselected_3.classList.add("unselected");
        unselected_4.classList.add("unselected");
        unselected_5.classList.add("unselected");
    }
    
});