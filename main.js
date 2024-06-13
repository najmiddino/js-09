let letterSeacher = ['non','asal','banan','olma','aziza','gul','BMW',]

let n_harp = []
let harp = []
for (const iterator of letterSeacher) {
    if(iterator.toLowerCase().includes('n')){
        n_harp.push(iterator)
    } else {
        harp.push(iterator)
    }
}

console.log(n_harp);
console.log(harp);
