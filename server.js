const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const app_2 = express();
const port_2 = 3001;

app.use(express.static(path.join(__dirname, 'public')));
app_2.use(express.static(path.join(__dirname, 'public_2')));

// app.get('/pixi.js', (req, res) => {
// 	res.sendFile(
// 		path.join(__dirname, 'pixi.js')
// 	);
// 	console.log('result:', path.join(__dirname, '/'));
// });

// app.get('/public_2/pixi.mjs', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/public_2/pixi.mjs'));
// 	console.log('result:', path.join(__dirname, '/'));
// });

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
app_2.listen(port_2, () => {
	console.log(`Example app listening on port ${port_2}`);
});
