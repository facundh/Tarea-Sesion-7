const obj = {
    nombre:'Facundo',
    apellido:'Herrera',
    edad:36,
    altura:165,
    eresDesarrollador:true
}

const prop = "edad";
console.log(obj[prop]);

const objArrFriends = [{
    nombre:'Atila',
    edad:7,
    raza:'Dogo Argentino'
},
{
    nombre:'Emiliano',
    edad:35
}
];

console.log(objArrFriends);

const lista3 = [obj, ...objArrFriends];
console.log(lista3);
lista3.sort((a,b) => b.edad - a.edad);
console.log( lista3)