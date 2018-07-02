import regist from './regist.js';
{
    console.log('a:',regist.a);
    [1,2,3].forEach(()=>{
        return new Promise(()=>{
            console.log(1)
        },()=>{
            console.log('error')
        })
    })
    let [a, b, c] = [1, 2, 3];
    console.log('a=',a);
    console.log('b=',b);
    console.log('c=',c);
}