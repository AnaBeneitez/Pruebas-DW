class Product {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 0;
    }
}

productos = []
    
p1 = new Product(0,"Auto",100)
p2 = new Product(1, "Camioneta", 200)
productos.push(p1)
productos.push(p2)

carrito = []

var total = 0;

function agregarProducto(id, carrito) {

    encontrado = false

    carrito.forEach(c => {
        if(c.id === id) {
            ++c.cantidad
            total += c.precio;
            document.getElementById('total').innerHTML = total;
            document.getElementById('cantidad' + c.id).innerHTML = c.cantidad;
            encontrado = true
        }
    })

    if(encontrado === false) {
        productos.forEach(p => {
            
            if(p.id === id) {
                carrito.push(p)

                div = document.createElement('div')
                div.setAttribute ('id', p.id)
                h1 = document.createElement('h1')        
                h2 = document.createElement('h2')
                h2.setAttribute('id', 'precio' + p.id)
                cantidad = document.createElement('h2')
                cantidad.setAttribute('id', 'cantidad' + p.id)

                h1.innerHTML = p.nombre
                h2.innerHTML = p.precio
                cantidad.innerHTML = ++p.cantidad

                div.appendChild(h1)
                div.appendChild(h2)
                div.appendChild(cantidad)

                cart = document.getElementById('cart')
                cart.appendChild(div)
        
                buttonDelete = document.createElement('button')
                buttonDelete.innerHTML = "-"
                buttonDelete.addEventListener('click', function() {eliminarProducto(p.id)})
                div.appendChild(buttonDelete)

                buttonAdd = document.createElement('button')
                buttonAdd.innerHTML = '+'
                buttonAdd.addEventListener('click', function() {agregarProducto(p.id, carrito)})
                div.appendChild(buttonAdd)

                total += p.precio;
                document.getElementById('total').innerHTML = total;
            }
        })
    }
}


function eliminarProducto (id) {
    total -= document.getElementById('precio' + id).innerHTML; 

    carrito.forEach(c => {
        if(c.id === id) {
            if(c.cantidad == 1) {
                --c.cantidad
                document.getElementById(id).remove()
                carrito = carrito.filter( p => p != c)
            }
            else {
                --c.cantidad
                document.getElementById('cantidad' + c.id).innerHTML = c.cantidad;
            }
        }
    })

    document.getElementById('total').innerHTML = total;    
}

window.onload = () => {
    productos.forEach(p => {
        div = document.createElement('div')
        h1 = document.createElement('h1')        
        h2 = document.createElement('h2')

        h1.innerHTML = p.nombre
        h2.innerHTML = p.precio

        buttonDelete = document.createElement('button')
        buttonDelete.innerHTML = "Agregar";
        buttonDelete.addEventListener('click', function() {agregarProducto(p.id, carrito)})

        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(buttonDelete)

        list = document.getElementById('list')
        list.appendChild(div)
    });
    document.getElementById('total').innerHTML = total;
}