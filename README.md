# Desafio-Daniel

Primeiro desafio do curso Lógica de Programação DIO.
Instrutor: Felipão DIO.me

## Desafio

Classificador de nível de herói.
Desafio é criar uma lógica que escreve na saída o nome do herói e seu nível, conforme níveis definidos abaixo:

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

## Criando Repositório

Primeiramente criei o repositório no GitHub com nome "Desafio-Daniel" e clonei o repositório para meu PC utilizando o GitHub Desktop.

## Abrindo Visual Studio Code

Para este projeto eu utilizei o __VS Code da Microsoft__, que é gratuito e fácil de usar. Lembro que eu não tenho experiência com programação, então decidi instalar o VS Code de vido a opiniões de especialistas e também por recomendação do instrutor __Felipão__.

## Criando o Projeto

Após VS Code aberto, criei a pasta __"src"__ e dentro dela criei o arquivo __"index.js"__, aonde irei criar o código em __JavaScript__. Também não tenho conhecimento em __JavaScript__, portanto, todos os conhecimentos que irei utilizar são os que eu aprendi até agora.

## Código

No ínicio criei três variáveis, sendo duas do tipo __String__ e uma do tipo __Number__, conforme código abaixo.

```
let nome = "Daniel"     //Variável tipo String com nome do herói
let experiencia = 5000  //Variável tipo Number com experiência do herói
let nivel = ""  ////Variável tipo String para armazenar nível do herói, iniciando com "vazio"
```

Após as variáveis criadas, utilizei a estrutura de condição __IF__ para testar as condições mencionadas acima, conforme código abaixo:

```
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
```

Na última etapa do código chamei a função __"console.log()"__ para exibir no terminal o conteúdo pedido no desáfio de projeto.

```
//Escreve no terminal o nome e XP do herói.
console.log("O Herói de nome " + nome + ", está no nível de " + nivel + ".")
```