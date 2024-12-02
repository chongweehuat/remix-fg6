const isYear = (str:string) => {
    return /^\d{4}$/.test(str) && Number(str) >= 1000 && Number(str) <= 9999;
}

export {isYear};