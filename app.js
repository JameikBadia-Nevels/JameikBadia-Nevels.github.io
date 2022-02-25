
// let p = new Promise(
//     (resolve,reject) =>{
//         let btn = document.querySelector('button')
//         let inp = document.querySelector("#name")
//         btn.addEventListener("click", function(event){
//             if (inp.value.length > 2){
//                 resolve(inp.value)
//             }
//             else{
//                 reject(inp.value)
//             }
//             // inp.value= null
//         })
// fetch(`https://pokeapi.co/api/v2/pokemon/${inp}`)
// })

// p.then((msg)=>{
//     console.log( "Welcome " + msg)
// }).catch((msg)=>{
//     console.log("Not enough characters in  " + msg + ". Try again.")
// })

let pName = document.querySelector("#pokeName")
let pNum = document.querySelector("#pokeNum")
let pWeight = document.querySelector("#weight")
let pHeight = document.querySelector("#height")
let pokeImg = document.querySelector("#pokeImg")
let pokeType = document.querySelector("#pokeType")
let pAbility = document.querySelector("#ability")
//the button
let btn = document.querySelector("#press")


const search = () =>{
//user input 
let inp = document.querySelector("#pokeMon")
//get data from URl / API
fetch("https://pokeapi.co/api/v2/pokemon/" + inp.value)

//use .them to handle a resolve/reject promise 
.then((res) => {
    // console.log(res.json())
    return res.json()
})
.then ((data) =>{
    // console.log(data.name)
    pokeType.textContent = "Type: " + data.types[0].type.name
    pokeImg.setAttribute("src", data.sprites.front_shiny)
    pName.textContent = "Name: " + data.name 
    pNum.textContent = "PokeIndex Number: " +  data.id
    pWeight.textContent = "Weight: " + data.weight + " lbs"
    pHeight.textContent = "Height: " + data.height
    pAbility.textContent = "Ability: " + data.abilities[0].ability.name

    // console.log(data.moves[6].name)
    inp = null
})
}

btn.addEventListener("click", search)