/**
 * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
 * The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * Example:
 * Input: J = "aA", S = "aAAbbbb"
   Output: 3
 *
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    //let lookUp = {};
    let count = 0;
    
    for(let i=0;i<S.length;i++) {
        if(J.indexOf(S.charAt(i)) !== -1)
            count++;
    }
    /*for(let char of S) {
        lookUp[char] = (lookUp[char] || 0) + 1;
    }
    
    for(let char of J) {
        if(lookUp[char] > 0) {
            count += lookUp[char];
        }      
    }*/
    
    return count;
};