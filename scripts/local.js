const app = require('../app');
const port = process.env.PORT || 9000;

//Launch Server
app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});
