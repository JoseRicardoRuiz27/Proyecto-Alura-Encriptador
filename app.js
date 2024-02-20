//llamamos a las clases de html con querySelector para guardar los datos y
// utilizarlos mas tarde
let botonEncriptar = document.querySelector(".boton-encriptador");
let botonDesencriptar = document.querySelector(".boton-desencriptar");
let  munieco = document.querySelector(".munieco");
let  contenedor = document.querySelector(".mensaje-contenido-vacio");
let  resultado = document.querySelector(".texto-resultado");

//Agregamos un evento onclick a los botones para 
// ejecutar una funcion cuando damos click a un elemento

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1; //La instrucción i = i + 1; 
            //incrementa el valor de i en 1.
            //Esto significa que después de encontrar una "a"
            //el bucle saltará al siguiente caracter
            //evitando repetir la misma "a" en la siguiente iteración.
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

function encriptar(){
    ocultarAdelante();
    // ocultarAdelante y recuperarTexto son funciones escritas despues
    let cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
    //resultado es la variable asignada anteriormente
    //.textContent es un propiedad que devuelve el contenido texto puro sin etiquta html
    //la funcion encriptarTexto le agregamos como parametro la variable cajatexto
}

function desencriptar(){
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    let cajatexto = document.querySelector(".caja-texto")
    return cajatexto.value
    //El metodo value regresa un array con valores correspondientes 
    //a las propiedades de un objeto
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    //llamando a css creamos una funcion para cuando precionemos algunos de lo botones
    //munieco o contenedor se oculten para mostrar la respuesta del usuario

    //Usar classList es una forma práctica de acceder
    //a la lista de clases de un elemento como una cadena de texto delimitada por espacios
}


const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
});

//addEventListener es un objeto que indica al navegador un evento de tipo especifico ocurre  

//.textContent es un propiedad que devuelve el contenido texto puro sin etiquta html

// La interfaz Navigator representa el estado y la identidad del user agent
//La Clipboard esto permite que una aplicación web implemente funciones de cortar, copiar y pegar.

//El encabezado de solicitud User-Agent (en-US) es una cadena característica
//que le permite a los servidores y servicios de red identificar la aplicación,
//sistema operativo, compañía, y/o la versión
//del user-agent (en-US) que hace la petición

//writeText se utiliza para para sobrescribir completamente los datos exitentes en la columna afectada