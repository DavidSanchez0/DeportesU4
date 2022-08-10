let boton = document.getElementById("boton"); 

boton.addEventListener("click", saludo);

function saludo(){

    nom = String(document.getElementById("nombre").value);

    sal = "Bienvenido " + nom + " estas entrando a DeportesSanchez.";

    let imprimir = document.getElementById("imprimirsaludo");

    imprimir.innerText = sal;

}
