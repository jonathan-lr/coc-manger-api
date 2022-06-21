const sql = require('../scripts/db');

async function getCard(id) {
    let result = await sql(`SELECT * FROM card WHERE id = "${id}"`);
    return result;
};

module.exports = {
    getCard: getCard,
};