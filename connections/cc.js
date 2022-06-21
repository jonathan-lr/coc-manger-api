const sql = require('../scripts/db');

async function getCC(id) {
    let result = await sql(`SELECT * FROM cc WHERE id = "${id}"`);
    return result;
};

async function getCCs() {
    let result = await sql(`SELECT * FROM cc`);
    return result;
};

async function newCC(userref, attacks, profit) {
    let result = await sql(`INSERT INTO cc (userref, attacks, profit) VALUES ("${userref}","${attacks}","${profit}")`);
    return result;
};

async function setCC(id, userref, attacks, profit) {
    let result = await sql(`UPDATE cc SET userref="${userref}", attacks="${attacks}", profit="${profit}" WHERE id = "${id}"`);
    return result;
};

module.exports = {
    getCC: getCC,
    getCCs: getCCs,
    newCC: newCC,
    setCC: setCC,
};