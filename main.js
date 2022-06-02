/**
 * start a pointer from p=0;
 * find the sum on the left side element of pointer and right side element of pointer
 * if sum of left not equal to sum on right move the pointer by 1
 * keep repeating till sum on left =sum on right or till pointer reaches the end
 * if sum on left not equals to sum on right retirn -1
 * else return the index where sum is equal.
 */


let N=5;
let A=[1,3,5,2,2];
function equi(a,n){
    let p=0;
    let sum1=0;
    let sum2=0;
    while(p<n){
        for(let i=0;i<p;i++){
            sum1=sum1+a[i];
        }
         for(let i=p+1;i<n;i++){
            sum2=sum2+a[i];
        }
        if(sum1!==sum2){
            // console.log(sum1,sum2);
            
            // console.log("ln18:",p);
            sum1=0;
            sum2=0;
        }
        else{
            return p;
        }
        p++;
    }
    return -1
}
console.log(equi(A,N));