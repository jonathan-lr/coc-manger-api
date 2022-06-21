const sql = require('../scripts/db');

async function getCWL(id) {
    let result = await sql(`SELECT * FROM cwl WHERE id = "${id}"`);
    return result;
};

async function getCWLs() {
    let result = await sql(`SELECT * FROM cwl`);
    return result;
};

async function newCWL(userref, percentage, status, stars) {
    let result = await sql(`INSERT INTO cwl (userref, percentage, status, stars) VALUES ("${userref}","${percentage}","${status}","${stars}")`);
    return result;
};

async function setCWL(userref, percentage, status, stars, id) {
    let result = await sql(`UPDATE cwl SET userref="${userref}", percentage="${percentage}", status="${status}", stars="${stars}", banned="${banned}" WHERE id = "${id}"`);
    return result;
};

module.exports = {
    getCWL: getCWL,
    getCWLs: getCWLs,
    newCWL: newCWL,
    setCWL: setCWL,
};