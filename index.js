window.onload=inicio;
// variable wardar suma numeros cada recarga
let sumaCorrecta,a,b,f,g,h;

function inicio(){
    preguntar();
    document.querySelector("button").onclick=comprobar;
    document.querySelector(".tres").onkeydown=teclado;
}

function teclado(e){
    //console.log(e)
    let tecla=e.key;
    //alert(tecla) me falla mirar
    if(tecla=="Enter"){
        comprobar();
    }
}

function comprobar(){
    let c=Number(document.querySelector(".tres").value);

    if(c==sumaCorrecta){
        document.querySelector(".resultados").innerHTML="Es correcto";
		 document.querySelector(".resultados").innerHTML+=` Has hacertado. El resultado de ${a} + ${b} + ${f} + ${g} + ${h} es ${sumaCorrecta}`;
    }else{
        document.querySelector(".resultados").innerHTML+="<br>";
        document.querySelector(".resultados").innerHTML="No Es correcto ";
        document.querySelector(".resultados").innerHTML+=` Has fallado. El resultado de ${a} + ${b} + ${f} + ${g} + ${h} es ${sumaCorrecta}`;

    }
    preguntar();
}

function preguntar(){
    a=Math.floor(Math.random()*10);
    b=Math.floor(Math.random()*10);
    d=Math.floor(Math.random()*10);
	f=Math.floor(Math.random()*10);
	g=Math.floor(Math.random()*10);
	h=Math.floor(Math.random()*10);

    //variable sume dos numeros:
    sumaCorrecta=a+b+f+g;
    //escribir valores dentro del input
    document.querySelector(".uno").value=a;
    document.querySelector(".dos").value=b;
    document.querySelector(".tres").value=d;
	document.querySelector(".cuatro").value=f;
	document.querySelector(".cinco").value=g;
	document.querySelector(".seis").value=h;
    //le digo que vacie input
    document.querySelector(".tres").value="";
    document.querySelector(".tres").value=d;
    //mete cursor dendtro despues puldsar boton
    document.querySelector(".tres").focus();
}

