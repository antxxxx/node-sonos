var Sonos = require('../').Sonos

var sonos = new Sonos(process.env.SONOS_HOST || '192.168.1.65', process.env.SONOS_PORT || 1400)

var options = {
	apikey : "PUT APIGEE API KEY HERE",
	username : "PUT SPOTIFY USERNAME HERE",
	password : "PUT SPOTIFY PASSWORD HERE",
	apigeeurl : "PUT APIGEE URL HERE",
	total : 17,
	start : 15
	
}

sonos.searchSpotify('tracks', 'new rose', options, function (err, data) {
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