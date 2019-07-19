/**
 * Given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
 * Return the number of different transformations among all words we have.
 * Example:
 * Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
 *
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if(words.length === 0)
        return 0;
    
    //Store the letters and morse codes into variables
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let result = [];    //This will hold the result array
    
    //Iterate over each of the words in the array
    for(let word of words) {
        //Using ES6, reduce function to create a new array with the code
        const sum = word.split("").reduce((total,letter)=>total+morse[letters.indexOf(letter)],'');
        
        //Storing only the unique combinations
        if(result.indexOf(sum) === -1)
            result.push(sum);
    }
    
    return result.length;
};
