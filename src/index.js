module.exports = function reverse (n) {
   if(n > 0){
    return +n.toString().split('').reverse().join('')
   }else{
  let res = -1 * n;
 return +res.toString().split('').reverse().join('')
   }

  
}
