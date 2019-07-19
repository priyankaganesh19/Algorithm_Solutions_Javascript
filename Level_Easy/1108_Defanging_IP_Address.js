/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]"
 * Example:
 * Input: address = "1.1.1.1"
   Output: "1[.]1[.]1[.]1"
   
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    if(address.length === 0)
        return false;
    
    let newAddr = address.split('');
    
    for(let i = 0;i<newAddr.length;i++) {
        if(newAddr[i] === '.')
            newAddr[i] = '[.]';
    }
    return newAddr.join('');
};