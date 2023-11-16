const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _UPP: String,
    _tagNumber: String,
    _ironNumber: String,
    _race: String,
    _gender: {
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    _age: {
        type: Number,
        integerOnly: true
    },
    _weight: Number,
    _status: {
        type: String,
        enmu: ['SOLD', 'AVAILABLE']
    },
    _photo: {
        data: Buffer,
        contentType: String
    },
    _document: {
        data: Buffer,
        contentType: String
    }
});

class Animal {

    constructor(UPP, tagNumber, ironNumber, race, gender, age, weight, status, photoData, photoContentType, documentData, documentContentType) {
        this._UPP = UPP;
        this._tagNumber = tagNumber;
        this._ironNumber = ironNumber;
        this._race = race;
        this._gender = gender;
        this._age = age;
        this._weight = weight;
        this._status = status;
        this._photo = {
            data: photoData,
            contentType: photoContentType
        };
        this._document = {
            data: documentData,
            contentType: documentContentType
        };
    }

    get UPP() {
        return this._UPP;
    }

    set UPP(value) {
        this._UPP = value;
    }

    get tagNumber() {
        return this._tagNumber;
    }

    set tagNumber(value) {
        this._tagNumber = value;
    }

    get ironNumber() {
        return this._ironNumber;
    }

    set ironNumber(value) {
        this._ironNumber = value;
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

    get document() {
        return this._document;
    }

    set document(value) {
        this._document = value;
    }
}

schema.loadClass(Animal);
module.exports('Animal', schema);