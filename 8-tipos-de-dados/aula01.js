/*
    boolean: true e false;
    null;
    undefined;
    number: 
        +infinito, -infinito, Nan tambem são numeros;
        para equações precisas é necessário usar meios externos;
    string: 
        "" - para texto único; 
        '' - para concatenar textos;
        `` - para textos grandes (template string);
    symbol: torna um valor único;
*/

//object
const x = {
    name: "kenzo",
    age: 25
}

x['name'] = 'gabriel'
console.log(x)