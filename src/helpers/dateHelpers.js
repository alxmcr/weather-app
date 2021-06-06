const basicFormatDateStr = (dateStr, locale) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const date = convertDateStrToDate(dateStr)
    return date.toLocaleDateString(locale, options);
}

const formatDateStr = (dateStr, locale, options) => {
    const dateUTC = convertDateStrToDateUTC(dateStr)
    return dateUTC.toLocaleDateString(locale, options);
}

const convertDateStrToDate = (dateStr) => {
    const dateInMilliseconds = Date.parse(dateStr);
    return new Date(dateInMilliseconds);
}

const convertDateStrToDateUTC = (dateStr) => {
    const dateInMilliseconds = Date.parse(dateStr);
    const date = new Date(dateInMilliseconds);
    const year = date.getFullYear();
    const month = date.getMonth();
    const dayOfMonth = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return new Date(Date.UTC(year, month, dayOfMonth, hours, minutes, seconds))
}

const showDetailsDateTime = (date) => {
    if (date === null || date === undefined) return "Error. Parameter 'date' is null"
    const year = date.getFullYear();
    const month = date.getMonth();
    const dayOfMonth = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const data = [year, month, dayOfMonth, hours, minutes, seconds]

    return data.join(" ")
}

const extractTimeStrFromDate = (dateStr) => {
    const date = convertDateStrToDateUTC(dateStr)
    const options = { hour: '2-digit', minute: '2-digit' };
    // const hours = date.getHours();
    // const minutes = date.getMinutes();

    return date.toLocaleTimeString([], options)
}

const resetTime = (date) => {
    if (date === null || date === undefined) return date
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
}

export {
    basicFormatDateStr,
    convertDateStrToDate,
    convertDateStrToDateUTC,
    extractTimeStrFromDate,
    formatDateStr,
    resetTime,
    showDetailsDateTime
}