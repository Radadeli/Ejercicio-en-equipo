const members = [
    {   firstname: "Ivan",
        surname: "Dorta",
        age: "25",
        city: "Tenerife",
        hobby: "Futbol",
        favoriteFood: "Pizza",
        favoriteVideoGame: "CoD",
        favoriteFilm: "Interstellar",
        favoriteBook: "El señor de los anillos",
        petName: "Kasper",
    },
    {   firstname: "Eliane Nahili",
        surname: "Benitez Diaz",
        age: "19",
        city: "Madrid",
        hobby: "Cantar",
        favoriteFood: "Lasagna",
        favoriteVideoGame: "Hollow Knight",
        favoriteFilm: "Ponyo en el acantilado",
        favoriteBook: "Momo, Michel Ende",
        petName: "null",
    },
    {   firstname: "Willy",
        surname: "Hidalgo",
        age: "25",
        city: "Valencia",
        hobby: "Leer comics",
        favoriteFood: "Postres",
        favoriteVideoGame: "CoD",
        favoriteFilm: "Batman",
        favoriteBook: "Noches oscuras",
        petName: "Buggy",
    },
    {   firstname: "Luis",
        surname: "Tortosa",
        age: "25",
        city: "Salamanca",
        hobby: "Programar",
        favoriteFood: "Cocido madrileño",
        favoriteVideoGame: "Fallout New Vegas",
        favoriteFilm: "Interestellar",
        favoriteBook: "Fight Club",
        petName: "El Picos",
    },
    {   firstname: "Laura",
        surname: "Español",
        age: "27",
        city: "Pineda (Barcelona)",
        hobby: "Patinaje",
        favoriteFood: "Patatas fritas",
        favoriteVideoGame: "...",
        favoriteFilm: "Moulin Rouge",
        favoriteBook: "La sombra del viento",
        petName: "Felix",
    },
    {
        firstname: "Manuel",
        surname: "Benitez",
        age: "29",
        city: "Villa Carlos Paz",
        hobby: "Programar",
        favoriteFood: "Milanesa",
        favoriteVideoGame: "DOTA 2",
        favoriteFilm: "",
        favoriteBook: "Shantaram",
        petName: "",
    },
    {

      firstname: " ramiro",
      surname: "de lillo",
      age: "28",
      city: "Azuaga",
      hobby: "Play Football",
      favoriteFood: "Asado",
      favoriteVideoGame: "Fifa",
      favoriteFilm: "Prison Break",
      favoriteBook: "Desarrole su cerebro",
      petName: "Zoe",
    },
];

//Funcion de Ramiro
function ApellidosEnOrdenAlfabetico(equipo) {
    const equipoOrdenado = equipo.sort((a, b) => {
        const nombreCompletoA = `${a.surname} ${a.firstname}`;
        const nombreCompletoB = `${b.surname} ${b.firstname}`;
        return nombreCompletoA.localeCompare(nombreCompletoB);
    });

    equipoOrdenado.forEach(miembro => {
        console.log(`${miembro.surname} ${miembro.firstname}`);
    });
}
//===================================================================================================

console.log(" ")

//Funcion de Willy
ApellidosEnOrdenAlfabetico(members);

function compararPorEdad(a,b){
    return a.age - b.age;
}
members.sort(compararPorEdad);
members.forEach((member) =>{ console.log(`Nombre: ${member.firstname}, Edad: ${member.age}`);
})
//===================================================================================================

console.log(" ")

//Ej. 3 by Luis
function edadPromedio(objeto){
    let i = 0
    let edadTotal = 0
    let membersCount = Object.keys(objeto).length
    for(i = 0;i < membersCount; i++){
        edadTotal = edadTotal + Number(objeto[i].age)
    }
    let edadPromedio = (edadTotal/membersCount)
    return (edadPromedio)
}
console.log("La edad media es de " + edadPromedio(members) + " años")
//===================================================================================================

console.log("  ")

//Ej. 4 'Print who has a pet (name petName)' by Laura
function petsNames(objeto){
    for(let i = 0; i<objeto.length; i++){
        if(objeto[i].petName){
            console.log(objeto[i].firstname + " has a pet named " + objeto[i].petName);
        }else{
            console.log(objeto[i].firstname + " doesn't have a pet");
        }
    }
}

petsNames(members);
//===================================================================================================

console.log(" ")

//Ej. 5 by Ivan
function printFavoriteVideogame (personas) {
    for (let i=0 ; i<personas.length ; i++ ){
        if(personas[i].favoriteVideoGame === "LOL" || personas[i].favoriteVideoGame === "League of Legends"){
            console.log(personas[i].firstname + "'s favorite videogame is LOL")}
        else{ console.log(personas[i].firstname + "'s favorite videogame is not LOL")
        }
    }
}
printFavoriteVideogame(members);
//===================================================================================================

console.log(" ")

