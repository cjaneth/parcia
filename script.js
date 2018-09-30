var obj;
var ind;
var ind2;
var colores;
var consecutivo=0;
var tabla= [
    {
      codi:"datoprueba" ,
      color:"datopruebaColor"
    }
];
//abstrae un array de objetos que contiene cada dependencia
function recibeObj(){
    var objDep=document.getElementById("datosDependencia").innerHTML;
    obj=JSON.parse(objDep);
}

//se ejecuta al cambiar el listbox
function llenar(){
    
    document.getElementById("rutaAcceso").innerHTML="";
   setIndice();
   document.getElementById("selectSubdependencias").innerHTML="";
   //alert("Hello!"+obj[ind].subdependencias[0].subdependenciaNombre);
    var lista=document.getElementById("selectSubdependencias");/*encuentra el obj */
    //dato por defecto
     /*var op0=document.createElement("option");
        op0.setAttribute("value","m");
        op0.setAttribute("label",DespliegaElMenu);
        //agrega el elemento
        lista.appendChild(op0);*/
    //llena el objeto
    for(var i=0;i<=obj[ind].subdependencias.length;i++){
        //crea el elemento
        var op=document.createElement("option");
        op.setAttribute("value",i);
        op.setAttribute("label",obj[ind].subdependencias[i].subdependenciaNombre);
        //agrega el elemento
        lista.appendChild(op);
    }

}
//traer indice seleccionado
function setIndice(){
    //selecciona el valor que quedo en el listbox
    ind=document.getElementById("selectDependencias").value;
}
//traer indice seleccionado de la lista 2
function setIndice2(){
    //selecciona el valor que quedo en el listbox
    ind2=document.getElementById("selectSubdependencias").value;
}
function llenarRuta(){
    setIndice();
    setIndice2();
    
    var numero=obj[ind].dependenciaNumero;
    var numero2=obj[ind].subdependencias[ind2].subdependenciaNumero;
    document.getElementById("rutaAcceso").innerHTML="8."+numero+"."+numero2;
    document.getElementById("genera").style.display = 'inline';//activa el boton cada ves que crea una nueva ruta de acceso
    document.getElementById("agrega").style.display = 'none';//activa el boton cada ves que crea una nueva ruta de acceso
    document.getElementById("rutaAcceso").style.backgroundColor="#ffffff";
} 
//se ejecuta al cargar la pagina
window.onload=function load(){
   
    recibeObj();
  alert("bienvenidoo!");

}
//llena una tabla con los archivos al precionar el boton
 function mt(){
    //alert("llegas");
         var cuerpoTabla=document.getElementById("equiposTabla");
         var tablallena="";
        
         for(var i=0 ; i<tabla.length;i++){
             tablallena+="<tr id='fila"+i+"'><td>"+ tabla[i].codi+"</td><td>"+ tabla[i].color+"</td></tr>";
             
         }
         cuerpoTabla.innerHTML= tablallena;
         for( i=0 ; i<tabla.length;i++){
             document.getElementById("fila"+i).style.color=tabla[i].color;
             
         }
 }

//agregar al array un nuevo valor
 function nuevo(){
    document.getElementById("agrega").style.display = 'none';//desactiva el boton de agregar cada ves que se ha creado un documento en la ruta
    var nuevoValor={codi:document.getElementById("rutaAcceso").innerHTML,color:colores};
    tabla.push(nuevoValor);
    document.getElementById("cons").innerHTML="Consecutivo Actual:"+consecutivo;
    consecutivo++;
 }
 //agregar al array un nuevo valor
 function nuevoDocumento(){
     // alert("arribamos");
    document.getElementById("genera").style.display = 'none';//desactiva el boton cada ves que se ha creado un documento en la ruta
    document.getElementById("agrega").style.display = 'inline';//activa el boton de agregar cada ves que se ha creado un documento en la ruta
    document.getElementById("rutaAcceso").innerHTML+="/"+consecutivo;
    seleccionColor();
    document.getElementById("rutaAcceso").style.backgroundColor=colores;
 }
 //crea un codigo de color
 function seleccionColor(){
    colores='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}