const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const counterOut = document.querySelector('#count')

function left(num) {
    const nStr = num + ''
    if (nStr.length === 1)
        return '0' + nStr
    return nStr
}

function getDays(millis) {
    return Math.ceil(millis / DAY)
}

function getHour(millis) {
    return Math.ceil((millis%DAY) / HOUR)
}

function getMinutes(millis) {
    return Math.ceil((millis%HOUR) / MINUTE)
}

function getSeconds(millis) {
    return Math.ceil((millis%MINUTE) / SECOND)
}

function countDayAtEvent() {
    const date = new Date('2023-12-31')
    const current = new Date()

    const diff = date.getTime() - current.getTime()

    return `${getDays(diff)} Dias e ${left(getHour(diff))}:${left(getMinutes(diff))}:${left(getSeconds(diff))} Horas`
}

setInterval(() => {
    counterOut.innerHTML = countDayAtEvent()
}, 1000);