import Axios from 'axios'

export async function login(username = null, password = null) {
  if(!username || !password) return false
  try {
    const resp = await Axios.get('/api/login', {headers: {username: username, password: password}})
    return resp
  }
  catch(err) {
    return {status: 401}
  }
}

export function call(request, url, params) {
  const authHeader = {
    headers: {
      'x-access-token': null
    }
  }
  switch(request) {
    case 'GET':
      return Axios.get(url, authHeader, params)
    case 'POST':
      return Axios.post(url, params, authHeader)
  }
}

/*
  POST
  const params = {
  state: stateArr
}

  GET
  const params = {
    params: {
      state: stateArr
    }
  }

*/
