
const button = document.getElementById('sortear')
button.addEventListener('click', clicado)

function clicado() {
    const inputPrimeiro = Math.ceil(document.getElementById('div-one').value)
    const inputSegundo = Math.floor(document.getElementById('div-one-2').value)
    const result = Math.floor(Math.random() * (inputSegundo - inputPrimeiro + 1) + inputPrimeiro);
      alert(result)
}


/*Explicação:
Math.random(): Gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo).
Math.floor(): Arredonda o número gerado para baixo, garantindo um número inteiro.
(30 - 20 + 1): Ajusta o intervalo. O +1 garante que o número 30 possa ser incluído no sorteio.
+ 20: Desloca o intervalo para começar em 20.
Neste exemplo, o código gera um número aleatório entre 20 e 30, inclusive.*/


