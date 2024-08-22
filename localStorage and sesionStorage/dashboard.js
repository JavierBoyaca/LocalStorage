let nombreInput = document.querySelector('#nombre-input');
let tipoIdInput = document.querySelector('#tipo-id-input');
let numeroInput = document.querySelector('#numero-input');
let areInput = document.querySelector('#area-input');
let salarioInput = document.querySelector('#salario-input');
let btnAgregar = document.querySelector('.btn-agregar');

//agregar evento al boton
btnAgregar.addEventListener("click", ()=>{
//alert("diste click");
let empleadoForm=validarForm();
guardarDatos(empleadoForm);
console.log(empleadoForm);
});

// funcion para validar los campos del formulario
function validarForm(){
    if (nombreInput.value && tipoIdInput.value && numeroInput.value && areInput.value && salarioInput.value){
        datosForm={
            nombre: nombreInput.value,
            tipoId: tipoIdInput.value,
            numero: numeroInput.value,
            area: areInput.value,
            salario:salarioInput.value
        }
        
    }else{
        alert("todos los campos son obligatorios");
    }
    return datosForm; //retornamos los datos validos 
}
//funcion para guardar los datos en local storage
function guardarDatos(datos){
    let todosEmpleados=[];
    let empleadosPrevios = JSON.parse (localStorage.getItem("empleados"));
    localStorage.setItem("empleados", JSON.stringify(datos));
    alert("Datos guardados con exito");


}