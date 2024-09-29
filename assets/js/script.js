const precio = 400000

function aumentar(){
    const precioTotalElemento = document.querySelector('.valor-total');
    const cantidadElemento = document.querySelector('.cantidad'); 
    const cantidadValor = Number(document.querySelector('.cantidad').innerHTML);
    const nuevaCantidad = cantidadValor + 1;

    cantidadElemento.innerHTML = nuevaCantidad;

    const valorTotal = calcularMontoTotal(nuevaCantidad,precio);

    precioTotalElemento.innerHTML = valorTotal;

}

function disminuir(){
    const precioTotalElemento = document.querySelector('.valor-total');
    const cantidadElemento = document.querySelector('.cantidad');
    const cantidadValor = Number(document.querySelector('.cantidad').innerHTML); 

    if(cantidadValor > 0) {
        const nuevaCantidad = cantidadValor - 1;
        cantidadElemento.innerHTML = nuevaCantidad;

        const valorTotal = calcularMontoTotal(nuevaCantidad,precio);
        precioTotalElemento.innerHTML = valorTotal;
     }
     
}

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = Intl.NumberFormat('es-CL', {
    style:'currency',
    currency:'CLP',
    currencySign:'accounting',
    maximumSignificantDigits:2,
}).format(precio);

function calcularMontoTotal(cantidad, precio) {
    const amount = Number(cantidad);
    const price = Number(precio);
    const total = price * amount;
  
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      currencySign:'accounting',
    maximumSignificantDigits:2,
    }).format(total);
  }