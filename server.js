const express = require('express');
const app = express();
const server = app.listen(3000, () => {
	console.log(`Express Running -> PORT ${server.address().port}`);
});
app.get('/', (req, res) => {
  res.render('index', {title:'Homepage'});
});
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));