
/**
 * global vs local
 * nested scopes
 */

var scope = "global scope";

function checkscope() {
    
    var scope = "local scope";
    
    function nested() {
        
        var scope = "nested scope";
        return scope;
    }

    return nested();
}

// Devuelve "nested scope" ya que dentro de la funcion el return devuelve la llamada a otra funcion que se encuentra detro de checkscope()
console.log(checkscope());              // => "nested scope"

// Devuelve "global scope" ya que se esta llamando a la variable definida en la linea 7
console.log(scope);                     // => "global scope"
