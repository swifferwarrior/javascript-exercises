const palindromes = (string) => {
    string = string.replace(/\s+/g, "");
    revString = string;
    revStringArray = revString.split(); //splits string into array of substrings
    revStringArray.reverse();
    revString = revStringArray.join();

    string === revString ? true : false;
};

// function removeSpace(string){
//     string = string.trim();
//     return string
// }

// function reverseString(){

// }



module.exports = palindromes
