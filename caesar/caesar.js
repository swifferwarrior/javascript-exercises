const caesar = function (string, times) {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let beta = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\W|\s/
    let newString = "";
    
    while (times > 25){
        times++;
        times %= 26;
        times--;
    }

    while (times < -25){
        times--;
        times %= 26;
        times++;
    }

    // if (times < -25){
    //     times--;
    //     times %= 26;
    //     times++;
    // }

    let list = string.split('');
    // console.log('Array: ' + list);
    // console.log(list[0]);

    // list.reduce(function(), 0);

    for (i = 0; i < list.length; i++) {
        // console.log('Test: ' + list[i]);
        // if (list[i] == (/\W|\s/g)){
        if (regex.test(list[i])){
            // console.log('add: ' + list[i])
            newString += list[i];
        }

        for (j = 0; j < alpha.length; j++) {
            // console.log('alpha length loop');
            if (list[i] == alpha[j]) {
                // console.log('alpha and list are equal');
                // if (j < 22){
                //     j += times;
                //     newString += alpha[j]
                // } else {
                    j += times;
                    let k = j % 26;
                    newString += alpha[k];
                }
                // j += times;
                // if (j > 25){
                //     let k = j - 26;
                //     newString += alpha[k];
                // }
                // console.log("add " + alpha[j]);
                // newString += alpha[j];
            // }

            if (list[i] == beta[j]) {
                // console.log('beta and list are equal');
                // if (j < 22){
                //     j += times;
                //     newString += beta[j]
                // } else {
                    j += times;
                    let k = j % 26;
                    newString += beta[k];
                }
                // j += times;
                // if (j > 25){
                //     let k = j - 26;
                //     newString += beta[k];
                // }
                // console.log("add " + beta[j]);
                // newString += beta[j];
            }
        }
        // console.log("");
    // }

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

//caesar("hello", 1); // ifmmp

module.exports = caesar;