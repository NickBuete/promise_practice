//Asycn JS pracitise to simulate a user login and fetching data from a server

//TODO simulate a user login via a function that takes in a username and password and returns a promise but waits for 1 sec

function simulateLogin(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "user" && password ==== "password") {
                resolve('valid-token')
            }
            else {
                reject({error: "invalid credentials"})
            }
        }, 1000);
    })   
}

//TODO simulate fetching data from a server via a function that takes in a token and returns a promise but waits for 1 sec 
//the promise should resolve with the data object (username: , role: )
//the promise should reject with an error object (error: "invalid token" )
function simulateFetchData(token) {
    retturn new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token === 'valid-token') {
                resolve({username: 'Admin user', role: 'Administrator'})
            }
            else {
                reject({error: "invalid token"})
            }
    }, 1000)
    });
}


//TODO chain the 

