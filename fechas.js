const hoy = new Date();
console.log(hoy);

const fechaNacimiento = new Date(1986, 2 , 23);
console.log(fechaNacimiento);  

const fechaMasTarde = (hoy > fechaNacimiento);
console.log(fechaMasTarde);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

const anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);