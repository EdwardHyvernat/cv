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
	
var rougeIcon   = new LeafIcon({iconUrl: "img/leaflet/c_rouge.png"}),
	vertIcon   = new LeafIcon({iconUrl: "img/leaflet/c_vert.png"}),
	bleuIcon  = new LeafIcon({iconUrl: "img/leaflet/c_bleu.png"}),
	jauneIcon = new LeafIcon({iconUrl: "img/leaflet/c_jaune.png"});
	
var rouge = new L.LayerGroup(),
	vert = new L.LayerGroup(),
	bleu = new L.LayerGroup(),
	jaune = new L.LayerGroup();

L.marker([49.10165, 1.4870] ,{icon: jauneIcon}).bindPopup('<b>Adresse</b><br>9, rue des Prés - 27200 Vernon<br><img src="img/vernon.jpg" style="width: 50px;"/>').addTo(jaune),
L.marker([48.83102, 2.34052] ,{icon: rougeIcon}).bindPopup('<b>Expérience Pro</b><br>Etablissement Public Foncier IdF<br><i>Administrateur Système d’Information Géographique confirmé</i><br><img src="img/logo_epfif.png" style="width: 50px;"/><br><a href="https://www.epfif.fr" target="_blank">epfif.fr</a>').addTo(rouge),
L.marker([48.80363, 2.15661] ,{icon: rougeIcon}).bindPopup('<b>Expérience Pro</b><br>Etablissement Public Foncier Yvelines<br><i>Responsable du Système d’Information Géographique</i><img src="img/epfy.jpg" style="width: 50px;"/>').addTo(rouge),
L.marker([51.50688, -0.07156]  ,{icon: vertIcon}).bindPopup('<b>Navigation</b><br>St Katharine Docks<br><i>Transmanche Zeebruges - Londres - Zeebruges</i><img src="img/sailing_london.jpg" style="width: 50px;"/><br>Octobre 2015 - 5 jours').addTo(vert),
L.marker([48.84466, 2.34258] ,{icon: bleuIcon}).bindPopup('<b>Formation</b><br>Université Paris IV<br>Licence de Géographie<br><img src="img/paris.png" style="width: 50px;"/>').addTo(bleu);
		
var carto = L.map('mapleaflet', {center: [50, 1], zoom: 6, layers: [mb_emerald, rouge, vert, bleu, jaune]});



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
			  "Expérience Pro": rouge,
			  "Loisirs": vert,
			  "Formation": bleu,
			  "A Propos": jaune
				             };
							 
L.control.layers(fond_plan, couche).addTo(carto);
L.control.scale().addTo(carto);