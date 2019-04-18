import {call} from './auth'


export function storeParam(obj) {
  return {
    type: 'STORE_PARAM',
    payload: obj
  }
}

function fetching(key, isFetching) {
  return async (dispatch, getState) => {
    const {general: {fetching}} = getState()
    const keys = Object.keys(fetching)
    if(isFetching && !keys.includes(key)) {
      const fetchingObj = {...fetching, [key]: true}
      dispatch(storeParam({fetching: fetchingObj}))
    }
    else if(!isFetching) {
      const {[key]: remove, ...rest} = fetching
      dispatch(storeParam({fetching: rest}))
    }
  }
}
function isFetching(getState, key) {
  const {general: {fetching}} = getState()
  return Object.keys(fetching).includes(key)
}

function fetched(key, isFetched) {
  return async (dispatch, getState) => {
    const {general: {fetched}, general: {fetching}} = getState()
    const keys = Object.keys(fetched)
    if(isFetched && !keys.includes(key)) {
      const fetchObj = {...fetched, [key]: true}
      const {[key]: remove, ...rest} = fetching
      dispatch(storeParam({fetched: fetchObj, fetching: rest}))
    }
    else if(!isFetched) {
      const {[key]: remove, ...rest} = fetched
      dispatch(storeParam({fetched: rest}))
    }
  }
}
function hasFetched(getState, key) {
  const {general: {fetched}} = getState()
  return Object.keys(fetched).includes(key)
}

export function getMembers() {
  return async (dispatch, getState) => {
    if(!isFetching(getState, 'members')) {
      dispatch(fetching("members", true))
      const reply = await call('GET', '/api/members')
      //console.log("retrieved", reply.data)
      const updated = reply.data.map((person) => ({
        ...person,
        birth_month: (person.birth_date) ? parseInt(person.birth_date.split("/")[0]) : null,
        birth_day: (person.birth_date) ? parseInt(person.birth_date.split("/")[1]) : null,
        birth_year: (person.birth_year) ? parseInt(person.birth_year) : null
      }))
      const u = updated.filter(x => x.tags.length)
      dispatch(storeParam({members: updated}))
      dispatch(fetched("members", true))
    }
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

export function getTags() {
  return async (dispatch, getState) => {
    const reply = await call('GET', '/api/tags/')
    console.log(reply)
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
