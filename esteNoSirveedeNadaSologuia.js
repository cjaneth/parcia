var tabla= [
    {
      codi:"ppop" ,
      cod:8 
    },
      {
      codi:"gdfss" ,
      cod:8 
    },
      {
      codi:"fgsg" ,
      cod:83 
    },
      {
      codi:"44" ,
      cod:84 
    }
];
 //window.onload=cargarEventos;
 
 function cargarEventos(){
     
    document.getElementById("mostrarTabla").addEventListener("click",MT,false);
 }
 function MT(){
    
         var cuerpoTabla=document.getElementById("equiposTabla");
         var tablallena="";
        
         for(var i=0 ; i<tabla.length;i++){
             tablallena+="<tr><td>"+ tabla[i].codi+"</td><td>"+ tabla[i].cod+"</td></tr>";
             
         }
         cuerpoTabla.innerHTML= tablallena;
 }