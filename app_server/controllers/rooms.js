var fs = require('fs');
var roomsJson = JSON.parse(fs.readFileSync('./data/rooms.json','utf8'));

/* GET travel view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', roomsJson, isRooms: true });
};

module.exports = {
    rooms
};