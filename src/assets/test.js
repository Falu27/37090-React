import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra, createOrder } from "./firebase";

//createProducto(producto).then(mensaje => console.log(mensaje))
getProducto("0l0XpA1tDegjRrIngJJX").then(prod => {
    prod.stock -= 5
    updateProducto("0l0XpA1tDegjRrIngJJX", prod).then(mensaje => console.log(mensaje))
})



const cliente = {
    nombre: "Charli",
    apellido: "Puflo",
    email: "charli@gmail.com",
    dni: 30222111,
    
}

createOrder(cliente, 80500, Date.now()).then(orden => console.log(orden))

getOrdenCompra("35s7RIKzWo1IukoKaBCf").then(orden => console.log(orden))