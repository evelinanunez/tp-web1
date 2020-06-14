//alert("estoy");
function cambiar(){
    var opciones= document.getElementsByName("viajo");
     for( i in opciones){
         if(opciones[i].value=="si" && opciones[i].checked){
             //alert("mostrar");
            document.getElementById("pais").style.display="inline-block";
         }
         if(opciones[i].value=="no" && opciones[i].checked){
             //alert("ocultar");
            document.getElementById("pais").style.display="none";
         }
     }
}