import fs from 'fs'

const promiseArq = fs.promises.readFile('tarefas.csv')

promiseArq
    .then((arquivo) => arquivo.toString('utf-8'))
    .then((texto) => texto.split('\n').slice(1))
    .then(linhaSemCabecalho => linhaSemCabecalho.map((linha) => {
        const [nome, feita] = linha.split(';')
        return {
            nome,
            feito: feita.trim() === 'true'
        }
    }))
    .then((tarefas) => console.log(tarefas))
    .catch((erro) => console.log(erro))