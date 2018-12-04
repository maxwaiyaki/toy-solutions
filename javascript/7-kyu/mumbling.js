// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(word){
    let wordLetters = word.toLowerCase().split('')
    for(let i = 0; i<wordLetters.length; i++ ){
        wordLetters[i] = wordLetters[i].toUpperCase() + wordLetters[i].repeat(i)
    }

    return wordLetters.join('-')
}


accum(waiyaki);