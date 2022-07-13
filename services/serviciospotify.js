//Receta para consumir APIS con JS

//1. Para donde se va (la dirección) LA URI DEL SERVICIO
//Para la banda se cambia el id del URL
const URI='https://api.spotify.com/v1/artists/5C4PDR4LnhZTbVnKWXuDKD/top-tracks?market=US'
const URI2='https://api.spotify.com/v1/artists/7FBcuc1gsnv6Y1nwFtNRCb/top-tracks?market=US'

//2. A hacer que? CONFIGURO LA PETICIÓN
//Mayuscula porque es una constante y {}porque es un objeto, headers llevan cabezeras nombre y valor{}
const PETICIÓN = {
    method:'GET', 
    headers:{
        Authorization: "Bearer BQBVmV2TGZ4M3u5j1VRicX5_auIXTus6bd7tHEJU-T_dj3Daf1oHpwfyZyQK-ktuf6qd9aQP-HHmDpGsbIb2z3ZbXyBTWDcMCcZvUg9v8FNebPgpv5ZmFru0NaD7dVUlSiRZAyanedurUJX0DBpF98_W0lrMZyhCQ0PulVtRXcs9MaKZ4-lI_JPWV9eYan0Dgl8"
    }
}

//3. Vamos hacerlo CONSUMA EL API
//Dentro del then va una funcion anonima, porque no tiene nombre
//La respuesta debe ir en JSON, porque es la respuesta que retorna entre el cliente y el servidor que debe ir en formato json

fetch(URI2,PETICIÓN)//promesa: función asincrona
.then(function(respuesta){
return respuesta.json()//aseguro del formato de respuesta
})
.then(function(respuesta){
    console.log(respuesta)//OBJETO
    console.log(respuesta.tracks)//ARREGLO:punto para acceder al atributo, con 10 elementos
    pintarcanciones(respuesta.tracks)
})//Hago lo que yo quiera en la respuesta

.catch(function(error){
    console.log(error)
})

//FUNCIÓN
//Crear Función para pintar datos, function local
function pintarcanciones(canciones){

    //Pasos para pintar o rendereizar hacer render en la GUI
    //1.Creo una referencia a la base sobre la cual voy a pintar

    let fila = document.getElementById("fila")

    //2. Recorrer los datos que me llegan, para recorrer un arreglo se puede utilizar forEach
    canciones.forEach(function(cancion){
        //console.log("hola")

        //Aplicando Traversing ()
        //2.1 Creando columnas 
        let columna=document.createElement("div")
        columna.classList.add("col")

        //2.2 Creando la targeta CARD
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card", "h-100", "p-3", "shadow")//shadow para el relieve de la targetas

        //2.3 Creando el Audio
        let audio2 = document.createElement("audio")
        //Creando la clase para agregar el audio
        audio2.classList.add("w-100", "mt-3")
        audio2.src=cancion.preview_url
        //Para controlar el audio se utiliza los controles o controls
        audio2.setAttribute("controls", "controls")


        //2.4 NOMBRE DE LA CANCIÓN: Creando el nombre de la cancion 
        let nombreCancion=document.createElement("h3")
        nombreCancion.classList.add("text-center")
        //Para modificar el nombre de la cancion textContent
        nombreCancion.textContent=cancion.name

        //2.5 Creando la foto del album
        let fotoalbum=document.createElement("img")
        fotoalbum.classList.add("img-fluid", "w-100", "h-100")
        //Ruta de la API para llegar hasta las imagenes
        fotoalbum.src=cancion.album.images[0].url

        //2.6 Creando el atributo popularity
        let popularidad=document.createElement("h5")
        popularidad.classList.add("text-center", "mt-3", "text-primary", "fw-bold")
        popularidad.textContent='Popularidad: '+cancion.popularity

        //2.7 Creando el track
        let track=document.createElement("h4")
        track.classList.add("text-center", "mt-3")
        track.textContent="Track: " + cancion.track_number

        //FINAL: Defino Jerarquias (Padres e hijos) Agrego todos los audios dentro de las targetas (Audio, targeta columna)
        //La tarjeta tiene un hijo que se llama audio
        //La tarjeta tiene otro hijo
        tarjeta.appendChild (nombreCancion)
        //La tarjeta tiene
        tarjeta.appendChild(fotoalbum)
        //Agregando a la tarjeta la popularidad
        tarjeta.appendChild(popularidad)
        //Track 
        tarjeta.appendChild(track)
        //Se agrega a la tarjeta el audio
        tarjeta.appendChild(audio2)
        //La columna tiene un hijo que se llama tarjeta
        columna.appendChild(tarjeta)
        //La fila tiene un hijo que es la columna
        fila.appendChild(columna)
    })
}