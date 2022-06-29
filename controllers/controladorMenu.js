//pasos para controlar una etiqueta
//1. Traiga la etiqueta que quiere controlar (crear una variable que almacene la etiqueta)

let menu = document.getElementById('menunav')

//Detecto el evento: el scroll o movimiento en la ventana, función anónima
window.addEventListener("scroll", function () {
    //document.documentElement.scrollTop, se va al dom y trae el evento scroll
    //Condicional, si está en 0 el menu es transparente, sino es de otro color

    if (document.documentElement.scrollTop == 0) {
        //Menu transparente
        menu.classList.add("menu")
        menu.classList.remove("menu2")
    } else {
        menu.classList.add("menu2")
        menu.classList.remove("menu")
        //Menu color
    }

})
