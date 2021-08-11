var pedad=0;
var vnombre="";
var vapellido="";
var i=0;
var icontrol=0;
var irespuesta=0;
var icontrol=0;
//respuestas
var vrespuestas=["jardin","amanecer","arar","granizo","delicioso","ventana","lio","esquimal","primo","escribir","agradecer","experimento","cordial","prescindir","simpatico","caricatura",	
"rencor","atentado","suficiente","energia","elevado","infortunado","hipocondriaco","estorbar","constante","consentir","conversacion","insensato","sobresaliente","enmendar","indeleble",
"verosimil","clandestino","prepotente","conectar","enigma","fanatico"]
var vpalabraincompleta=["J R   "," M N  ER","A  R","GR  I  ","D L C  S ","  NT NA"," IO","  Q  M L"," RI  ","E C I   ","  RA  CE "," XP   M    ","COR   L","P ES I D  "," I P   CO"," A IC T R "," E C R",
"A EN  D "," U I I N E"," NE G  "," L V   ","  FO  U A O"," I OCO  R A O","E  OR  R","C N T   E"," O SE  I ","  N E  A I  ","  SE S   ","  B E AL  N E"," N EN  R"," ND  EB  "," E O  M  ","C  ND S   O",
" R  O E  E"," O  C  R"," N G  ","   A I O"]
//consignas
var vnivel= ["Lugar con plantas y flores","Empezar el día","Lo que el labrador hace en la tierra antes de sembrar","Cae, a veces, cuando hay tormenta","Sabe muy dulce","Por donde entra la luz", 
	"Enredo", "Vive en zona Fria","Un pariente", "Anotar", "Responder a Favor", "Relacionado con la investigación", "Afable, cariñoso o afectuoso","Excluir, no contar con ...", 
	"Agradable, alegre","Dibujos con rasgos exagerados","Odio","Un tipo de crimen","Bastante","Capacidad o fuerza para actuar", "Alto", "Desfavorecido de la suerte",
	"Pero Doctor, realmente estoy enfermo; siempre me duele algo", "Obstaculizar", "Perseverante", "Aceptar sin entusiasmo ","Charla", "Necio o imprudente", "Uno que desfaca", "Corregir", 
	"Como algunas manchas o tintes", "Con apariencia de verdadero", "Secreto y furtivo","Poderoso, arrogante","Establecer contacto", "Algo oscuro o misterioso", "Apasionadamente aferrado a sus ideas"]
		
function Empezar(){
	//validar acceso
	control=validacion()
	if(control){
		//limpiar pantalla
		limpiar()
		
		//cargar nivel
		cargar()
		//generar resultados
	}
return false;
}

function validacion(){
			//completo
			var vValido=true
			vnombre = $('#nombre').val()
			vapellido = $('#apellido').val()
			pedad = $('#edad').val()
			
			if(vnombre.trim() == '' || !isNaN(vnombre) || vnombre.length > 25){
				$("#error").html('Debe ingresar el Nombre')
				$('#nombre').val("")
				$('#nombre').focus()
				vValido= false
				}else {$("#error").html("")}
			//validacion apellido
			if (vapellido.trim() == '' || !isNaN(vapellido) || vapellido.length > 35){
				$("#error1").html('Debe ingresar el Apellido')
				$('#apellido').val("")
				$('#apellido').focus()
				vValido= false
				}else {$("#error1").html("")}

			//validacion dni
			if(pedad.trim() == ''|| isNaN(pedad) || pedad.length>2){
				$("#error2").html('Debe ingresar la edad')
				$('#edad').val("")
				$('#edad').focus()
				vValido= false
				}else {$("#error2").html("")}

			//control de acceso
			if (pedad>7 && pedad<91 && vValido==true){
				if(pedad<15){
					//empieza en nivel 1
					i=0
				}else{
					//empieza en nivel 6
					i=5}
					var ver=document.getElementById("juegos");
					ver.style.display="inline"
			}else{ if(vValido==true){
					alert("no corresponder realizar este test")
					location.reload();
					}			
				}
			return vValido	
			}

