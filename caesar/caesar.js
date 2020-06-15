const caesar = function (string, times) {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let beta = "abcdefghijklmnopqrstuvwxyz";
    newString = "";
    // let or = /[a-z]/i;


    let list = string.split('');
    console.log(list);
    console.log(list[0]);

    // list.reduce(function(), 0);

    for (i = 0; i < list.length; i++) {
        console.log('list length loop');
        for (j = 0; j < alpha.length; j++) {
            console.log('alpha length loop');
            if (list[i] == alpha[j]) {
                console.log('alpha and list are equal');
                j += times;
                console.log(alpha[j]);
                newString += alpha[j];
            }

            if (list[i] == beta[j]) {
                console.log('beta and list are equal');
                j += times;
                console.log(beta[j]);
                newString += beta[j];
            }
        }
    }

    return newString;

    // for (i = 0; i < alpha.length(); i++){
    //     if (alpha.charAt)
    //     list.reduce(find, times);
    // }
    // console.log(list);
    // return list;

}

// function shift(letter){
//     for (i = 0; i < alpha.length; i++){
//         // if (alpha.charAt(i) === "z"){
//         //     i = 0;
//         // }

//         if (alpha.charAt(i) === letter){
//             i += 3;
//             if (i > 25){
//                 i -= 26;
//             }
//             letter = alpha.charAt(i);
//         }
//     }
// }

//for every letter in teh string, run through the alpha
//once you find the alpha index, +3 the index number

caesar("hello", 1); // ifmmp

module.exports = caesar
