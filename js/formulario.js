function validar(){
    var error=false;
    var mensajesError="";
    if(document.getElementById("nombre").value==''){
        error=true;
        mensajesError+="<p>El campo nombre no puede estar vacío</p>";
    }
    if(document.getElementById("dni").value==''){
        error=true;
        mensajesError+="<p> El campo dni no puede estar vacío.</p>";
    }
    if(document.getElementById("telefono").value==0){
        error=true;
        mensajesError+="<p>El campo telefono no puede estar vacío </p>"; 
    }
    var opciones=document.getElementsByName("sexo");
    var seleccionado=false;
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
        }
    }
    if(!seleccionado){
        mensajesError+="<p>El campo sexo no puede estar vacío</p>";
    }
    
    if(error){
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;
    }else{
        return true;
    }
}
