/*
Formulario (5 puntos):
Validaciones.
Aplicación de estilos.
Reset del formulario.
Claridad, organización y reutilización de código.
*/

class Usuario {
    constructor(nombre, pathImg) {
        this.nombre = nombre;
        this.gastos = [];
        this.pathImg = pathImg;
    }

    // Completar con los métodos necesarios
}


class Gasto {
    constructor(titulo, monto, fecha) {
        this.titulo = titulo;
        this.monto = monto;
        this.fecha = fecha;
    }
    // Completar con los métodos necesarios
}


function validarUsuario(usuario){
    let regex = /(Juan|María|Pedro)/;
    return regex.test(usuario);

}
function validarTitulo(titulo){ // Solamente permitirá que se introduzcan letras mayúsculas, letras minúsculas y números. Su longitud será entre 1 y 20.
    let regex = /^(?=.{1,20}$)[a-zA-Z0-9]+$/;
    return regex.test(titulo);

}

function validarImporte(importe){ //Solamente admitirá número comprendidos entre 0.00 y 1000.00. Será necesario introducir siempre la parte decimal entera, es decir los dos números. El separador de la parte entera y la parte decimal será un "."
let regex = /^(1000\.00|[0-9]{1,3}(\.[0-9]{2}))$/;
return regex.test(importe);
}

function validarFecha(fecha){ // Formato dd/mm/aaaa. el año se valida que sean 4 números ya que no se especificaba
    let regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(fecha);

}



 

         
            

// Validaciones
function validarTodo(){
    
    let titRed = document.getElementById("titulo");
    let impRed = document.getElementById("importe");
    let fechRed = document.getElementById("fecha");
    let usuRed = document.getElementById("usuario");

    if(usuRed.value!=="" || impRed.value!=="" || titRed.value!=="" || fechRed.value!==""){

    if (validarTitulo(titRed.value)) {
        titRed.classList.remove("rojo");
        titRed.classList.add("verde");

        
    }else{
        titRed.classList.remove("verde");
        titRed.classList.add("rojo");
    }
    
    if (validarImporte(impRed.value)) {
        impRed.classList.remove("rojo");
        impRed.classList.add("verde");
    }else{
        impRed.classList.remove("verde");
        impRed.classList.add("rojo");
    }
    if (validarFecha(fechRed.value)) {
        fechRed.classList.remove("rojo");
        fechRed.classList.add("verde");
    }else{
        fechRed.classList.remove("verde");
        fechRed.classList.add("rojo");

    }

    if (validarUsuario(usuRed.value)) {
        usuRed.classList.remove("rojo");
        usuRed.classList.add("verde");
    }else{
        usuRed.classList.remove("verde");
        usuRed.classList.add("rojo");
    }

}else{
    titRed.classList.remove("verde","rojo");
    usuRed.classList.remove("verde","rojo");
    fechRed.classList.remove("verde","rojo");
    impRed.classList.remove("verde","rojo");


    alert("Debes rellenar todos los campos.");
}
           
añadirResumen(titRed,usuRed,fechRed,impRed);

       }    
       
       
    function añadirResumen(tit,usu,fech,imp){ // Comprueba que todos los campos son válidos mediante sus clases y con el switch a través del valor del usuario establezco el src de la imagen
if( (tit.classList.contains("verde") && usu.classList.contains("verde") && fech.classList.contains("verde") && imp.classList.contains("verde"))){
    
    switch (usu.value) {
        case "Juan":
            src="img/usuarios/avatar_a.png"
            break;

            case "María":
            src="img/usuarios/avatar_b.png"
            break;

            case "Pedro":
            src="img/usuarios/avatar_c.png"
            break;
    
        default:
            break;
    }
    
    crearEntrada(usu.value, imp.value, fech.value, src);

}}


// Función para crear y agregar la tarjeta al DOM, he copiado el ejemplo que venía en el html con los mismo elementos y los mismos className
function crearEntrada(nombre, importe, fecha, avatarUrl) { 
     /*
    <div class="card mb-12 espacio">
    <div class="row g-0">
      <div class="col-md-2">
        <img src="img/usuarios/avatar_a.png" class="img-fluid rounded-start">
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title">Juan</h5>
          <p class="card-text">Pagó 20€ el 12/06/2024.</p>
        </div>
      </div>
    </div>
</div>
*/



    let card = document.createElement("div");
    let row = document.createElement("div");
    let colImg = document.createElement("div");
    let colBody = document.createElement("div");
    let img = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");

    card.className = "card mb-12 espacio";
    row.className = "row g-0";
    colImg.className = "col-md-2";
    colBody.className = "col-md-10";
    img.src = avatarUrl; // La src que se le pasa por parámetro dependiendo del nombre del usuario.
    img.className = "img-fluid rounded-start";
    cardBody.className = "card-body";
    cardTitle.className = "card-title";
    cardText.className = "card-text";

    cardTitle.textContent = nombre;  // El nombre que se le pasa por parámetro dependiendo del nombre del usuario elegido en el formulario.
    cardText.textContent = `Pagó ${importe}€ el ${fecha}.`;  // El importe y la fecha que le pasa por el formulario

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    colImg.appendChild(img);
    colBody.appendChild(cardBody);
    row.appendChild(colImg);
    row.appendChild(colBody);
    card.appendChild(row);

    document.getElementById("a1").appendChild(card); // El elemento del primer desplegable al que se le va agregando 
}
    
        
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        validarTodo();
        document.getElementById('formulario').reset();

     })
    