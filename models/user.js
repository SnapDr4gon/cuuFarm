const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _password: String,
    _salt: String
});

class User {

    constructor(name, password, salt) {
        this._name = name;
        this._password = password;
        this._salt = salt;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get salt() {
        return this._salt;
    }

    set salt(value) {
        this._salt = value;
    }
}

schema.loadClass(User);
module.exports =  mongoose.model('User', schema);