/**
 * Copyright (c) 2023 - present | LuciferMorningstarDev <contact@lucifer-morningstar.dev>
 * Copyright (c) 2023 - present | upcraftmc.com <contact@upcraftmc.com>
 * Copyright (c) 2023 - present | upcraftmc.com team and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
