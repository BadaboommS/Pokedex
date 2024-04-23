/* 
 * Old version (back + SQL Version)
 *
 */

/*

function sortArrayById(prop){
    return function(a,b){
        if(a[prop] > b[prop])
            return 1;
        else if(a[prop] < b[prop])
            return -1;
        return 0;
    }
}

fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify({ username: "pikachu", password: "pikachu" }),
    headers: { "Content-type": "application/json"}
})
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        return res.token;
    })
    .then((token) => fetchPokemonList(token));

const fetchPokemonList = (token) => {
    fetch("http://localhost:3000/api/pokemons", {
        headers: { Authorization: token }
    })
        .then((res) => res.json()
        .then((res) => {
            res.data.sort(sortArrayById("id"))
            console.log(res)
        })
    )
}
 
*/

async function retrievePokemonData(){
    try{
        await fetch("./pokemon_data/mock-pokemon.json")
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                return json
            })
    }catch(err){
        console.log("An error as occured retrieving the pokemon data!", err);
    }
}

const pokemons = retrievePokemonData();

console.log('2',pokemons)