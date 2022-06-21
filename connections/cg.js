const sql = require('../scripts/db');

async function getCG(id) {
    let result = await sql(`SELECT * FROM cg WHERE id = "${id}"`);
    return result;
};

async function getCGs() {
    let result = await sql(`SELECT * FROM cg`);
    return result;
};

async function newCG(userref, profit) {
    let result = await sql(`INSERT INTO cg (userref, profit) VALUES ("${userref}","${profit}")`);
    return result;
};

async function setCG(id, userref, profit) {
    let result = await sql(`UPDATE cg SET userref="${userref}", profit="${profit}" WHERE id = "${id}"`);
    return result;
};

module.exports = {
    getCG: getCG,
    getCGs: getCGs,
    newCG: newCG,
    setCG: setCG,
};