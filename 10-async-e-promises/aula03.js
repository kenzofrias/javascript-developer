import fs from 'fs'


async function buscarArq(){
    try{
        const arquive = await fs.promises.readFile('tarefas.csv')
        const texto = arquive.toString('utf-8')
        console.log(texto)
    }
    catch(e){
        console.log(e)
    } finally {
        console.log('Finalizou!')
    }
}

buscarArq()
