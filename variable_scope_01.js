
/**
 * global vs local
 */

var scope = "global";

function checkscope() { 
    var scope = "local";
    return scope;
}

// Devuelve "local" porque se esta llamando a la funcion y dentro de ella tiene la declaracion de la variable
console.log(checkscope());      // => "local"
