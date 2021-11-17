
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
    var cartList = [];
    var cart = [];

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
    let total = 0;
    for (let x in subtotal) {
        total += subtotal[x].value;
    }
    return total
}

// Ejercicio - 5
function generateCart() {
    /**  Usando la matriz "lista de carritos" que contiene todos los artículos en el carrito de compras,
     generar la matriz "carrito" que no contiene elementos repetidos, en su lugar, cada elemento de esta matriz "carrito" muestra la cantidad de producto.*/
    
    for (let i = 0; i < cartList.length; i++) {
        if (!cart.includes(cartList[i])) {
            cart.push(cartList[i])
            cart[cart.length - 1].quantity = 1
        }
        else {
            for (let x = 0; x < cart.length; x++) {
                if (cart[x].name == cartList[i].name) {
                    cart[x].quantity += 1
                    break;
                }
            }
        }
    }
    console.log(cart);

    
    for (let i in cart) {
        cart[i].subtotal = cart[i].price * cart[i].quantity;
        cart[i].subtotalWithDiscount = cart[i].subtotal;
        
    }
    console.log(cart);
    applyPromotionsCart();
    
    // console.log('Total con el discount aplicado ' +);

    
}

// Ejercicio - 6
function applyPromotionsCart() {
    // Aplicar promociones a dos artículos de la matriz "carrito"

    for (let i = 0; i < cart.length; i++) {
        if ((cart[i].name == 'cooking oil') && (cart[i].quantity > 3)) {
            cart[i].subtotalWithDiscount = (((cart[i].price) - 0.5) * cart[i].quantity);
        }
        else if ((cart[i].name == 'Instant cupcake mixture') && (cart[i].quantity > 10)) {
            cart[i].subtotalWithDiscount = (cart[i].price * cart[i].quantity) * (2 / 3);
        }
    }
}

 

/* Ejercicio - 7 */
function addToCart(id) {
    // Refactorizar el código anterior para simplificarlo
     // 1. Haga un bucle para los productos de la matriz para obtener el artículo que desea agregar al carrito
     // 2. Agregue el producto encontrado a la matriz del carrito o actualice su cantidad en caso de que haya sido agregado previamente. 
    
    for (let i = 0; i < products.length; i++){
        if (id == i + 1) {
            if (!cart.includes(products[i])) {
                cart.push(products[i])
                cart[cart.length - 1].quantity = 1
            }
            else {
                for (let x = 0; x < cart.length; x++){
                    if (cart[x].name == products[i].name) {
                        cart[x].quantity += 1
                        break;
                    }
                }
            }
        }
    }

    console.log(cart);
    
    
    
}

// Ejercicio - 9
function removeFromCart(id) {
    // 1. Recorra los productos de la matriz para que el artículo se agregue al carrito.
    // 2. Agregue el producto encontrado a la matriz cartList
    if (cart.length > 0) {
            
        }

}
// Ejercicio - 10
function printCart() {
    // 1. Llenar el carrito de la compra modal manipulando el carrito de la compra dom

}






