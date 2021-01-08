function changeColor(myColorChoice) {
    //console.log('function active');
    const rndR = Math.floor(Math.random() * 256);
    myColorChoice[0] = rndR;
    const rndG = Math.floor(Math.random() * 256);
    myColorChoice[1] = rndG;
    const rndB = Math.floor(Math.random() * 256);
    myColorChoice[2] = rndB;
    return myColorChoice;
}
function rndColor() {
    const r = Math.floor(Math.random() * 256);
    return r;
}


export { changeColor, rndColor };