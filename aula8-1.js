

const wakeUp = () =>{
    console.log("Acordando!")
}

const breakfast = ()=> {
    console.log('Bora tomar café!!')
}
const sleep = ()=> {
    console.log('Partiu dormir!!')
}
const doingThings = (callback) =>{
    const result = callback();
    console.log(callback);
}

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);