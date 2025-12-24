//ASYNC VAI EXECUTANDO E ENTREGA QUANDO TIVER TUDO PRONTO
//PROMISE É UMA PROMESSA DE QUE ALGO VAI CHEGAR

const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})


promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Finalizado")
    })

console.log("Iniciando a promessa")