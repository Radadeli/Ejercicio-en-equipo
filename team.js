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

function sameAge(members) {
    /*for (let i = 0; i < members.length; i++) {
        const element = members[i];
        let y= i+1;
        const nextElement= members[y];
        if (element.age==nextElement.age) {
            console.log(element.firstname + " has " + element.age+" as " +nextElement.firstname);
        } else {
            console.log("Keep doing comparison");
            console.log(element.firstname,element.age);
        }
        
    }
    *First idea of code. 
    *Found better way to do it.
    *Didn't erase in order to 
    *let it readeable for team.
    */
   let result= "";
    for (let i = 0; i < members.length; i++) {
        const element = members[i];
        let hasAppeared= false;
        while (hasAppeared==false) {
            for (let i = 0; i < members.length; i++) {
                const nextElement= members[i];
                if (element.firstname==nextElement.firstname & element.surname!=nextElement.surname) {
                    console.log(element.firstname+" "+element.surname+ " tiene el mismo nombre que " + nextElement.firstname+" "+element.surname);
                    hasAppeared=true;
                }else{
                    console.log("No hay nadie con el mismo nombre que "+element.firstname);
                }
            }    
        }  
    }
}

sameAge(members);