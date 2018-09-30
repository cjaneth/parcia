<?php
	$url="contenido.json";
	$feed= json_decode(file_get_contents($url)/*obtiene json*/,true/*sera array*/);
    //	var_dump($feed);/*mostrar prueva de coneccion*/
    $datos=$feed['dependencias'];
?>
<!DOCTYPE html>
<html lang= "es">
<head>
    <meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Parcial</title>
    <link href="https://fonts.googleapis.com/css?family=Eagle+Lake" rel="stylesheet"/>
    <link rel="stylesheet" type="text/css" media="screen" href="css/hoja.css" />
   <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
    
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="script.js"></script>
    
</head>
<body>    
    <header class="w3-container w3-center w3-padding-48 w3-white">
        <h1>Primer Parcial de Ingenieria de Software 3 </h1>
        <h2>Gestion de Documentos </h2>
        <h3>janeth cristina cifuentes Manrique</h3>
    </header>
    <div id ="cons" >No se ha agregado Documentos</div>
    <section>
        <h6><b>Instrucciones de Uso del Fondo Documental:</b></h6>
        <div id="instrucciones">
            <p>La aplicacion genera codigos consecutivos de documentos asignados a dependencias y subdependencias. </p>
            <p>Para agregar un nuevo documento debe seleccionar de la primera lista(uvicada en la parte inferion al lado izquierdo) la Dependencia, cuando se seleccione se cargara automaticamente las Subdependencias relacionadas en la segunda lista de la cual debera usted seleccionar una .El proceso estara correctamente diligenciado cuando se active el boton generar Documento</p>
            <p>Usted podra visualizar una ruta de acceso con el siguiente formato:</p>
                        <blockquote>
                          NumeroAsignadoaLaFIET(8porDefecto).NumeroDependencia.NumeroSubdependencia
                        </blockquote>
            <p>Cuando genere el documento se le asignara un color y una NumeroConsecutivo que puede obserbar en la ruta de acceso depues de una barra diagonal (/), estos documentos NO se almacen hasta que usted Precione el boton agregar.En la parte derecha superior puede obserbar un objeto de color gris que corresponde al numero actual de la secuencia de documentos guardados , cuando este cambie y tenga el mismo numero que el documento de la ruta de acceso quiere decir que ya se almaceno y que puede consultarlo desde el boton Mostrar tabla que esta en la parte inferior derecha</p>
         </div>
         <div>
                <div class="row">
                    <div class="col-sm-6" id="colIzquierda">
                        <article>
                             <h4>Seleccione a continuacion una dependencia y subdependencia:</h4>
                            <select id ="selectDependencias" name="selectDependencias" onchange="llenar()">
                                 <option  value="**seleccionaOpcion" >seleccionaOpcion</option>
                                    <?php
                                    	foreach ($datos as $key=>$dato){
                                    	    $info=$dato['dependenciaNombre'];
                                    ?>
                                    	<option  value=<?php echo $key;	?> >
                                    	    <?php echo $info;?>
                                    	</option>
                                    <?php	   
                                    	}
                                    ?>
                            </select>
                
                            <div id="datosDependencia" style="display:none;">
                                <?php  print json_encode($datos);?>
                            </div>
                
                            <select id="selectSubdependencias" onchange="llenarRuta()"  onclick="llenarRuta()" ></select>
                        </article>
                        <article>
                             <h5>-->Ruta de acceso:</h5><p id="rutaAcceso"></p>
                         </article>
                        <button id="genera" onclick="nuevoDocumento();" style="display:none;">GeneraDoc</button>
                        <button id="agrega" onclick="nuevo();" style="display:none;">Agregar</button>
                    </div>
                    <div class="col-sm-6" id="colDerecha">
                        <div id="tablaClasificacion">
                            <table>
                                <thead><tr>
                                    <th>Documento guardado   </th>
                                    <th>Codigo De Color</th></tr>
                                </thead>
                                <tbody id="equiposTabla">
                                </tbody>
                            </table>
                        </div>
                        <button id="mostrarTabla" onclick="mt();">MostrarTabla</button>
                    </div>
                </div>
         </div>
    </section>
</body>
</html>