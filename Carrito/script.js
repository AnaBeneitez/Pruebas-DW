class Product {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

arreglo = []
    
p1 = new Product(0,"Auto",100)
p2 = new Product(1, "Camioneta", 200)
arreglo.push(p1)
arreglo.push(p2)

var total = 0;

function agregarProducto(id) {
    arreglo.forEach(p => {
        if(p.id === id) {
            div = document.createElement('div')
            div.setAttribute ('id', p.id)
            h1 = document.createElement('h1')        
            h2 = document.createElement('h2')
            h2.setAttribute('id', 'precio' + p.id)

            h1.innerHTML = p.nombre
            h2.innerHTML = p.precio

            div.appendChild(h1)
            div.appendChild(h2)
            div.appendChild(button)

            cart = document.getElementById('cart')
            cart.appendChild(div)
    
            button = document.createElement('button')
            button.innerHTML = "Eliminar"
            button.addEventListener('click', function() {eliminarProducto(p.id)})
            div.appendChild(button)

            total += p.precio;
            document.getElementById('total').innerHTML = total;
        }
    })
}

function eliminarProducto (id) {
    document.getElementById(id).remove();
    total -= document.getElementById('precio' + id).innerHTML;
    document.getElementById('total').innerHTML = total;
}

window.onload = () => {
    arreglo.forEach(p => {
        div = document.createElement('div')
        h1 = document.createElement('h1')        
        h2 = document.createElement('h2')

        h1.innerHTML = p.nombre
        h2.innerHTML = p.precio

        button = document.createElement('button')
        button.innerHTML = "Agregar";
        button.addEventListener('click', function() {agregarProducto(p.id)})

        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(button)

        list = document.getElementById('list')
        list.appendChild(div)
    });
}