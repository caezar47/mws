//2gis map 
var CMS__TPL_PATH = '/';  
var CMS__TPL_PATH = '/wp-content/themes/azbn7theme/';  
var CMS__TPL_PATH = '/var/fedexpert/static/';  
//var CMS__TPL_PATH = '';
var iconUrl = CMS__TPL_PATH + 'img/svg/icon-map.svg';
var iconRetinaUrl = CMS__TPL_PATH + 'img/svg/icon-map.svg';
var iconSize = [49, 60];
var iconAnchor = [24, 60];  

function map_2gis(){
	var container = 'map-2gis';
	var data = $('#'+container).data('map');
	if(!data) return;
	var map;
	var center = data.center;
	var zoom = data.zoom;
	var geoclicker = data.geoclicker;
	var coords = data.placemarks;
	var objects = data.objects;
	var offices = data.offices;
	if(DG){
	    DG.then(function(){
	        return DG.plugin('https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js');
	    }).then(function(){
	        map = DG.map(container,{
	            center: center,
	            zoom: zoom,
	            geoclicker: true,
	        });

	        var markers = DG.markerClusterGroup({
	            maxClusterRadius: 200,
	            spiderfyDistanceMultiplier: 0
	        });
	        var myIcon = DG.icon({
	            iconUrl: iconUrl,
	            iconRetinaUrl: iconRetinaUrl,
	            iconSize: iconSize,
	            iconAnchor: iconAnchor,
	            popupAnchor: [0, 0]
	        });
	        //if(!objects){
			if(coords.length) {
		        for(var i = 0; i < coords.length; i++){
		            var coord = coords[i]['coord'];
		            if (offices) {
		          		var popContent = 
		            		'<div class="map__popup-heading"><a href="'+coords[i]['link']+'">'+coords[i]['heading']+'</a></div><div class="map__popup-content">' +
						'<p class="map__popup-text  is--fw">'+coords[i]['tel']+'</p>' +
						'<p class="map__popup-text">'+coords[i]['addr']+'</p></div>';
		            } else {
		          		var popContent = 
		            		'<div class="map__popup-heading">'+coords[i]['heading']+'</div>'; 
		            }
		            var obj_popup = DG.popup({
		                className: 'map__popup',
		            }).setContent(popContent);

		            var marker = DG.marker([coord[0], coord[1]],{icon: myIcon});
		            marker.bindPopup(obj_popup);
		            markers.addLayer(marker);		            
		        }
		        map.addLayer(markers);
				map.fitBounds(markers.getBounds());
		    }
	        /*} else {
		        for(var i = 0; i < objects.length; i++){
		            var coord = objects[i]['coord'];
		            var popContent = 
		            	'<div class="card__item  is--popup"><p class="card__preview  is--popup"><img class="img-responsive" src="'+objects[i]['preview']+'"></p><div><p class="card__heading  is--popup">'+objects[i]['title']+'</p><p class="card__label  is--popup"><span class="card__icon  is--popup  is--pointer"><svg class="icon-svg icon-pointer" role="img"><use xlink:href="'+CMS__TPL_PATH+'img/svg/sprite.svg#pointer"></use></svg></span>'+objects[i]['label']+'</p><p class="card__link  is--popup"><a href="'+objects[i]['link']+'" class="link__item">Подробнее</a></div></div>'
		            ; 
		            var obj_popup = DG.popup({
		                className: 'card__group  is--popup',
		            }).setContent(popContent);

		            var marker = DG.marker([coord[0], coord[1]],{icon: myIcon});
		            marker.bindPopup(obj_popup);
		            markers.addLayer(marker);
		        }
		        map.addLayer(markers);

	        }*/
	    });

		$(document.body).on('click', '[data-view-office]', null, function(event){
			event.preventDefault();
			var btn = $(this);
			var coord = btn.attr('data-coord');
			var coord_arr = coord.split(',');
			console.dir(coord_arr);
			var lat = parseFloat((coord_arr[0] || '').trim());
			var lng = parseFloat((coord_arr[1] || '').trim());
			if($(document).width() > 1199) {
				lng = lng + 0.002;
			} 
			//$('[data-view-office]').parent().removeClass('is--open');
			//$(this).parent().addClass('is--open');
			map.setView(
				[lat,  lng], 17
			);
		});
	}
}
map_2gis();
/*
old

//2gis map
var __prefix = '.pelk';
var twoGis_map_container = 'map-2gis';
var twoGis_cont = $('#' + twoGis_map_container);  
var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
var CMS__TPL_PATH = '/var/fedexpert/static/';  
//var CMS__TPL_PATH = '/fsen';  
//var CMS__TPL_PATH = '';  
if(twoGis_cont.length) { 
	var twoGis_map_data = JSON.parse(twoGis_cont.attr('data-map') || '{}');
	var map;
	var mapCoord = twoGis_map_data.center;
	var mapZoom = twoGis_map_data.zoom;
	var placeholderCoord = twoGis_map_data.placemarks.coord;
	var iconUrl = CMS__TPL_PATH + '/img/svg/icon-map.svg';
	var iconRetinaUrl = CMS__TPL_PATH + '/img/svg/icon-map.svg';
	var iconSize = [49, 60];
	var iconAnchor = [24, 60]; 
	DG.then(function () {
		map = DG.map(twoGis_map_container, {
			center: mapCoord,
			zoom: mapZoom,
			scrollWheelZoom: false,
			fullscreenControl: false
		});
		var myIcon = DG.icon({
			iconUrl: iconUrl,
			iconRetinaUrl: iconRetinaUrl,
			iconSize: iconSize,
			iconAnchor: iconAnchor,
			popupAnchor: [0, 0]
		});

		if(twoGis_map_data.placemarks.length) {
			for(var i = 0; i < twoGis_map_data.placemarks.length; i++) {
				var popHeading = '<div class="map__popup-heading">'+twoGis_map_data.placemarks[i].heading+'</div>';	
				var obj_popup = DG.popup({
					className: 'map__popup',
				}).setContent(popHeading);

				DG.marker(twoGis_map_data.placemarks[i].coord, {icon: myIcon}).addTo(map).bindPopup(obj_popup);
			}
		}
	});

	$(document.body).on('click.azbn7', '[data-office]', null, function(event){
		event.preventDefault();
		var btn = $(this);
		var coord = btn.attr('data-coord');
		var coord_arr = coord.split(',');
		console.dir(coord_arr);
		var lat = parseFloat((coord_arr[0] || '').trim());
		var lng = parseFloat((coord_arr[1] || '').trim());
		$('[data-office]').parent().removeClass('is--open');
		$(this).parent().addClass('is--open');
		map.setView(
			[lat,  lng]
		);
	});
}
*/