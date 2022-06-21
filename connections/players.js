const sql = require('../scripts/db');

async function getPlayer(id) {
    let result = await sql(`SELECT * FROM players WHERE id = "${id}"`);
    return result;
};

async function getPlayers() {
    let result = await sql(`SELECT * FROM players`);
    return result;
};

async function newPlayer(name, code, th, rank) {
    let result = await sql(`INSERT INTO players (name, code, th, rank) VALUES ("${name}","${code}","${th}","${rank}")`);
    return result;
};

async function setPlayer(name, code, th, rank, banned) {
    let result = await sql(`UPDATE players SET name="${name}", code="${code}", th="${th}", rank="${rank}", banned="${banned}" WHERE id = "${id}"`);
    return result;
};

module.exports = {
    getPlayer: getPlayer,
    getPlayers: getPlayers,
    newPlayer: newPlayer,
    setPlayer: setPlayer,
};