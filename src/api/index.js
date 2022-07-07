// import { setUsername, setPassword } from '../login';

const BASEURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT";
export async function getPosts() {
  try {
    const response = await fetch(`${BASEURL}/posts`);
    const result = await response.json();
    const posts = result.data.posts;
    return posts;
  } catch (error) {
    throw error;
  }
}

export async function registerPerson(event) {
  const registerUsername = event.target[0].value;
  const registerPassword = event.target[1].value;
  try {
    const response = await fetch(`${BASEURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: registerUsername,
          password: registerPassword,
        },
      }),
    });
  } catch (err) {
    console.error(err);
  }
}


