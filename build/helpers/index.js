'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formMemberCSV = formMemberCSV;
function formMemberCSV(members) {
  var csv = '';
  csv += 'first name, last name, address \n';
  members.forEach(function (member) {
    csv += member.first_name + ", ";
    csv += member.last_name + ", ";
    csv += member.address + "\n";
  });
  return csv;
}