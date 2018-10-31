let getUser = (id, callback) => {
    let user = {
        id,
        name: 'Daniel'
    };
    callback(user);
};

getUser(31, (userObject) => {
    console.log(userObject);
});