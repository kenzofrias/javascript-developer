
function funcao1(){
    console.log(this)
}
//POSSUI CONTEXTO PRÓPRIO (this)

const funcao2 = () => {
    console.log(this)
}
//NÃO POSSUI CONTEXTO PRÓPRIO (this)

const renan = {
    nome: 'renan',
    funcao1,
    funcao2
}

renan.funcao1()
renan.funcao2()