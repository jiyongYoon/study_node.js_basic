function decrypt(data) {
    return `decrypted ${data}`;
}

function read(data) {
    return decrypt(data);
}

//ECMAScript
export {
    read
}