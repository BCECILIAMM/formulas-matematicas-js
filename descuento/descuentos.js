const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');
btn.addEventListener('click', calcularPrecioConDescuento);

// class Coupon {
//     constructor(name, discount) {
//         this.name = name,
//             this.discount = discount
//     }
// }

const couponsList = [];
couponsList.push({
    name: 'cupon1',
    discount: 30
});
couponsList.push({
    name: 'cupon2',
    discount: 50
});
couponsList.push({
    name: 'cupon3',
    discount: 15
});
// coupons.push(new Coupon('D30', 30), new Coupon('D25', 25), new Coupon('D20', 20));

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    // const cuponValido = coupons.find(item => item.name === inputCoupon.value);

    if (!price || !coupon) {
        pResult.innerText = 'CHANCLA por favor llena el formulario';
        return;
    }
    // console.log('esto esv' + { cuponValido })
    // if (cuponValido != undefined) {
    //     console.log(cuponValido != undefined);
    //     const precioConDescuento = Number((price.value) * (100 - cuponValido.discount) / 100);
    //     console.log(precioConDescuento, 'precioConDescuento');
    //     pResult.innerText = `El nuevo precio con descuento es: $${precioConDescuento}`;
    // } else {
    //     pResult.innerText = 'Descuento no valido';
    //     return;
    // }

    //const newPrice = (price * (100 - discount)) / 100;

    let discount;
    // escribiendo una funcion anonima y se usa mucho en los metoddos de los arrays hay 2 formas
    // directo o se hace una funcion
    function anonima(couponElement) {
        return couponElement.name == coupon;
    }
    // const couponArray = couponsList.filter(anonima); // devuelve un array con todos los objetos [{}]
    const couponArray = couponsList.find(anonima); // devuelve un objeto {} al primero que se encuentre
    // cuando se usa FILTER tienes que entrar a ese objeto 
    // if (couponArray.length >= 0) {
    //     discount = couponArray[0].discount;
    //     pResult.innerText = 'El nuevo precio con descuento es ' + discount;
    // } else {
    //     pResult.innerText = 'Descuento no valido';
    //     return;
    // }
    //cuando se usa FIND ya no tienes que entrar a la profundidad de ese objeto
    if (couponArray) {
        discount = couponArray.discount;
        pResult.innerText = 'El nuevo precio con descuento es ' + discount;
    } else {
        pResult.innerText = 'Descuento no valido';
        return;
    }

    console.log({
        coupon,
        discount,
        couponArray,
        couponsList
    });


}