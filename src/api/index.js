const BASEURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT";
export async function getPosts() {
    const response = await fetch(`${BASEURL}/posts`);
    const result = await response.json();
    const posts = result.data.posts;
    return posts;
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
    localStorage.setItem("token", token)
    const tokenFromStorage = localStorage.getItem("token")
  } catch (err) {
    console.error(err);
  }
}

export async function confirmLogin(loginUsername,loginPassword) {
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
    const token = result.data.token;
    return token;
}

export async function getProfile(token) {
  const response = await fetch(`${BASEURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    }, 
  });
  const result = await response.json()
  const profile = result.data;
  return profile;
}

export async function modifiedPost(token, post, postid) {
  const response = await fetch(`${BASEURL}/posts/${postid}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      post: post
    })
  });
  const result = await response.json();
  return result;
}

export async function deletePost(token, postid) {
  const response = await fetch(`${BASEURL}/posts/${postid}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    }
  });
  const result = await response.json();
  return result;
}

export async function addMessage(token, postid, message) {
  const response = await fetch(`${BASEURL}/posts/${postid}/messages`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      message: message
    })
  });
  const result = await response.json();
  return result;
}

export async function newUserPost(token,post) {
const response = await fetch(`${BASEURL}/posts`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: post
      })
    });
    const result = await response.json();
    const newPost = result.data.posts;
    return newPost;
}

