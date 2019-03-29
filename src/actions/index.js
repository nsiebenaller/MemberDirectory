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
    const u = updated.filter(x => x.tags.length)
    console.log(u)
    dispatch(storeParam({members: updated}))
  }
}

export function createMember(member) {
  return async (dispatch, getState) => {
    const reply = await call('POST', '/api/members/new', member)
    if(reply.data.success) {
      dispatch(getMembers())
    }
    return reply.data
  }
}

export function updateMember(member) {
  return async (dispatch, getState) => {
    const reply = await call('POST', '/api/members/update', member)
    if(reply.data.success) {
      dispatch(getMembers())
    }
    return reply.data
  }
}

export function createTag(tag) {
  return async (dispatch, getState) => {
    const reply = await call('POST', '/api/tags/new', tag)
    console.log(reply)
    return reply.data
  }
}

export function addTag(params) {
  return async (dispatch, getState) => {
    const reply = await call('POST', '/api/members/add_tag', params)
    console.log(reply)
    return reply.data
  }
}
