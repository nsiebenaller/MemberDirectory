'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formMemberCSV = formMemberCSV;
function formMemberCSV(members) {
  var csv = '';
  csv += 'first name, last name, address, city, state, zip, home_phone, cell_phone, email, membership_date, status, birth_day, birth_month, birth_year \n';
  members.forEach(function (member) {
    csv += member.first_name + ", ";
    csv += member.last_name + ", ";
    csv += member.address + ", ";
    csv += member.city + ", ";
    csv += member.state + ", ";
    csv += member.zip + ", ";
    csv += member.home_phone + ", ";
    csv += member.cell_phone + ", ";
    csv += member.email + ", ";
    csv += member.membership_date + ", ";
    csv += member.status + ", ";
    csv += member.birth_day + ", ";
    csv += member.birth_month + ", ";
    csv += member.birth_fullyear + "\n";
  });
  return csv;
}