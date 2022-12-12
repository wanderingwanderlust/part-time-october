const navBarHeader = document.getElementById('navbarHeader')

console.log(navBarHeader)
navBarHeader.innerHTML = 'Greg'

helloWorld()

function helloWorld() {
    debugger;
    const card = document.getElementById('friends')
    const name = "greg's brewery"
    const number = 7
    const boolean = true
    const arrFriends = ['Greg', 'Andre', 'Luis']
    const obj = {
        name: 'Greg',
        color: 'Blue',
        hometown: "Dallas, Tx"
    }

    // for(let i = 0; i < arrFriends.length; i++) {
    //     card.innerHTML = arrFriends[i]

    // }

    console.log('Hello World')
}


const nameOfTeacher = 'Greg'

function sayHi(item) {
    debugger;
    alert('Hello '  + nameOfTeacher )
    console.log(`Hello ${item}`)
}


sayHi(nameOfTeacher, 'Greg', false)




