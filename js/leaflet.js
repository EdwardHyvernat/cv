mbUrl = 'http://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWR3YXJkaCIsImEiOiJjaXpxd3h3MDkwMDE3MzJxdTF1enljZ2ViIn0.ewaeb0hRCWBOrQZv4kfuvw'

var gris     		  = L.tileLayer(mbUrl, {id: 'mapbox.light'}),
	streets  		  = L.tileLayer(mbUrl, {id: 'mapbox.streets'}),
	dark     		  = L.tileLayer(mbUrl, {id: 'mapbox.dark'}),
	outdoors 		  = L.tileLayer(mbUrl, {id: 'mapbox.outdoors'}),
	pirates           = L.tileLayer(mbUrl, {id: 'mapbox.pirates'}),
	emerald           = L.tileLayer(mbUrl, {id:	'mapbox.emerald'}),
	satellite		  = L.tileLayer(mbUrl, {id:	'mapbox.satellite'}),
	sport             = L.tileLayer(mbUrl, {id: 'mapbox.run-bike-hike'});

var LeafIcon = L.Icon.extend({
	options: {
		iconSize:   [25, 41],
		iconAnchor: [12, 41],
		popupAnchor:[0, -41] 
	}
});
	
var vertIcon   = new LeafIcon({iconUrl: "../img/leaflet/marqueur_vert.png"}),
	bleuIcon   = new LeafIcon({iconUrl: "../img/leaflet/marqueur_bleu.png"}),
	rougeIcon  = new LeafIcon({iconUrl: "../img/leaflet/marqueur_rouge.png"}),
	violetIcon = new LeafIcon({iconUrl: "../img/leaflet/marqueur_violet.png"});
	
var rouge = new L.LayerGroup(),
	violet = new L.LayerGroup(),
	vert = new L.LayerGroup(),
	bleu = new L.LayerGroup();

L.marker([49.04211, 1.57195] ,{icon: rougeIcon}).bindPopup('Résidence').addTo(rouge),
L.marker([48.83102, 2.34052] ,{icon: violetIcon}).bindPopup('Travail').addTo(violet),
L.marker([48.8439, 2.42658]  ,{icon: vertIcon}).bindPopup('Vie privée').addTo(vert),
L.marker([49.6498, 0.92926]  ,{icon: vertIcon}).bindPopup('Vie privée').addTo(vert),
L.marker([48.84466, 2.34258] ,{icon: bleuIcon}).bindPopup('Etudes').addTo(bleu);

		
var carto = L.map('mapleaflet', {center: [49, 1], zoom: 7, layers: [emerald, rouge, violet, vert, bleu]});



var fond_plan = {
				 "Gray": gris,
				 "Streets": streets,
				 "Outdoors": outdoors,
				 "Dark": dark,
				 "Pirates": pirates,
				 "Emerald": emerald,
				 "Sport": sport,
				 "Satellite": satellite
				 					};

var couche = {
			  "Résidence": rouge,
			  "Travail": violet,
			  "Vie privée": vert,
			  "Etudes": bleu
				             };
							 
L.control.layers(fond_plan, couche).addTo(carto);
L.control.scale().addTo(carto);