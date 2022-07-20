let products = [
    {
        nombre:"Wireless headphones",
        precio:120000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-virtual-ebaa6.appspot.com/o/venta1.jpg?alt=media&token=90ea7134-29ad-487b-b18b-877dc9caab34','https://firebasestorage.googleapis.com/v0/b/tienda-virtual-ebaa6.appspot.com/o/venta2.jpg?alt=media&token=22c667ff-a6d1-4842-9c78-6839e86bfc1c']
    },
    {
        nombre: "Gaming chair",
        precio:1000000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-virtual-ebaa6.appspot.com/o/venta9.jpg?alt=media&token=a350fb7e-b2f7-4e36-acd9-d3558ed039d3','https://firebasestorage.googleapis.com/v0/b/tienda-virtual-ebaa6.appspot.com/o/venta10.jpg?alt=media&token=474ce330-5d0d-439f-aef7-ddf0d2dde0fb']
    },
    {
        nombre: "SmartPhone",
        precio:2000000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-virtual-ebaa6.appspot.com/o/venta3.jpg?alt=media&token=6bc94cfa-ac63-48e2-b8c4-cdbfd19b4631','https://firebasestorage.googleapis.com/v0/b/tienda-virtual-ebaa6.appspot.com/o/venta4.jpg?alt=media&token=8a527b19-5e27-46da-97bd-7e7948316ef3']
    },
    {
        nombre: "Dog",
        precio:80000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tienda-virtual-ebaa6.appspot.com/o/venta5.jpg?alt=media&token=3abede99-1cfb-447e-95c5-a066e394cc77','https://firebasestorage.googleapis.com/v0/b/tienda-virtual-ebaa6.appspot.com/o/venta6.jpg?alt=media&token=20a876ac-995f-4192-bd83-ebbb1a8a4a77']
    }
    
]
let fila=document.getElementById("fila")

//recorrer el arreglo
products.forEach(function(producto){
    
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "h-100", "text-center","w-100","p-5")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid", "w-100", "h-100")
    foto.src=producto.fotos[0]

    let nombre=document.createElement("h3")
    nombre.textContent=producto.nombre

    let precio=document.createElement("h2")
    precio.classList.add("fw-bold")
    precio.textContent='$'+producto.precio

    //detectando eventos, cuando pasa el mouse por la imagen muestra la siguiente
    foto.addEventListener("mouseover", function(){
        foto.src=producto.fotos[1]   
    })
    //cuando pasa el mouse vuelve a la imagen anterior
    foto.addEventListener("mouseleave", function(){
        foto.src=producto.fotos[0]   
    })

    //Padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)



})