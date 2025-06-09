const accountId = 12345
let accountEmail = "gd@gmail.com"
var accountpass = "1234"
accountState = "current"

/*
prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountpass,accountState])