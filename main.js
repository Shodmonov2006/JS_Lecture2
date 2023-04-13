// //>>>>>>>>>>Scope<<<<<<<<<<//

// let cnt = 0
// //Global scope

// function decloration (argument) {
//     //Function scope
    
//     for ( let i = 0; i <= argument; i++ ) {
//         //Block scope
//         cnt += i
//     }

//     return cnt
// }
// console.log ( decloration (4) )




//>>>>>>>>>>Hoisting<<<<<<<<<<//


//test 1

function firstName(name){
    return name
}
console.log(firstName('Olimkhuja'))



//1 hoisting

console.log(name('Olimkhuja'))
function name(firstName){
    return firstName
}

