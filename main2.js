/**
 * find the sum of array and divide it by two.Let's call it sum2
 * start from the left of array and find the sum till it is doesn't excced sum2
 * repeat the above from right;
 * if both the sum are equal then we have equlibrium so return the index of number where sum just exceeds sum2
 * for array length equal to 1 it is always in equlibrium and for array length 2 if will always not be in equilibrium.
 * 
 */



let A=[1,3,5,2,2];
let N=A.length;
function pivot(a,n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+a[i];
    }
    let sum2=parseInt(sum/2);
    // console.log("LN9",sum2);
    let sum3=0;
    let sum4=0;
    let t1=0;
    let t2=0;
    if(n===1){
        return 1
    }
    if(n===2){
        return -1;
    }
   
    for(let i=0;i<n;i++){
       
            sum3=sum3+a[i];
            t1=i;
            
            if(sum3>sum2){
                // console.log("LN16",sum3,t1,a[i]);
                break;
            }
        }
    for(let i=n-1;i>=0;i--){
        
            sum4=sum4+a[i];
            t2=i;

            if(sum4>sum2){
                // console.log("LN30",sum4,t2,a[i]);
                break;
            }
}
    if(sum3===sum4){
        return t1+1;
    }
    return -1
}
console.log(pivot(A,N));