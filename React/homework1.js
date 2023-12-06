import axios from 'axios'

async function userInfo(id){
    try{
        const[user, post] = await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts?id=${id}`),
        ])
        const data = {...user.data,post:post.data}
        console.log(data);
    }catch(e){
        console.log(e);
    }
}

export {userInfo}