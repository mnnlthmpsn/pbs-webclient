var CryptoJS = require('crypto-js')

export const encryptPayload = (identifier, payload) => {
    return CryptoJS.AES.encrypt(JSON.stringify(payload), identifier).toString()
}

export const decryptPayload = (identifier, payload) => {
    // first get item from session storage
    var bytes = CryptoJS.AES.decrypt(payload, identifier)
    var decryptedPayload = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return decryptedPayload
}