mbUrl = 'http://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWR3YXJkaCIsImEiOiJjaXpxd3h3MDkwMDE3MzJxdTF1enljZ2ViIn0.ewaeb0hRCWBOrQZv4kfuvw'

var mb_gris     		  = L.tileLayer(mbUrl, {id: 'mapbox.light'}),
	mb_streets  		  = L.tileLayer(mbUrl, {id: 'mapbox.streets'}),
	mb_dark     		  = L.tileLayer(mbUrl, {id: 'mapbox.dark'}),
	mb_outdoors 		  = L.tileLayer(mbUrl, {id: 'mapbox.outdoors'}),
	mb_pirates           = L.tileLayer(mbUrl, {id: 'mapbox.pirates'}),
	mb_emerald           = L.tileLayer(mbUrl, {id:	'mapbox.emerald'}),
	mb_satellite		  = L.tileLayer(mbUrl, {id:	'mapbox.satellite'}),
	mb_sport             = L.tileLayer(mbUrl, {id: 'mapbox.run-bike-hike'});

var LeafIcon = L.Icon.extend({
	options: {
		iconSize:   [20, 20]
	}
});
	
var vertIcon   = new LeafIcon({iconUrl: "img/leaflet/c_vert.png"}),
	bleuIcon   = new LeafIcon({iconUrl: "img/leaflet/c_bleu.png"}),
	rougeIcon  = new LeafIcon({iconUrl: "img/leaflet/c_rouge.png"}),
	violetIcon = new LeafIcon({iconUrl: "img/leaflet/c_vert.png"});
	
var rouge = new L.LayerGroup(),
	violet = new L.LayerGroup(),
	vert = new L.LayerGroup(),
	bleu = new L.LayerGroup();

L.marker([49.04211, 1.57195] ,{icon: rougeIcon}).bindPopup('<b>Adresse</b><br>9, rue des Prés - 27200 Vernon<br><img src="img/vernon.jpg" style="width: 50px;"/>').addTo(rouge),
L.marker([48.83102, 2.34052] ,{icon: violetIcon}).bindPopup('Travail').addTo(violet),
L.marker([48.8439, 2.42658]  ,{icon: vertIcon}).bindPopup('Loisirs').addTo(vert),
L.marker([49.6498, 0.92926]  ,{icon: vertIcon}).bindPopup('Loisirs').addTo(vert),
L.marker([48.84466, 2.34258] ,{icon: bleuIcon}).bindPopup('Etudes').addTo(bleu);

		
var carto = L.map('mapleaflet', {center: [49, 1], zoom: 7, layers: [mb_emerald, rouge, violet, vert, bleu]});



var fond_plan = {
				 "Gray": mb_gris,
				 "Streets": mb_streets,
				 "Outdoors": mb_outdoors,
				 "Dark": mb_dark,
				 "Pirates": mb_pirates,
				 "Emerald": mb_emerald,
				 "Sport": mb_sport,
				 "Satellite": mb_satellite
				 					};

var couche = {
			  "Adresse": rouge,
			  "Travail": violet,
			  "Loisirs": vert,
			  "Etudes": bleu
				             };
							 
L.control.layers(fond_plan, couche).addTo(carto);
L.control.scale().addTo(carto);