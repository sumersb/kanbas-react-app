const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


export function getDay(d: number[]): number {
    return d[2] ;
}
export function getMonthString(d: number[]): string {
    return months[d[1]-1];
}

export function getMonth(d: number[]): number {
    return d[1]-1;
}

export function getYear(d: number[]): number {
    return d[0];
}

export function getFormattedDate(d: number[]): string {
    const year = d[0];
    const month = d[1] < 10 ? "0" + d[1] : d[1];
    const day = d[2] < 10 ? "0" + d[2] : d[2];
    return year + "-" + month + "-" + day
}
const Date = {
    getDay,
    getMonth,
    getYear,
    getMonthString,
    getFormattedDate
};
export default Date;