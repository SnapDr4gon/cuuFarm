const express = require('express');

function create(req, res, next) {
    res.send('Ranchers create');
}

function list(req, res, next) {
    res.send('Ranchers list');
}

function index(req, res, next) {
    res.send('Ranchers index');
}

function replace(req, res, next) {
    res.send('Ranchers replace');
}

function update(req, res, next) {
    res.send('Rancher update');
}

function destroy(req, res, next) {
    res.send('Rancher destroyed');
}

module.exports = {
    create,
    list,
    index,
    replace,
    update,
    destroy
};