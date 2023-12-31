const {add} = require('date-fns')
let newDate = days => {
  let date = add(new Date(2020, 7, 22), days)
  console.log(date)
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}
module.exports = newDate
