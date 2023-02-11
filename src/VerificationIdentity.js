/**
 * Copyright (c) 2023 - present | LuciferMorningstarDev <contact@lucifer-morningstar.dev>
 * Copyright (c) 2023 - present | upcraftmc.de <contact@surviv.fun>
 * Copyright (c) 2023 - present | upcraftmc.de team and contributors
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

const VerificationIdentitySchema = new mongoose.Schema(
    {
        uuid: { type: String, unique: true, required: true, index: true },
        did: { type: String, unique: true, required: true, index: true },
        verified: { type: Boolean, required: true, default: false }
    },
    { collection: 'upp_verify_identity' }
);

VerificationIdentitySchema.path('uuid');

module.exports = mongoose.models.VerificationIdentity || mongoose.model('VerificationIdentity', VerificationIdentitySchema);