function cargar(){
	icontrol=0;
	var mostrari=i+1
	document.getElementById("nivelactu").innerHTML="Nivel: "+mostrari;
	//limpiar el mensaje de alerta
	document.getElementById("error3").innerHTML=""
	//armar nivel
		//cargar consigna
			var vconsigna=document.getElementById("consigna");
			vconsigna.innerHTML=("<h2>"+vnivel[i]+"</h2>");
		//cargar palabra
			var vpalabra=vpalabraincompleta[i];
			for (var vi=0; vi<vpalabra.length;vi++){
				var vletra=vpalabra.charAt(vi)
				document.getElementById("l"+vi).style.display ="inline"
				if(vletra!=" "){
					document.getElementById("l"+vi).placeholder=vletra;
					document.getElementById("l"+vi).value=vletra;
					document.getElementById("l"+vi).disabled=true;
				}else{
					document.getElementById("l"+vi).placeholder="";
					document.getElementById("l"+vi).value="";
					document.getElementById("l"+vi).disabled=false;	
				}
			}
	//control para palabra de menos de 13 letras
	if(vpalabra.length<12){
		for (var vi=12; vi>=vpalabra.length;vi--){
		document.getElementById("l"+vi).style.display = "none";
		}
	}	
	for (var vi=0; vi<vpalabra.length;vi++){
		if (document.getElementById("l"+vi).value ==""){
		document.getElementById("l"+vi).focus();
		break;
		}
	}
}
function limpiar(){
	//completo
	var vcuerpo=document.getElementById("cuerpojuego");
	var vexplica=document.getElementById("explica");
	var vtablamuestra=document.getElementById("tablamuestra");
	var vform1=document.getElementById("form1");
	vcuerpo.removeChild(vexplica);
	vcuerpo.removeChild(vtablamuestra);
	vcuerpo.removeChild(vform1);
	
}
function resultados(){
		//completo
		//borrar el juego
		var vcuerpo=document.getElementById("cuerpojuego")
		var vjuegos=document.getElementById("juegos")
		vcuerpo.removeChild(vjuegos);
		//mostrar el resultado
		var ver=document.getElementById("mostrar");
		ver.style.display="inline";
		document.getElementById("mnom").innerHTML="<h4>"+vnombre+"</h4>";
		document.getElementById("mape").innerHTML="<h4>"+vapellido+"</h4>";
		document.getElementById("medad").innerHTML="<h4>"+pedad+"</h4>";
		document.getElementById("resul").innerHTML="<h4>El numero de respuesta correctas fue de: "+irespuesta+"</h4>";
}

function avanzar(){
	//completo
	var vrespuesta=document.getElementById("respuesta")	
	alert("La respuesta era: "+vrespuestas[i])
	i++
	if(i==37){
		resultados()	
	}else{
		cargar()
		}
}
function probar(){
	//completo
	//rearmar la palabra y hacerla minuscula
	var vpalabracontrol="";
	var vresp=vrespuestas[i];
	for(var vi=0; vi<vrespuestas[i].length;vi++){
		var vletra=document.getElementById("l"+vi).value
		var c1=vresp.charAt(vi)
		vletra=vletra.toLowerCase()
		//control de tildes
		if(vletra != " " && vletra != "" && vletra != c1){
			var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç" 
      		var	to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc"
      		for(var j=0; j<from.length;j++){
      			if(vletra == from.charAt(j)){
      				vletra=to.charAt(j)
      				break;
      			}
      		}
		}
	vpalabracontrol=vpalabracontrol+vletra
	}
	if(i==8 && vpalabracontrol=="prima"){
		vpalabracontrol="primo"
	}
	//control de intentos
	if (icontrol==2 && vpalabracontrol!=vrespuestas[i]) {
		avanzar();
	}else {
		//controlar palabra
		if(vpalabracontrol==vresp){
			i++;
			irespuesta++;
			if(i==37){
				resultados()	
			}else{
				cargar();
				}
		
		}else{
			icontrol++;
			for (var vi=0; vi<vpalabracontrol.length;vi++){
				if(vpalabracontrol.charAt(vi)!=vresp.charAt(vi)){
					var mint=3-icontrol
					document.getElementById("l"+vi).value="";
					document.getElementById("error3").innerHTML=("<h4>Te quedan "+mint+" intentos</h4>");
				}
			}
		}
	}

}


function salir(){
	//completo
	resultados()
	
}

function ssalir(){
	//completo
	location.reload();

}

function cambiar(pnum){
	var anterior=document.getElementById("l"+pnum).value
	var num2=pnum+1
	var siguiente=document.getElementById("l"+num2)
	//control de borrado
	if (anterior== ""){
	document.getElementById("l"+pnum).focus();
	}else {
	//avanza hasta el vacio
			while(anterior!= "" && anterior!=" " && siguiente.value!=""){
			num2++
			pnum++
			anterior=document.getElementById("l"+pnum).value
			siguiente=document.getElementById("l"+num2)
			}
			siguiente.focus();
		}

}





			
				