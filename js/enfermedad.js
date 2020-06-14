//alert("Estoy");
function validar(){
    var error=false;
    var mensajesError='';
    var nombre= document.getElementById("nombre").value;
    var apellido= document.getElementById("apellido").value;
    var dni= document.getElementById("documentoNro").value;
    var telefono= document.getElementById("tel").value;
    //para los campos con id
    if(nombre==''){
        error=true;
        mensajesError+="<p>El campo Nombre es obligatorio</p>";
    }
    if(apellido==''){
        error=true;
        mensajesError+="<p>El campo Apellido es obligatorio</p>";
    }
    if(dni==''){
        error=true;
        mensajesError+="<p>El campo Dni es obligatorio</p>";
    }

    if(telefono==''){
        error=true;
        mensajesError+="<p>El campo Telefono es obligatorio</p>";
    }
    // para los radio button, con name en comun

    var opciones=document.getElementsByName("fiebre");//Arrays con todos los elementos de name "fiebre"
    var seleccionado=false; // Si una variable esta seleccionado pasa de false a true.
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
        }else{
            seleccionado=false;

        }
    }
    if(!seleccionado){
        error=true;
        mensajesError+="<p>Debe seleccionar respuesta a la pregunta tuviste fiebre</p>";
    }
    var opciones=document.getElementsByName("dolorCabeza");
    var seleccionado=false;
    var totalSintomas= Number;

    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
        }else{
            seleccionado=false;
        }
    }
    if(seleccionado){
        error=false;
        totalsintomas+=1;
    }
    if(!seleccionado){
        error=true;
        mensajesError+="<p>Debe seleccionar respuesta a la pregunta tuviste dolor de cabeza</p>";
    }
    var opciones=document.getElementsByName("tosPersistente");
    var seleccionado=false;
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
        }else{
            seleccionado=false;
        }
    }
    if(!seleccionado){
        error=true;
        mensajesError+="<p>Debe seleccionar respuesta a la pregunta tuviste  tos persistente </p>";
    }

    var opciones=document.getElementsByName("dolorGarganta");
    var seleccionado=false;
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
        }else{
            seleccionado=false
        }
    }
    if(!seleccionado){
        error=true;
        mensajesError+="<p>Debe seleccionar respuesta a la pregunta tuviste Dolor de garganta</p>";
    }
    var opciones=document.getElementsByName("dificultadRespirar");
    var seleccionado=false;
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
        }else{
            seleccionado=false
        }
    }
    if(!seleccionado){
        error=true;
        mensajesError+="<p>Debe seleccionar respuesta a la pregunta tuviste dificultad al respirar </p>";
    }

    if(error){

        document.getElementById("mensajes").innerHTML=mensajesError;
        return false;
    }else{
        return true;
    }
     
}
