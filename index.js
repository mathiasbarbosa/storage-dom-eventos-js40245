// variables globales
const productos = [
    { id: 1,  producto: "Arroz", precio: 125 },
    {  id: 2,  producto: "Fideo", precio: 70 },
    {  id: 3,  producto: "Pan"  , precio: 50},
    {  id: 4,  producto: "Flan" , precio: 100}
    ];

const carrito = [];


// crear la interfaz html
const generarInterfaz = () => {
    let contenedor = document.getElementById("contenedor")

    productos.map( el => contenedor.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${el.producto}</h5>
                <p class="card-text">${el.precio}.</p>
                <a href="#" id=${el.id} class="btn btn-primary">Go somewhere</a>
                </div>
            </div> 

    `)

    agregarAlCarrito()
}

// funcion que genera el evento de agregar al carrito - localStorage
const agregarAlCarrito = () =>{
    let botones = document.getElementsByClassName("btn-primary")
    // console.log(botones);
    for (const btn of botones) {
        btn.addEventListener("click", (evento) =>{
            console.log(evento.target.id);
            let busqueda = productos.find(el => el.id == evento.target.id )
            carrito.push(busqueda);
            console.log(carrito);
            localStorage.setItem("arrayCarrito", JSON.stringify(carrito) )
        })
    }
    }

generarInterfaz()

// recuperar LocalStorage
const recuperarLocal = () => {
    let baseDeDatos =JSON.parse( localStorage.getItem("arrayCarrito") )
    console.log(baseDeDatos);
}

recuperarLocal()