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
    const result = await response.json();
    const token = result.data.token
    console.log(result)
    localStorage.setItem("token", token)
    const tokenFromStorage = localStorage.getItem("token")
  } catch (err) {
    console.error(err);
  }
}

export async function confirmLogin(loginUsername,loginPassword) {
  console.log(loginUsername,loginPassword, "api user")
  try {
    const response = await fetch(`${BASEURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: loginUsername,
          password: loginPassword,
        },
      }),
    });
    const result = await response.json();
    console.log(result)
    return result.data.token
  } catch (err) {
    console.error(err);
  }
}

export async function getProfile (token) {
  const response = await fetch(`${BASEURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    }, 
  });
  const result = await response.json()
  const data = result.data
  console.log(data, "this is data")
  return data
}
