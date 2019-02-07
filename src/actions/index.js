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
    //console.log("retrieved", reply.data)
    const updated = reply.data.map((person) => ({
      ...person,
      birth_month: (person.birth_date) ? parseInt(person.birth_date.split("/")[0]) : null,
      birth_day: (person.birth_date) ? parseInt(person.birth_date.split("/")[1]) : null,
      birth_year: (person.birth_year) ? parseInt(person.birth_year) : null
    }))
    dispatch(storeParam({members: updated}))
  }
}

export function createMember(member) {
  return async (dispatch, getState) => {
    const reply = await call('POST', '/api/members/new', member)
    if(reply.data.success) {
      dispatch(getMembers())
      return reply.data
    }
  }
}
