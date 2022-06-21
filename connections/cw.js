const sql = require('../scripts/db');

async function getCW(id) {
    let result = await sql(`SELECT * FROM cw WHERE id = "${id}"`);
    return result;
};

async function getCWs() {
    let result = await sql(`SELECT * FROM cw`);
    return result;
};

async function newCW(userref, percentage, status, stars) {
    let result = await sql(`INSERT INTO cw (userref, percentage, status, stars) VALUES ("${userref}","${percentage}","${status}","${stars}")`);
    return result;
};

async function setCW(userref, percentage, status, stars, id) {
    let result = await sql(`UPDATE cw SET userref="${userref}", percentage="${percentage}", status="${status}", stars="${stars}", banned="${banned}" WHERE id = "${id}"`);
    return result;
};

module.exports = {
    getCW: getCW,
    getCWs: getCWs,
    newCW: newCW,
    setCW: setCW,
};