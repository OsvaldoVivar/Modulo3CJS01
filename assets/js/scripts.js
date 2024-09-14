let precio = 400000;
let precioSpan = document.querySelector(".precio-inicial");
let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");
let aumentarBtn = document.querySelector(".aumentarBoton");
let disminuirBtn = document.querySelector(".disminuirBoton");

precioSpan.innerHTML = precio;

let cantidad = 0;

function actualizarTotal() {
  totalSpan.innerHTML = cantidad * precio;
}

aumentarBtn.addEventListener("click", () => {
  cantidad += 1;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
});

disminuirBtn.addEventListener("click", () => {
  if (cantidad > 0) {
    cantidad -= 1;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }
});
