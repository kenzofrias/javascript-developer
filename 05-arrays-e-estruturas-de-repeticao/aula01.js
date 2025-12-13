let nomes = ['Ana', 'Bia', 'Carlos', 'Daniel'];

console.log(nomes);

nomes[2] = 'Roberto'; //substituindo o valor de índice 2
console.log(nomes);

nomes.push('Paulo'); //adicionando um novo valor ao final do array
console.log(nomes);

nomes.pop(); //removendo o último valor do array
console.log(nomes);

nomes.shift(); //removendo o primeiro valor do array
console.log(nomes);

nomes.splice(1,1); //removendo o valor do índice 1
console.log(nomes);

console.log(nomes.length); //mostrando o tamanho do array

nomes.push('Juliana');
nomes.push('Fabio');
console.log(nomes);

nomes.sort(); //ordenando o array em ordem alfabética
console.log(nomes);

delete nomes[1]; //removendo o valor do índice 1, mas mantendo o índice
console.log(nomes);