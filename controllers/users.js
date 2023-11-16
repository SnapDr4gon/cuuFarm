const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

async function create(req, res, next) {
    const name = req.body.name;
    const password = req.body.password;
    let salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(password, salt);

    let user = new User({
        name: name,
        password: passwordHash,
        salt: salt
    });

    user.save()
        .then(object => res.status(200).json({
            message: "New User created and saved",
            obj: object
        })).cathc(ex => res.status(500).json({
            message: "User could not be created or saved",
            obj: ex
        }));
}

function list(req, res, next) {
    
    User.find()
        .then(objects => res.status(200).json({
            message: "Users list",
            obj: objects
        })).catch(ex => res.status(500).json({
            message: "Could not show Users list",
            obj: ex
        }));
}

function index(req, res, next) {
    const id = req.params.id;

    User.findOne({ "_id" : id })
        .then(object => res.status(200).json({
            message: `Information of the user with id ${id}`,
            obj: object
        })).catch(ex => res.status(500).json({
            message: `Could not show the information of the user with id ${id}`,
            obj: ex
        }));
}

function replace(req, res, next) {
    const id = req.params.id;

    const name = req.body.name ? req.body.name : "";
    const password = req.body.password ? req.body.password : "";

    let user = new Object({
        name: name,
        password: password
    });

    User.findOneAndUpdate({ "_id" : id }, user, { new: true })
        .then(object => res.status(200).json({
            message: "User replaced correctly",
            obj: object
        })).catch(ex => res.status(500).json({
            message: "Could not replace User correctly",
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;

    const name = req.body.name;
    const password = req.body.password;

    let user = new Object();

    if (name) user._name = name;
    if (password) user._password = password;

    User.findOneAndUpdate({ "_id" : id}, user)
        .then(object => res.status(200).json({
            message: "User updated correctly",
            obj: object
        })).catch(ex => res.status(500).json({
            message: "Could not update user correctly",
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;

    User.findOneAndRemove({ "_id" : id })
        .then(object => res.status(200).json({
            message: "User deleted correctly",
            obj: object
        })).catch(ex => res.status(500).json({
            message: "Could not delete user correctly",
            obj: ex
        }));
}

module.exports = {
    create,
    list,
    index,
    replace,
    update,
    destroy
};