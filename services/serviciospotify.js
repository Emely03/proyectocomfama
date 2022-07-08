//Receta para consumir APIS con JS

//1. Para donde se va (la dirección) LA URI DEL SERVICIO
const URI='https://api.spotify.com/v1/artists/5C4PDR4LnhZTbVnKWXuDKD/top-tracks?market=US'

//2. A hacer que? CONFIGURO LA PETICIÓN
//Mayuscula porque es una constante y {}porque es un objeto, headers llevan cabezeras nombre y valor{}
const PETICIÓN = {
    method:'GET', 
    headers:{
        Authorization: "Bearer BQAc53C92SnxSc_qbtXAIXLNUm9yHJ3z8ZffQGK5Dt5Kg_4MTsJ2RFkZB6M1tBGJX-Km1ZnCEmuzJU2iIhP3QZ0c-sdAm4TYGxnCQSh0ypTYR9XekdShvA7KGFCoD2-DHxoHBd81Na4qz1mklcmn6RdPt1Lx9IQffc1Eiy5bG1Hcykx5XGPRP5IN8kpqiZT1MLE"
    }
}

//3. Vamos hacerlo CONSUMA EL API
//Dentro del then va una funcion anonima, porque no tiene nombre
//La respuesta debe ir en JSON, porque es la respuesta que retorna entre el cliente y el servidor que debe ir en formato json

fetch(URI,PETICIÓN)//promesa: función asincrona
.then(function(respuesta){
return respuesta.json()//aseguro del formato de respuesta
})
.then(function(respuesta){
    console.log(respuesta)//OBJETO
    console.log(respuesta.tracks)//ARREGLO:punto para acceder al atributo, con 10 elementos
    respuesta.tracks.forEach(function(cancion){
        console.log(cancion.preview_url)
    })
})//Hsgo lo que yo quiera en la respuesta

.catch(function(error){
    console.log(error)
})
