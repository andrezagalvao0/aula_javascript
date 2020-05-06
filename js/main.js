function clicou(){
    //alert("Obrigada por clicar aqui");
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar"; //getElementById associa ao id que eu quero e innerHTML incorpora a frase(ou qualquer outra coisa) ao html
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";

}

function redirecionar(){
    window.open("https://softwarerh.com.br/v2/amplarh");
    //window.location.href = "https://softwarerh.com.br/v2/amplarh";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse"; //troca pela frase que estava
    //alert("Obrigada por mover")
}
    
function voltar(elemento){
    elemento.innerHtml = "Obrigada por passar o mouse"; //esse comando substitui o document
}

function funcaoChange(elemento){
    console.log(elemento.value);

}


/*FUNÇÕES
function soma(n1,n2){
    return n1+n2;
}

alert(soma(3,7));


function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai japão", "japão", "Brasil"));

var validar = 0;
function validarIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
validarIdade(idade);
console.log(validar);*/

/*var d = new Date(); //pega a data atual
alert(d.getMonth()+1); //para exibir o mês
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/*LAÇO DE REPETIÇÃO
var count;
for(count=0; count < 5; count++){
    alert(count);
}*/

/* LAÇO DE REPETIÇÃO
var count = 0;
while(count < 5){
    console.log(count);
    count++;
}  */


/* CONDICIONAIS
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");

} */
    

/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"verde"} ] //lista de dicionário
console.log(frutas);
alert(frutas[1].nome); */

/*var fruta = {nome:"maçã", cor:"vermelha"} //isso se chama dicionário
console.log(fruta);
console.log(fruta.nome); //só para exibir um elemento, que no caso é maça*/


/*var lista = ["maça", "pera", "banana", "morango"]; //array
lista.push("uva"); //adicionanando um novo elemento a lista
lista.pop(); //remove o elemento adicionado
console.log(lista.length);
console.log(lista.reverse()); //trago os elementos ao contrario da lista
console.log(lista.toString()); //traz a lista em forma de string
console.log(lista.join( " - ")); //posso colocar algo entre os elementos da lista */


/*
var nome = "Andreza Galvão";
var idade = 25
var frase = "Brasil é o melhor time do mundo";
console.log(frase.replace("Brasil", "França")); //troca uma frase por outra. Aqui está trocando brasil por frança
console.log(frase.toUpperCase()); //coloca a frase toda em maiuscula
console.log(frase.toLowerCase()); //coloca a frase em minuscula*/

