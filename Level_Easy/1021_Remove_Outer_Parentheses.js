/**
 * A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B      are valid parentheses strings, and + represents string concatenation.  For example, "", "    ()", "(())()", and "(()(()))" are all valid parentheses strings.

   A valid parentheses string S is primitive if it is nonempty, and there does not exist a      way to split it into S = A+B, with A and B nonempty valid parentheses strings.

   Return S after removing the outermost parentheses of every primitive string in the       primitive decomposition of S.
 *
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    if(S.length === 0)
        return 'Incorrect String';
    
    const stacks = []
    let result = ''
    
    //Iterate over the string
    for (let l of S) {
        if (l === '(') stacks.push([l]) // Push the open paranhesis onto the stack
        
        //// If there is open and close parenthesis present in the stack, add it into the result string.
        if (stacks.length > 1) result += l  
    
        // If you encounter the close symbol, check for the last value in the stack and pop the same.
        if (
            l === ')' &&
            stacks[stacks.length - 1].pop() &&
            stacks[stacks.length - 1].length === 0
        ) stacks.pop()
    }
    return result
};
