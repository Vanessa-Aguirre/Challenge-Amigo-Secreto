// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// array para almacenar los nombres 
const listaAmigos = [];

//funcion para agregar un amigo 
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo =inputAmigo.value;

  //validar que el campo no este vacio
  if(!nombreAmigo){
    alert('Por favor, inserte un nombre');
    return; 
  }
//agregar el nombre a la lista de amigos 
listaAmigos.push(nombreAmigo);
console.log(listaAmigos)

actualizarLista();// actualizar la lista en el html
inputAmigo.value = " ";  // limpiar la cada donde se escribe el nombre 
inputAmigo.focus();
}

// funcion para actualizar la lista de amigos en la pagina 
function actualizarLista(){
    const ulListaAmigos = document.getElementById("listaAmigos");
   ulListaAmigos.innerHTML = " "; // limpiar el contenido actual de la lista
  
   for (let i = 0; i < listaAmigos.length; i++) {
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = listaAmigos[i];
    ulListaAmigos.appendChild(nuevoAmigo)
   }
  return; 
    
  }
  // funcion para seleccionar un amigo aleatoriamente 
function sortearAmigo(){

    if(listaAmigos.length === 0){
      alert ('No hay amigos para sortear ');
      return;
    }
const amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];//generar un numero aleatorio 

const amigoSorteado = listaAmigos[amigoSecreto];// usa un indice aleatorio para obtener un nombre del array


const resultado = document.getElementById("resultado");// mostrar el resultado en el HTML

resultado.innerHTML =`El amigo secreto es: ${amigoSecreto}`; //mostrar resultado en la interfaz

let limpiarLista = getElementById("listaAmigos");

limpiarLista.innerHTML = "";
  }
  