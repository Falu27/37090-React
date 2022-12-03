import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-37090-galota-fabrizio.firebaseapp.com",
  projectId: "react-37090-galota-fabrizio",
  storageBucket: "react-37090-galota-fabrizio.appspot.com",
  messagingSenderId: "504995500940",
  appId: "1:504995500940:web:b12b4d31dd2e42050afca9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore ()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) =>{
        await addDoc(collection(db, "productos"), {
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            rodado: prod.rodado,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    }) 
}

const getProductos = async() => {
    const productos = await getDocs (collection(db, "productos"))
    const items =  productos.docs.map(prod => { return {...prod.data(), id: prod.id}})
    return items
}

const getProducto = async (id) => {
    const prod = await getDoc (doc(db, "productos", id))
    const item =  {...prod.data(), id: prod.id}
    return item
}


export {cargarBDD, getProductos} 
