import axios from 'axios';

const BASEURL =
  "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT";
 export async function getPosts() {
    try {
        const response = await fetch(`${BASEURL}/posts`);
        const result = await response.json()
        const posts = result.data.posts
        return posts ;
    } catch (error) {
        throw error;
    }
 }

 export async function registerPerson() {
    try {
      const {data} = await  fetch(`${BASEURL}/users/register`)
    }catch {

    }
}
  