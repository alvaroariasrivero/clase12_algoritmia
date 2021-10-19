// // Escriba un programa que pida al usuario ingresar la longitud de la línea y muestre de uno en uno lo siguiente:
// // longitud: 5

// //  +++++


// function linea(n) {
//     return '+'.repeat(n)
//   }

// /////////////////////////SIN TRAMPAS///////////////////////////////////////////////////////////////////////////

//   let n = 5;
//   let r = ''
//   for(let i = 0; i < n; i++) {
//     r = r + '+'
// }

// console.log(r)

// //   Escriba un programa que pida al usuario ingresar la longitud de la línea y dos caracteres; y muestre de uno en uno lo siguiente:
// // longitud: 5
// // caracter1: -
// // caracter2: +

// // -+-+-

// function alterno(n) {
//     let str = '-+'
//     if(n % 2 === 0){
//       return str.repeat(n/2)
//     } else {
//       return str.repeat(n/2) + '-'
//     }
//   }

// /////////////////////////////////////////SIN TRAMPAS////////////////////////////////////////////////////

//   let r = ''
// let c1 = '-'
// let c2 = '+'
// let n = 5
// for(let i = 0; i < n; i++){
//   if(i % 2 == 0){
//     r = r + c1
//   } else {
//     r = r + c2
//   }
// }console.log(r)

// //   Escriba un programa que pida al usuario ingresar la altura y el ancho de un rectángulo y lo dibuje utilizando asteriscos:
// // Altura: 3
// //  Ancho: 5

// //  *****
// //  *****
// //  *****

// function rectangulo(ha, a) {
//     let punto = '*'
//     let altura = ha
//     for(let i = 0; i < altura; i++){
//      console.log(punto.repeat(a))
//     }
//   }
  
//   console.log(rectangulo(3, 5))

//   //////////////////////////////////////SIN TRAMPAS//////////////////////////////////////

// let r = ''
// let ancho = 5
// let alto = 3
// for(let i = 0; i < alto; i++){
//     for(let j = 0; j < ancho; j++){
//         r = r + "*" 
//     }
//     console.log(r)
//     r=""
// } 

// //   Escriba un programa que dibuje el triángulo del tamaño indicado por el usuario de acuerdo al ejemplo:

// //   Altura: 5
 
// //   *
// //   **
// //   ***
// //   ****
// //   *****


// function triangulo(a) {
//     let punto = '*'
//     let altura = a
//     for(let i = 0; i < altura; i++){
//      console.log(punto + punto.repeat(i))
//     }
//   }
  
//   console.log(triangulo(5))

//   ////////////////////////////////////////SIN TRAMPAS///////////////////////////////////////////////////////////

// let r = ''
// let alto = 5
// for(let i = 0; i < alto; i++){
//     for(let j = 0; j <= i; j++){
//         r = r + "*" 
//     }
//     console.log(r)
//     r=''
// } 

//   Escriba un programa que dibuje el hexágono del tamaño indicado por el usuario de acuerdo al ejemplo:

//  Lado: 4

//     ++++
//    ++++++
//   ++++++++
//  ++++++++++
//   ++++++++
//    ++++++
//     ++++

// Escriba un programa que pida al usuario ingresar un usuario y una contraseña, y le indique si ha validado o no, debemos tener mínimo 5 usuarios en el Local Storage (cargados previamente por el programa, con formato a elegir por el alumno) y usarlos para saber si el usuario ha accedido o no.

let fname = document.getElementById("nombre")
let password = document.getElementById("pass")


function boton() {
  const press = document.getElementById("send");
  press.addEventListener("click", almacenaje())
}

boton()

function almacenaje() {
  let i = 0
  i++;
  let usuario = {
    nombre: fname.value,
    contraseña: password.value
  }
  localStorage.setItem(`usuario${i}`, JSON.stringify(usuario))

}

almacenaje()
