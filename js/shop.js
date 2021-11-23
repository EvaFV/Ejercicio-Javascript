
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
        if (products.indexOf(products[i]) + 1 === id) {
            console.log(id);
            addItem(i);
    }      
    }
    
    function addItem(i) {
        const item = { name: products[i].name, price: products[i].price, type: products[i].type, count: 1 }
    
    console.log(item);
    for (let x in  cartList) {
        if (cartList[x].name === item.name) {
            cartList[x].count++;
        }
    }
    cartList.push(item);
    console.log(cartList);
    }
    calculateSubtotals();
}

// Ejercicio - 2

function cleanCart() {
    
    cartList.length = 0;
    console.log(cartList);

}

// Ejercicio - 3
function calculateSubtotals() {
    // 1. Cree un bucle for en la matriz "cartList"
    // 2. Implementar dentro del loop un caso if ... else o switch ... para sumar las cantidades de cada tipo de producto, obteniendo los subtotales: subtotalGrocery, subtotalBeauty y subtotalClothes 
    
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
           
    // for (let i = 0; i < cartList.length; i++) {
    //     if (cartList[i].type == "grocery") {
    //         subtotal.grocery.value = subtotal.grocery.value + cartList[i].price;
    //     } else if (cartList[i].type == "beauty") {
    //         subtotal.beauty.value = subtotal.beauty.value + cartList[i].price;
    //     } else if (cartList[i].type == "clothes") {
    //         subtotal.clothes.value = subtotal.clothes.value + cartList[i].price;
    //     }   else {
    //         console.log("Tipo no encontrado");
    //     }
    // }
   
    for (let i = 0; i < cartList.length; i++){
        var price = cartList[i].price;
        if (cartList[i].type === 'grocery') {
            subtotalGrocery += price;
        } else if (cartList[i].type === 'beauty') {
            subtotalBeauty += price;
        } else {
            subtotalClothes += price;
        }
    }
    subtotal.grocery.value = subtotalGrocery;
    subtotal.beauty.value = subtotalBeauty;
    subtotal.clothes.value = subtotalClothes;
    console.log(subtotal);

    calculateTotal();
    
}


// Ejercicio - 4
function calculateTotal() {
    // 1. Calcule el precio total del carrito usando la matriz "cartList"
    let total = 0;
    let totalValue = [subtotal.grocery.value, subtotal.beauty.value, subtotal.clothes.value];
    for (let x in totalValue) {
        total += totalValue[x];
    }
    console.log('Total sin descuentos  ' + total);
}

// Ejercicio - 5
function generateCart() {
    /**  Usando la matriz "lista de carritos" que contiene todos los artículos en el carrito de compras,
     generar la matriz "carrito" que no contiene elementos repetidos, en su lugar, cada elemento de esta matriz "carrito" muestra la cantidad de producto.*/
    
    // for (let i = 0; i < cartList.length; i++) {
    //     if (!cart.includes(cartList[i])) {
    //         cart.push(cartList[i])
    //         cart[cart.length - 1].quantity = 1
    //     }
    //     else {
    //         for (let x = 0; x < cart.length; x++) {
    //             if (cart[x].name == cartList[i].name) {
    //                 cart[x].quantity += 1
    //                 break;
    //             }
    //         }
    //     }
    // }

    cart.length = 0;
    // 
    cart.push(cartList[0]);
    let currentName = cartList[0].name;
    let max = cartList[0].count;
    let maxItem = cartList[0];
    for (let i = 1; i < cartList.length; i++) {
        if (currentName != cartList[i].name) {
            max = cartList[i].count;
            currentName = cartList[i].name;
            maxItem = cartList[i];
            cart.push(maxItem);
        } else if (currentName === cartList[i].name) {
            if (cartList[i].count > max) {
                currentName = cartList[i].name;
                maxItem = cartList[i];
                cart.push(maxItem);
            }
        }
    }

    for (let i in cart) {
        cart[i].subtotal = cart[i].price * cart[i].count;
        cart[i].subtotalWithDiscount = cart[i].subtotal;
        
    }
    console.log(cart);
    applyPromotionsCart();
    console.log('total con descuentos' + total);
}

