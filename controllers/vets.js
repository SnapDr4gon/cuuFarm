const express = require('express');

function create(req, res, next) {
    res.send('Vets created');
}

function list(req, res, next) {
    res.send('Vets list')
}

function index(req, res, next) {
    res.send('Vets index');
}

function replace(req, res, next) {
    res.send('Vets replace');
}

function update(req, res, next) {
    res.send('Vets update');
}

function destroy(req, res, next) {
    res.send('Vets destroyed');
}

module.exports = {
    create,
    list,
    index,
    replace,
    update,
    destroy
}