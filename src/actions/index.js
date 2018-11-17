import {call} from './auth'


export function storeParam(obj) {
  return {
    type: 'STORE_PARAM',
    payload: obj
  }
}

export function getMembers() {
  return async (dispatch, getState) => {
    const reply = await call('GET', '/api/members')
    console.log("retrieved", reply.data)
    dispatch(storeParam({members: reply.data}))
  }
}
