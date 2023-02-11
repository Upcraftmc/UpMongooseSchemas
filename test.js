const mongoose = require('mongoose');
const { readFileSync } = require('node:fs');
const { MinecraftIdentity } = require('./src');

let connectionString = readFileSync('./data/.connection', 'utf8');
let uuid = readFileSync('./data/.uuid', 'utf8');
let username = readFileSync('./data/.username', 'utf8');

//  setup debug
mongoose.set('debug', true);

// Mongo setup
mongoose.set('strictQuery', false);

(async () => {
    await mongoose.connect(connectionString.trim()).catch(console.error);

    let identity = await MinecraftIdentity.findOne({ uuid }).catch(console.error);
    console.log('Identity: ', identity);

    let identityNamed = await MinecraftIdentity.findOne({ username }).catch(console.error);
    console.log('NamedIdentity: ', identityNamed);

    let verify = await identity.getVerification().catch(console.error);
    console.log('Verify: ', verify);

    let stats = await identity.getStatistics().catch(console.error);
    console.log('Stats: ', stats);

    let options = await identity.getOptions().catch(console.error);
    console.log('Options: ', options);

    let names = await identity.getNameHistory().catch(console.error);
    console.log('NameHistory: ', names);

    mongoose.disconnect();
})();
