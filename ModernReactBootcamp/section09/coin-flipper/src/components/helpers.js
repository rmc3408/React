function choice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    //console.log(idx);
    return arr[idx];
}
export { choice };