function reverseString(s) {
    let reversed = ''
    
    for (let ch of s) {
        reversed = ch + reversed
        console.log(reversed)
    }

    return reversed
}

export {
    reverseString
}