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

const UpEconomyDataSchema = new mongoose.Schema(
    {
        uuid: { type: String, unique: true, required: true, index: true },
        coins: { type: Number, required: true, default: 0 }
    },
    { collection: 'upp_user_economy' }
);

UpEconomyDataSchema.path('uuid');

module.exports = mongoose.models.UpEconomyData || mongoose.model('UpEconomyData', UpEconomyDataSchema);
