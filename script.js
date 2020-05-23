
const _Obj = {};


/**Lista de perguntas e respostas */
const _Items = [

    {
        title : "Qual a tradução para a palavra PEN  ",
        options : ["borracha","cadeira","caneta"],
        answer : "caneta"
    },
    {
        title : "Qual a tradução para a palavra DOG ",
        options : ["gato","cachorro","zebra"],
        answer : "cachorro"
    },
    {
        title : "Quanto é 2 x 5",
        options : ["5","20","10"],
        answer : "10"
    },
    {
        title : "Em qual estado fica a cidade de Pouso Alegre ?",
        options : ["Minas Gerais", "Bahia","São Paulo"],
        answer : "Minas Gerais"
    }


];

let _count = 0;
let _correta = [];

_Obj.init = ()=>{

   const  quiz = document.querySelector("#quiz");
   const title = document.querySelector("#title-quiz");
   const span = document.querySelector("#text");
 
        span.innerHTML = `Questões ${_count + 1} de ${_Items.length}`;     
        title.innerHTML = _Items[_count].title;
        quiz.innerHTML = "";
    for(let item of _Items[_count].options){
         quiz.innerHTML += `<div class="grid-options">${item}</div>`;
    }

    document.querySelectorAll(".grid-options").forEach(element => {
       
        element.onclick = ()=>{
               
               if(element.innerHTML === _Items[_count].answer){
                   _correta.push(element.innerHTML);
                   element.style.backgroundColor = "rgb(134, 238, 130)";
               }
               _count++;
               _Obj.next();
            };
   });
}

/** Seleciona o próximo item da lista  */
_Obj.next = function(){

    if(_count === _Items.length){
         this.end();
    }else {

        setTimeout( _Obj.init, 500);
    }
}

/** Finaliza o game */
_Obj.end = ()=>{
    alert(`Você acertou ( ${_correta.length} ) perguntas de ${_Items.length}`);
    document.querySelector("#title-quiz").innerHTML = "Quiz finalizou !";
    document.querySelector('.quiz').innerHTML = "";
    document.querySelector('.quiz').innerHTML += `<div><a href="#" class="btn"> Compartihar no Facebook</a></div>`;
    document.querySelector('.quiz').innerHTML += "<a href='index.html'>Jogar de novo</a>";
}



