// Exercise 1
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]



function findWords(){
    let dog_strlist = dog_string.split((/[ ,]+/))
    let dog_stringlower = dog_strlist.map(i => i.toLowerCase());
    let dog_nameslower = dog_names.map(i => i.toLowerCase());
    let match_array = []
    for(let i = 0; i < dog_nameslower.length; i++){
        if(dog_stringlower.includes(dog_nameslower[i])){
            match_array.push(dog_nameslower[i])
        }
    }
    if (match_array.length == 0){
        return 'No Matches'
    } else {
        return match_array
    }

}

console.log(findWords(dog_string, dog_names))

// Exercise 2
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}

console.log(replaceEvens(arr1))