// Ejercicio - 6
function applyPromotionsCart() {
    // Aplicar promociones a dos artículos de la matriz "carrito"
    
    for (let i in cart) {
        subtotal.grocery.discount = 0;
        if (cart[i].name === 'cooking oil' && cart[i].count > 3) {
            const oilDiscount = cart[i].count * 0.5;
            cart[i].subtotalWithDiscount -= oilDiscount;
            subtotal.grocery.discount = oilDiscount;
            total -= oilDiscount;
            console.log('Cooking oil subtotal discounted ' + cart[i].subtotalWithDiscount);
        } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].count > 10) {
            const mixDiscount = (cart[i].price / 3) * cart[i].count;
            cart[i].subtotalWithDiscount -= mixDiscount;
            subtotal.grocery.discount += mixDiscount;
            total -= mixDiscount
            console.log('Cupcake mixture subtotal discounted ' + cart[i].subtotalWithDiscount);
        }
    }
}


 

/* Ejercicio - 7 */
function addToCart(id) {
    // Refactorizar el código anterior para simplificarlo
     // 1. Haga un bucle para los productos de la matriz para obtener el artículo que desea agregar al carrito
     // 2. Agregue el producto encontrado a la matriz del carrito o actualice su cantidad en caso de que haya sido agregado previamente. 
    
    for (let i = 0; i < products.length; i++){
        
            if (products.indexOf(products[i]) + 1 === id) {
                console.log(id);
                addItem(i);
            }
    }
    function addItem(i) {
        const item = {
            name: products[i].name, price: products[i].price, type: products[i].type, count: 1,}
        console.log(item);

        if (cart.length === 0) {
            cart.push(item);
            console.log(cart);
        } else {
            for (let i = 0; i < cart.length; i++) {
                if (item.name === cart[i].name) {
                    cart[i].count++
                    result = true;
                    return result;
                        
                }
            }
            
            for (let i = 0; i < cart.length; i++) {
                if (item.name !== cart[i].name) {
                    cart.push(item);
                    return;
                }
            }
        }
    }
    
    //Añado propiedades a cart
    for (let i in cart) {
        cart[i].subtotal = cart[i].price * cart[i].count;
        cart[i].subtotalWithDiscount = cart[i].subtotal;
    }
    console.log(cart);

    //escribo el total cuando se adjunta el producto
    total = 0;
    for (let i in cart) {
        total += cart[i].subtotal;
    }
    console.log(total);
    applyPromotionsCart();
    console.log('Total con el descuento:  ' + total);
    
}

// Ejercicio - 9
function removeFromCart(id) {
    // 1. Recorra los productos de la matriz para que el artículo se agregue al carrito.
    // 2. Agregue el producto encontrado a la matriz cartList
    for (let i in cart) {
        if (cart[i].name === event.target.dataset.name) {
            if (cart[i].count === 1) {
                cart.splice(i, 1);
            } else if (cart[i].count > 1) {
                cart[i].count--;
                cart[i].subtotal -= cart[i].price;
            }
        }
    }
    // total cuando se borra un producto
    total = 0;
    for (let i in cart) {
        total += cart[i].subtotal;
    }
    console.log(total);
    // Para aplicar el descuento si es necesario cuando se borra un producto
    applyPromotionsCart();
    console.log('Total con el descuento:  ' + total);
    printCart();


}
// Ejercicio - 10
function printCart() {
    // 1. Llenar el carrito de la compra modal manipulando el carrito de la compra dom
    
      const cartItems = document.getElementsByClassName('cart-items')[0];
    cartItems.replaceChildren();
    for (let x in cart) {
        const cartRow = document.createElement('li');
        cartRow.classList.add('cart-row');
        const cartRowContent = `
                <div class="item-column item-name col-4">${cart[x].name}</div>
                <div class="item-colun item-price col-2">${cart[x].price}€</div>
                <div class="item-column item-quantity col-3">
                    <div class="item-column item-quantity">${cart[x].count}</div>
                    <button type="button" onclick="removeFromCart(event)" data-name="${cart[x].name}" class="item-column item-quantity minus-item bg-secondary">-</div>
                </div>    
                <div class="item-column item-subtotal col-3">${cart[x].subtotal}€</div>`
        cartRow.innerHTML = cartRowContent;
        cartItems.append(cartRow);
    }
    
    const discountCart = document.getElementById('discount');
    discountCart.innerHTML = Math.round(subtotal.grocery.discount * 10) / 10 + '€';
    const totalCart = document.getElementById('total');
    totalCart.innerHTML = Math.round(total * 10) / 10 + '€';
    
 
    
}







