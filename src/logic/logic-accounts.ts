import * as bcrypt from 'bcrypt';
import * as R from '../services/value-objects';

export function hash(input) {
    return new Promise (
        (resolve, reject) => {
            bcrypt.hash(input, 10)
            .then(hash => resolve(hash))
            .catch(err => reject(err))
        }
    )
}

export function saveUserInformation(client, email, phone, password, name) {
    return new Promise (
        (resolve, reject) => {
            client.insertUser([email, phone, password, name, 'user'])
            .then((result) => {
                console.log(result)
                let u = result.rows[0]
                console.log(u)
                let user = R.UserDB.fromJSON({
                    email:u.email,
                    user_uuid:u.user_uuid,
                    permission:u.permission,
                    phone:u.phone,
                    name:u.name,
                    password:u.password
                })
                console.log(user)
                resolve(user)
            })
            .catch(err => reject(err))
        }
    )
}

export const randomString = new Promise((resolve, reject) => {
    let string = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=`,." +
            "<>/?;:'{}[]|";
    for (let i = 0; i <= 40; i++) {
        string += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    if (typeof string === "undefined") {
        let err = new Error ("randomString failed to create anything ")
        return reject(err)
    }
    return resolve(string);
})

export function insertUserNonce(client, uuid, nonce) {
    return new Promise (
        (resolve, reject) => {
            client.insertNonce([uuid, nonce])
            .then(result => resolve(result))
            .catch(err => reject(err))
        }
    )
}

export function createUserSessionStorage(client, uuid, sessionID) {
    return new Promise (
        (resolve, reject) => {
            client.insertSession([uuid, sessionID])
            .then(result => resolve(result))
            .catch(err => reject(err))
        }
    )
}

export function createUserSettings(client, uuid) {
    return new Promise (
        (resolve, reject) => {
            client.insertSettings([uuid])
            .then(result => resolve(result))
            .catch(err => reject(err))
        }
    )
}