
const dateInput = document.getElementById("dateEnt")
const buttonDate = document.getElementById("botton")
const resultado = document.getElementById("result")
const numUser = document.getElementById("numUser")

const numSecret = Math.floor(Math.random() * 100) + 1; // Generamos un número secreto aleatorio entre 1 y 100, el cual se guarda en la variable numSecret. Este número es el que el usuario debe adivinar.
let numIntentos = 10; // Creamos una variable con el número de intentos que tendrá el usuario para adivinar el número secreto. 
let numUsuario = []; // Creamos un array que guardará el número ingresado por el usuario.

buttonDate.addEventListener("click", () => {  // Agregamos un evento al botón para que al hacer click se ejecute la función. Este evento cumple la función de un bucle, la cual permite que el usuario ingrese un número y lo compare con el número secreto, hasta que el usuario lo adivine.
    const valorDato = parseInt(dateInput.value)

    numUsuario.push(valorDato); // Guardamos el valor ingresado por el usuario en la variable numUsuario.

    if (isNaN(valorDato)) { // Verificamos si el valor ingresado por el usuario NO es un número..., si este no lo es, mostramos un mensaje de error.
        resultado.textContent = "Por favor, ingrese un número válido.";
        resultado.style.color = "red";
        return;
    }

    if (valorDato === numSecret) { // Comparamos el valor ingresado por el usuario con el número secreto, si es igual, mostramos un mensaje de felicitaciones.
        resultado.textContent = "Felicidades, adivinaste el número secreto!";
        resultado.style.color = "green";
        buttonDate.disabled = true; 
        return;
        }
    
    numIntentos--; // Restamos uno al número de intentos restantes.

    if (numIntentos > 0) {
        resultado.style.color = "red";
        if (valorDato < numSecret) { //Indicamos si el valor ingresado por el usuario es mayor al número secreto, mostramos un mensaje de error, y se le descuenta un intento. (PISTA)
            resultado.textContent = `Ups, el número secreto es mayor, vuelve a intentarlo. Te quedan ${numIntentos} intentos.`;
        } else { //Indicamos si el valor ingresado por el usuario es menor al número secreto, mostramos un mensaje de error, y se le descuenta un intento. (PISTA)
            resultado.textContent = `Ups, el número secreto es menor, vuelve a intentarlo. Te quedan ${numIntentos} intentos.`;
        }
    } else { // Si el usuario no adivina el número secreto en sus intentos, mostramos un mensaje, indicando que se acabaron los intentos y el número secreto. También deshabilitamos el botón para que no pueda seguir jugando.
        resultado.textContent = `Se acabaron tus intentos, el número secreto era ${numSecret}.`;
        buttonDate.disabled = true; // Deshabilitamos el botón para que no pueda seguir jugando.
        resultado.style.color = "red";
    }
        
    console.log(`El número secreto es: ${numSecret}`); // Por consola me muestra el número secreto que generó el método Math.random().
    numUser.textContent = `Tus números ingresados fueron: ${numUsuario.join(" - ")}.`;
});