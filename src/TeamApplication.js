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

const TeamApplicationSchema = new mongoose.Schema(
    {
        guildId: { type: String, default: null, required: true },
        userId: { type: String, default: null, required: true },
        username: { type: String, default: null, required: true },
        type: { type: String, default: 'supporter', required: true, enum: ['developer', 'builder', 'supporter', 'events', 'designer', 'content'] },
        answers: [
            {
                type: Object,
                title: { type: String, default: '', required: true },
                value: { type: String, default: '', required: true }
            }
        ]
    },
    { collection: 'upb_application', timestamps: true }
);

module.exports = mongoose.models.TeamApplication || mongoose.model('TeamApplication', TeamApplicationSchema);
