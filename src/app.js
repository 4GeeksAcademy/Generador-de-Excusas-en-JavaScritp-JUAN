import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excuseElement = document.querySelector('#excuse')
  function GetRandomData(array) {
    const RandomData = Math.floor(Math.random()* array.length);
    return array[RandomData]
  }
  
  const who = ['Mi amigo', 'Mi Amiga', 'Mi Hermano', 'Mi Prima'];
  const RandomWho = GetRandomData(who)
  const action = ['nadó',  'comió', 'mazticó', 'durmió'];
  const RandomAction = GetRandomData(action)
  const what = ['mi casa', 'mi carro', 'mi barco'];
  const RandomWhat = GetRandomData(what)
  const when = ['en el concierto', 'cuando estaba comiendo', 'mientras bailaba', 'durante mi siesta', 'cuando estaba leyendo'];
  const RandomWhen = GetRandomData(when)

  const excuse = RandomWho + " " + RandomAction + " " + RandomWhat + " " + RandomWhen
  excuseElement.innerText = excuse 
};