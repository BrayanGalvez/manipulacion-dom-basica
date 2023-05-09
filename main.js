//SELECIONAMOS ELEMENTOS A UTILIZAR DEL DOM
//CREAMOS VARIABLES PARA ALMACENAR LOS ELEMENTOS DEL DOM
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

//CREAMOS FUNCIONES PARA REALIZAR LAS OPERACIONES

form.addEventListener('submit', sumarInputs);

//FUNCION PARA SUMAR
function sumarInputs(event) {
   // console.log({event});
    event.preventDefault();
    const sumaInput = (input1.value + input2.value);
    result.innerText = sumaInput;
}