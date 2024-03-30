//Desafio de projeto inicial de Lógica de Programação
//Classificador de nível de herói

/*
Neste desafio irei criar uma variável para armazenar o nome e a quantidade de experiência(XP) 
de um herói, depois criarei uma lógica utilizando uma estrutura de decisão para apresentar alguma 
das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

Ao final deve será exibida a mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let nome = "Daniel"     //Variável tipo String com nome do herói
let experiencia = 11000  //Variável tipo Number com experiência do herói
let nivel = ""          //Variável tipo String para armazenar nível do herói, iniciando com "vazio"

if(experiencia <= 1000){  //Se XP for menor do que 1.000 = Ferro
    nivel = "Ferro"
}else if(experiencia <= 2000){  //Se XP for entre 1.001 e 2.000 = Bronze
    nivel = "Bronze"
}else if(experiencia <= 5000){  //Se XP for entre 2.001 e 5.000 = Prata
    nivel = "Prata"
}else if(experiencia <= 7000){  //Se XP for entre 5.001 e 7.000 = Ouro
    nivel = "Ouro"
}else if(experiencia <= 8000){  //Se XP for entre 7.001 e 8.000 = Platina
    nivel = "Platina"
}else if(experiencia <= 9000){  //Se XP for entre 8.001 e 9.000 = Ascendente
    nivel = "Ascendente"
}else if(experiencia <= 10000){ //Se XP for entre 9.001 e 10.000= Imortal
    nivel = "Imortal"
}else{
    nivel = "Radiante"  //Se XP for maior ou igual a 10.001 = Radiante
}

//Escreve no terminal o nome e XP do herói.
console.log("O Herói de nome " + nome + ", está no nível de " + nivel + ".")