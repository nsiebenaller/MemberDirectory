
export function formMemberCSV(members) {
  let csv = ''
  csv += 'first name, last name, address \n'
  members.forEach((member) => {
    csv += member.first_name+", "
    csv += member.last_name+", "
    csv += member.address+"\n"
  })
  return csv
}
