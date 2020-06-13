//alert("Estoy");
function validar(){
    var error= false;
    var mensajesError="";
    var apellido= document.getElementById("apellido").value;

    if(document.getElementById("nombre").value==''){ 
        error=true;
        mensajesError+="<p>El campo nombre no puede estar vacio</p>";
    }
    if(apellido==''){
        error=true;
        mensajesError+= "<p>El campo apellido no puede estar vacio</p>";
    }

    if(error){
        document.getElementById("mensajes").innerHTML=mensajesError;
        return false;
    }else{
        return true;
    }
    
}