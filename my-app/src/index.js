import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WarClock from './WarClock';
import * as serviceWorker from './serviceWorker';


class MainBody extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <WarClock></WarClock>
                </header>
                <Board></Board>
            </div>
        );
    }
}

class Board extends React.Component{
    renderSquare(i){
        return <Square value={i} />;
    
    }
    render(){
        return this.renderSquare(9);
    }
}

class Square extends React.Component{ 
    
    render() {
        return(
            <table>
                <tbody>
                    <tr>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                    </tr>  
                    <tr>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                    </tr> 
                    <tr>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                    </tr> 
                </tbody>
            </table>

        );
        
    }
}



ReactDOM.render(<MainBody/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*  IGNORE
let foo={
    i:0,
    seq:'',
    a: async function(){ 
        for(let i=0;i<5;i++){
                console.log(i);
            let prom=new Promise(function(resolve,reject){
                    resolve('p'+i);
            });
            prom.then((res) =>{
                console.log(res);
            })
            //await foof.bind(this)();
            //console.log(this.seq);
        }
    },
};
foo.a();

async function foof(){
    //setTimeout(() => {
        console.log(this.i);
    //}, 0);
    for(let i =0;i<5;i++)
    {
        this.i=i;
        console.log("a"+this.i);
        this.seq+=i+" ";
    }
}




console.log(typeof([1]),[1]);
console.log(typeof([1]),Number([1]));
if('123'==='123')
    console.log("they are equal!!!!");


let num_arr1=[-2,-3,4,-1,-2,1,5,-3];
let postfix=0;
let max_sum=0;
for(let k=0;k<num_arr1.length;k++)
{
    if(postfix<0)
        postfix=0;
    else
        postfix+=num_arr1[k];
    max_sum=Math.max(postfix,max_sum);
console.log(max_sum);
}*/

/* LIS
let arr=[10,22,9,33,21,50,41,60,80];
let dp=new Array(arr.length);
dp[0]=1;
for(let k=1;k<arr.length;k++)
{
    dp[k]=1;
    for(let l=0;l<k;l++)
    {
        if(arr[l]<arr[k])
            dp[k]=Math.max(dp[l]+1,dp[k]);
    }
}
console.log(dp)
console.log(Math.max.apply(null,dp));
*/

/*longest palindrome substring*/
/*
let ans='';
let str1="forgeeksskeegfor"; 
let dp=new Array(str1.length);
for (let i =0;i<str1.length;i++)
    dp[i]=new Array(str1.length);

for(let i=0;i<str1.length;i++)
{
    for(let j=0;j<str1.length-i;j++)
    {
        if(i<2)
        {
            if(str1.charAt(j)==str1.charAt(j+i))
                dp[j][j+i]=str1.substr(j,i+1);
        }
        else if(dp[j+1][j+i-1]!=undefined && str1.charAt(j)==str1.charAt(j+i))
        {
            dp[j][j+i]=str1.substr(j,i+1);
        }

        if(dp[j][j+i]!=undefined && ans.length<dp[j][j+i].length)
        {
            //console.log(ans);
            ans=dp[j][j+i];
        }
        //console.log(j,i+j,dp[j][j+i]);
    }
}
console.log(ans)
*/





