var Sonos = require('../').Sonos

var sonos = new Sonos(process.env.SONOS_HOST || '192.168.1.65', process.env.SONOS_PORT || 1400)

var options = {
	apikey : "hdZZ0JnGezRDF84aG7cyMs3hGYL4eiz5",
	username : "antxxxx",
	password : "my bondsman will dredge a pun",
	apigeeurl : "https://antxxxx-test.apigee.net/v1/smapi",
	total : 10,
	start : 0
	
}

sonos.searchSpotify('tracks', 'coolaa gaauitar baaoy', options, function (err, data) {
    console.log(err, data)
    //console.log(data.items[0].metaData)
    //var toPlay = {
    //    uri: data.items[0].uri.replace('&', '&amp;'),
    //    metadata: data.items[0].metaData
    //}
    //sonos.queue(toPlay, function (err1, playing) {
    //    console.log(err, playing)
    //})
    
})