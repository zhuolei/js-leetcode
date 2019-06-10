const reverse = (str) => {
    return str.split(/\s/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ');
}

export default reverse;