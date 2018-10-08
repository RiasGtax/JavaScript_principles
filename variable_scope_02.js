
/**
 * global vs local
 * var to declare local variables
 */

scope = "global";

function checkscope2() {
    
    scope = "local";
    myscope = "local";

    return [scope, myscope];
}

console.log(checkscope2());
// Misma respuesta que el anterior ejercicio, variables locales, se llama al metodo y vuelven con un return

console.log(scope);
console.log(myscope);           // => WTF ¿?
