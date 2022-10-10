import axios from 'axios';
import fetch from 'node-fetch';



const getInfo = async (number) =>{

    const {data:userId1} = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    const {data:postData1} = await axios("https://jsonplaceholder.typicode.com/posts?id=" + number);
 

    console.log("********!!!!!*******")

    console.log(userId1)
    console.log("***********!!!!****")
    console.log(postData1);

}

export default getInfo;