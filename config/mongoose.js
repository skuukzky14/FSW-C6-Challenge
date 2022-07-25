const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/c6challenge');
}

module.exports = {
    main
}