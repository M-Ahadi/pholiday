const pholiday = require('./index')
const date = pholiday('2013-8-25 16:40:00', 'YYYY-M-D HH:mm:ss').endOf('jMonth')
const momentHijri = require('moment-hijri')
console.log(date.isHoliday())
console.log(date.events())
