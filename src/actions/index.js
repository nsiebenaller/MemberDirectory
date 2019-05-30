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

// MEMBERS
export function getMembers(history = null) {
  return async (dispatch, getState) => {
    if(!isFetching(getState, 'members')) {
      dispatch(fetching("members", true))
      try {
        const reply = await call('GET', '/api/members')
        const updated = reply.data.map((person) => ({
          ...person,
          birth_month: (person.birth_date) ? parseInt(person.birth_date.split("/")[0]) : null,
          birth_day: (person.birth_date) ? parseInt(person.birth_date.split("/")[1]) : null,
          birth_year: (person.birth_year) ? parseInt(person.birth_year) : null
        }))
        const u = updated.filter(x => x.tags.length)
        dispatch(storeParam({members: updated}))
        dispatch(fetched("members", true))
        dispatch(calculateBirthdays(updated))
      }
      catch(e) {
        console.log("err", e)
        if(history) history.push('/')
      }
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

function calculateBirthdays(members) {
  return async (dispatch, getState) => {
    const today = new Date()
    const tDay = today.getDate()
    const tMonth = today.getMonth()
    const tYear = today.getFullYear()
    const nMonth = tMonth === 11 ? 0 : tMonth + 1
    const dateSorter = (a, b) => {
      if(a.birth_month === b.birth_month) return a.birth_day > b.birth_day ? 1 : -1
      else return a.birth_month > b.birth_month ? 1 : -1
    }
    let birthdayMembers = members
      .filter(person => person.birth_month === tMonth+1 && person.birth_day >= tDay || person.birth_month === nMonth+1)
      .sort(dateSorter)
    birthdayMembers = birthdayMembers.length > 10 ? birthdayMembers.slice(0, 10) : birthdayMembers
    dispatch(storeParam({birthdayMembers: birthdayMembers}))
  }
}

// TAGS
export function getTags() {
  return async (dispatch, getState) => {
    dispatch(fetching("tags", true))
    const reply = await call('GET', '/api/tags/')
    dispatch(storeParam({tags: reply.data}))
    dispatch(fetched("tags", true))
  }
}

export function createTag(tag) {
  return async (dispatch, getState) => {
    const reply = await call('POST', '/api/tags/new', tag)
    return reply
  }
}

export function addTag(params) {
  return async (dispatch, getState) => {
    const reply = await call('POST', '/api/members/add_tag', params)
    console.log(reply)
    return reply.data
  }
}
