const mongoose = require('mongoose');
const { readFileSync } = require('node:fs');
const { MinecraftIdentity } = require('.');

let connectionString = readFileSync('./.connection', 'utf8') || 'mongodb://localhost:27017';

const uuid = 'a6a85419-f0d1-45f0-afa0-cb1396cfaa8f';
const username = '_Lucifer_1234_';

//  setup debug
mongoose.set('debug', true);

// Mongo setup
mongoose.set('strictQuery', false);

(async () => {
    await mongoose.connect(connectionString.trim()).catch(console.error);

    let identity = await MinecraftIdentity.findOne({ uuid });
    let stats = await identity.stats();

    console.log(identity);
    console.log(stats);

    mongoose.disconnect();
})();
