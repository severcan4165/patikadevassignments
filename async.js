import axios from 'axios';
import fetch from 'node-fetch';
let postData2;
let userId2;
async function getInfo2(number){
    userId2 = await (await fetch("https://jsonplaceholder.typicode.com/users/" + number)).json();
    postData2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/?id=" + number)).json();
    // console.log(userId2);
    // console.log(postData2); burda console log yapmayınca index.js de undefined geliyor, sebebi ne?
    return userId2,postData2;
 }
 export default getInfo2;

 export{
    userId2,
    postData2
 };