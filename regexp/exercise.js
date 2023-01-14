const command = "create table author (id number, name string, age number, city string, state string, country string)";
const regexp = /^(create table) ([a-z]+) \((.+)\)/;
const parseCommand = command.match(regexp);
const tableName = parseCommand[2];
const colums = parseCommand[3].split(", ");

console.log(tableName);
// expect output: 'author'

console.log(colums);
// expect output: [ 'id number', 'name string', 'age number', 'city string', 'state string', 'country string' ]