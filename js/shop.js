
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
//  Array con productos (objetos) agregados directamente con push (). Los productos de esta matriz se repiten. 
var cartList = [];

//   Versión mejorada de cartList. El carrito es una matriz de productos (objetos), pero cada uno tiene un campo de cantidad para definir su cantidad, por lo que estos productos no se repiten. 

var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};

var total = 0;

// Ejercicio - 1
//1. Haga un bucle para los productos de la matriz para obtener el artículo    para agregar al carrito 
//2. Agregue el producto encontrado a la matriz cartList

function buy(id) {

    for (let i = 0; i < products.length; i++) {
        if (id == i + 1) {
            cartList.push(products[i])
        }
    }       console.log(cartList)
}
    

// Ejercicio - 2

function cleanCart() {
    cartList = []

}

// Ejercicio - 3
function calculateSubtotals() {
    // 1. Cree un bucle for en la matriz "cartList"
    // 2. Implementar dentro del loop un caso if ... else o switch ... para sumar las cantidades de cada tipo de producto, obteniendo los subtotales: subtotalGrocery, subtotalBeauty y subtotalClothes 
    
    for (let i = 0; i < cartList.length; i++){
        if (cartList.length > 0) {
            switch (cartList[i].type) {
                case 'grocery':
                    subtotal.grocery.value += cartList[i].price
                    break;
                case 'beauty':
                    subtotal.beauty.value += cartList[i].price
                    break;
                case 'clothes':
                    subtotal.clothes.value += cartList[i].price
                    break;
                default:
                    console.log('El carrito está Vacío')
            }
            
        } else  {
            console.log('El carrito está vacío ')
        }
    }
            console.log('El subtotal de grocery es: ' + subtotal.grocery.value + '\n' + 'El subtotal de beauty es: ' + subtotal.beauty.value + '\n' + 'El subtotal de clothes es: ' + subtotal.clothes.value)
}


// Ejercicio - 4
function calculateTotal() {
    // 1. Calcule el precio total del carrito usando la matriz "cartList"
    for (let x in subtotal) {
        total += subtotal[x].value;
    }
    return total
}

// Ejercicio - 5
function generateCart() {
    // Usando la matriz "lista de carritos" que contiene todos los artículos en el carrito de compras, 
    // generar la matriz "carrito" que no contiene elementos repetidos, en su lugar, cada elemento de esta matriz "carrito" muestra la cantidad de producto.
}

// Ejercicio - 6
function applyPromotionsCart() {
    // Aplicar promociones a cada artículo de la matriz "carrito"
}

// Ejercicio - 7
function addToCart(id) {
    // Refactorizar el código anterior para simplificarlo
     // 1. Haga un bucle para los productos de la matriz para obtener el artículo que desea agregar al carrito
     // 2. Agregue el producto encontrado a la matriz del carrito o actualice su cantidad en caso de que haya sido agregado previamente. 
}

// Ejercicio - 9
function removeFromCart(id) {
    // 1. Recorra los productos de la matriz para que el artículo se agregue al carrito.
    // 2. Agregue el producto encontrado a la matriz cartList
}
// Ejercicio - 10
function printCart() {
    // 1. Llenar el carrito de la compra modal manipulando el carrito de la compra dom

}






