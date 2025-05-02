
const dateInput = document.getElementById("dateEnt")
const buttonDate = document.getElementById("botton")
const resultado = document.getElementById("result")

const numSecret = Math.floor(Math.random() * 100) + 1;

buttonDate.addEventListener("click", () => {  // Agregamos un evento al botón para que al hacer click se ejecute la función. Este evento cumple la función de un bucle, la cual permite que el usuario ingrese un número y lo compare con el número secreto, hasta que el usaurio lo adivine.
    
    const valorDato = parseInt(dateInput.value)


    if (isNaN(valorDato)) { // Verificamos si el valor ingresado por el usuario es un número, si este no lo es, mostramos un mensaje de error.
        resultado.textContent = "Por favor, ingrese un número válido.";
        resultado.style.color = "red";
        return;
    }
    if (valorDato === numSecret) { // Comparamos el valo ingresado por el usuario con el número secreto, si es igual, mostramos un mensaje de felicitaciones.
        resultado.textContent = "Felicidades, adivinaste el número secreto!";
        resultado.style.color = "green";
        return;
    }
        else if (valorDato < numSecret) { //Indicamos si el valor ingresado por el usuario es mayor al número secreto, mostramos un mensaje de error.
            resultado.textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
            resultado.style.color = "red";
        }
        else { //Indicamos si el valor ingresado por el usuario es menor al número secreto, mostramos un mensaje de error.
            resultado.textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
            resultado.style.color = "red";
        }

        console.log(`El número secreto es: ${numSecret}`); // Por consola me muestra el número secreto que generó el método Math.random().

});