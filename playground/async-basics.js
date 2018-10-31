console.log('starting app');

setTimeout(() => {
    console.log('Inside of a callback');
}, 2000);

setTimeout(() => {
    console.log('gOING off to prepare for tomoorow, see you in a bit');
}, 3000);
console.log('finishing up');