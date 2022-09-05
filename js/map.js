 $(window).load(function () {  
	
	//Open street  Map
	var mapcanvas = document.getElementById("map-canvas");
	var mapcanvas2 = document.getElementById("map-canvas-2");

	if(mapcanvas){
		//Open street  Map
		var coord = [-23.5687424, -46.6585064]; // <--- coordinates here

		var map = L.map('map-canvas', { scrollWheelZoom:false}).setView(coord, 19);
		// var map2 = L.map('map-canvas', { scrollWheelZoom:false}).setView(coord, 19);


		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 17,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		// custom icon
		var customIcon = L.icon({
		iconUrl: 'img/mapmarker.png',
		iconSize:     [32, 32], // size of the icon
		iconAnchor:   [32, 63] // point of the icon which will correspond to marker's location
		});

		// marker object, pass custom icon as option, add to map         
		var marker = L.marker(coord, {icon: customIcon}).addTo(map);
	}	
});