/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//     let res =[]
//     if (strs.length===1 ) {
//         res[0]=[strs[0]]
//         return res
//     } 
//   let j =0
//    let hash  ={}
//    for (let i = 0  ;  i< strs.length ;  i++){
//    let str =  strs[i]
//    str = str.split('').sort().join('')
//    if(hash[str]!== undefined){
//     res[hash[str]].push( strs[i])
//    }
//    else{
//     hash[str]= j
//     res[hash[str]]= [strs[i]]
//     j++
//    }
  
 
//    }
   
//     return res
// };
// function groupAnagrams(strings) {
//     const anagramGroups = new Map();

//     for (const string of strings) {
//         const chars = Array.from(string);
//         chars.sort();
//         const canonical = chars.join('');

//         if (anagramGroups.has(canonical)) {
//             anagramGroups.get(canonical).push(string);
//         } else {
//             const group = [string];
//             anagramGroups.set(canonical, group);
//         }
//     }

//     return Array.from(anagramGroups.values());
// }

var groupAnagrams = function(strs) {
    const map = new Map()

    for (const s of strs) {
        const count = new Array(26).fill(0)

        for (const c of s) {
            count[c.charCodeAt(0) - 97]++
        }

        // compact key
        const key = count.join('#')

        if (!map.has(key)) map.set(key, [])
        map.get(key).push(s)
    }

    return [...map.values()]
}
