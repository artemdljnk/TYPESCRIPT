"use strict";
async function foobar(url) {
    const response = await fetch(url);
    const wait = await response.json();
    return wait;
}
foobar('https://jsonplaceholder.typicode.com/users/3')
    .then(user => {
    console.log(user.name);
});
