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

const MinecraftStatsSchema = new mongoose.Schema(
    {
        uuid: { type: String, unique: true, required: true, index: true },
        createdAt: { type: String, required: true, default: '0' },
        updatedAt: { type: String, required: true, default: '0' },
        onlineMinutes: { type: String, default: '0' },
        'survival-1_lastJoin': { type: String, default: '0' },
        'survival-1_onlineMinutes': { type: String, default: '0' },
        'survival-1_deathCount': { type: String, default: '0' },
        'survival-1_lastDeath': { type: String, default: '0' },
        'survival-1_messageCount': { type: String, default: '0' },
        'survival-1_blocksPlaced': { type: String, default: '0' },
        'survival-1_blocksDestroyed': { type: String, default: '0' },
        'survival-1_walkedDistance': { type: String, default: '0' },
        'survival-1_pvpKills': { type: String, default: '0' },
        'survival-1_pveKills': { type: String, default: '0' },
        'survival-1_damageTaken': { type: String, default: '0' }
    },
    { collection: 'ups_player_stats' }
);

MinecraftStatsSchema.path('uuid');

module.exports = mongoose.models.MinecraftStats || mongoose.model('MinecraftStats', MinecraftStatsSchema);
