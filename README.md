# Desafio-Daniel

Primeiro desafio do curso Lógica de Programação DIO.

Instrutor: Felipão [DIO.me](https://www.dio.me/)

## Desafio

Classificador de nível de herói.
Desafio é criar uma lógica que escreve na saída o nome do herói e seu nível, conforme níveis definidos abaixo:

- Se XP for menor do que 1.000 = __Ferro__
- Se XP for entre 1.001 e 2.000 = __Bronze__
- Se XP for entre 2.001 e 5.000 = __Prata__
- Se XP for entre 5.001 e 7.000 = __Ouro__
- Se XP for entre 7.001 e 8.000 = __Platina__
- Se XP for entre 8.001 e 9.000 = __Ascendente__
- Se XP for entre 9.001 e 10.000= __Imortal__
- Se XP for maior ou igual a 10.001 = __Radiante__

Ao final será exibida a mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

## Criando Repositório

Primeiramente criei o repositório no __GitHub__ com nome __"Desafio-Daniel"__ e clonei o repositório para meu PC utilizando o __GitHub Desktop__.

## Abrindo Visual Studio Code

Para este projeto eu utilizei o __VS Code da Microsoft__, que é gratuito e fácil de usar. Não tenho experiência com programação, então decidi instalar o VS Code devido a opiniões de especialistas e também por recomendação do instrutor __Felipão__.

## Criando o Projeto

Após VS Code aberto, criei a pasta __"src"__ e dentro dela criei o arquivo __"index.js"__, aonde irei criar o código em __JavaScript__. Também não tenho conhecimento em __JavaScript__, portanto, todos os conhecimentos que irei utilizar são os que eu aprendi até agora.

## Código

No ínicio criei três variáveis, sendo duas do tipo __String__ e uma do tipo __Number__, conforme código abaixo.

```
let nome = "Daniel"
let experiencia = 5000
let nivel = ""
```

Após as variáveis criadas, utilizei a estrutura de condição __IF__ para testar as condições mencionadas acima, conforme código abaixo:

```
if(experiencia <= 1000){
    nivel = "Ferro"
}else if(experiencia <= 2000){
    nivel = "Bronze"
}else if(experiencia <= 5000){
    nivel = "Prata"
}else if(experiencia <= 7000){
    nivel = "Ouro"
}else if(experiencia <= 8000){
    nivel = "Platina"
}else if(experiencia <= 9000){
    nivel = "Ascendente"
}else if(experiencia <= 10000){
    nivel = "Imortal"
}else{
    nivel = "Radiante"
}
```

Na última etapa do código, chamei a função __"console.log()"__ para exibir no terminal o conteúdo pedido no desáfio de projeto.

```
console.log("O Herói de nome " + nome + ", está no nível de " + nivel + ".")
```

## Conclusão

Como meu primeiro projeto de __Lógica de Programação__, fiquei muito feliz com o resultado, principalmente porquê estou utilizando uma linguagem de programação que ainda não domino.

## Linguagens de Marcação e Programação

- ![Markdown](https://img.shields.io/badge/Markdown-000?style=for-the-badge&logo=markdown)

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Ferramentas e Serviços

- ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

- ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

- ![Vscode](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)