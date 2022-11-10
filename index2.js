	  <h1>Juego de la Calculadora Humana</h1>
    <span id="pregunta"></span>
    <input type="text" id="dato">
    <button id="boton3">Comprobar</button>
    <p id="reloj"></p>
    <p id="salida"></p>

        var entrada = document.querySelector("#dato"),	// se cachean por comodidad los principales elementos HTML para la entrada del usuario, para la salida del texto y para el tiempo
        	salida = document.querySelector("#salida"),
            reloj = document.querySelector("#reloj"),
            resultado = numAleat(1,20),					// genera un número inicial al azar del 1 al 20
            NUM_OPERACIONES = 5,            			// número de operaciones que hay que resolver sin fallar para ganar
            tiempo = 30,								// tiempo para resolver las operaciones (en segundos)
            aciertos = 0,                   			// para llevar la cuenta de las operacioines resueltas 
            idIntv;                         			// donde se guardará el id del evento "intervalos"

        // Se programa que cuando se cliqueé el botón (o bien se pulse tecla INTRO) se compruebe si se ha resuelto correctamente o no la operación...
        
        document.querySelector("#boton3").addEventListener("click", comprueba3);
        window.addEventListener("keydown", function(e){
        										if(e.keyCode == 13) comprueba();	// Si se ha pulsado INTRO, comprueba
        									});

        // Se genera la primera operación a resolver...

        nuevaOperacion(resultado);

        // Se pone el foco en el INPUT y así el jugador puede empezar a jugar directamente sin que tenga antes que hacer clic sobre este...

        entrada.focus();

        // Y finalmente se pone en marcha el tiempo...

        reloj.innerHTML = "Tiempo restante: " + tiempo;//escribimos muestre el tiempo
        idIntv = setInterval(function(){//ejecuta esta funcion cada 1000seg o 1segundo
                                tiempo--;//decrementar el tiempo -1 aqui vale 29segundos
                                reloj.innerHTML = "Tiempo restante: " + tiempo;//vuelveimprimir lo que vale el tiempo
                                if(tiempo == 0){//si se ha terminado el tiempo
                                    clearInterval(idIntv);      // se desactiva el tiempo
                                    alert("¡ SE ACABÓ EL TIEMPO, LO SIENTO !");
                                    location.reload();	// se recarga la página para empezar otra partida
                                }
                            }, 1000);//cada seundo se repite la funcion


        function comprueba(){
            if(entrada.value == resultado){				// si se acierta la operación...
                salida.innerHTML = "CORRECTO";
                entrada.value = "";						// se borra contenido casilla
                if(++aciertos < NUM_OPERACIONES){       // al acertar 'x' operaciones sin equivocarte se gana la partida
                    nuevaOperacion(resultado);          // se crea una nueva operación cuyo primer operando es el resultado actual
                }
                else{
                    alert("¡¡¡ VICTORIA !!! :-D");
                    location.reload();                  // se recarga la página para empezar otra partida
                }
            }
            else{                                       // si se falla la operación, pierdes la partida
                salida.innerHTML = "¡ERROR!";
                alert("Prueba no superada :-/\n\nPulsa Aceptar para intentarlo otra vez.");
                location.reload();
            }

            if(!entrada.hasFocus) entrada.focus();//para el cursor este dentro cuadrado introducir datos
            //if(entrada.hasFocus == flase){ es lo mismo que arriba
            //    entrada.focus()
            //}
        }


        function nuevaOperacion(numAnt){
            var numNuevo,
                op, carOp,
                preg;

            numNuevo = numAleat(20,80);     // se obtiene el segundo operando de la operación
            op = numAleat(1,2);             // genera un tipo de operación de 2 posibles: sumar o restar

            switch(op){
                case 1:                     // SUMA
                    carOp = "+";            // carácter de operación
                    resultado = numAnt + numNuevo;
                    break;
                case 2:                     // RESTA
                    carOp = "-";
                    resultado = numAnt - numNuevo;
                    break;
            }

            preg = numAnt + " " + carOp + " " + numNuevo + " =";	// se construye la cadena de la nueva operación a resolver...
            document.querySelector("#pregunta").innerHTML = preg;	// ... y se muestra al jugador
        }


        function numAleat(limInf, limSup){
            return limInf + Math.floor( Math.random() * (limSup - limInf + 1) );
        }
 