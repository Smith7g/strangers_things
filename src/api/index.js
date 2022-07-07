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

export async function confirmLogin(event) {
  const loginUsername = event.target[0].value;
  const loginPassword = event.target[1].value;
  // const token = result.data.token
  const tokenFromStorage = localStorage.getItem("token")
  console.log(tokenFromStorage)
  try {
    const response = await fetch(`${BASEURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${tokenFromStorage}`
      },
      body: JSON.stringify({
        user: {
          username: loginUsername,
          password: loginPassword,
        },
      }),
    });
    const result = await response.json();
    return result
  } catch (err) {
    console.error(err);
  }
}

export async function getProfile (tokenFromStorage) {
  const response = await fetch(`${BASEURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${tokenFromStorage}`
    }, 
  });
  const result = await response.json()
  const data = result.data
  return data
}



//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
