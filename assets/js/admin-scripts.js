jQuery(function($){
	var i = 0;
	// load existing locations 
	$.each(additionallocations, function(k, v){
		console.log(v);
		// let clone = $('.fieldset-job_location').clone();
		$('#wpjmel_location .inside').append('<div><input type="text" style="width:100%" value="'+additionallocations[k]['name']+'" name="additionallocation['+i+'][name]" id="job_location'+ i +'"></div>');
		// console.log(clone);
		wpjmel_mb.input = '#job_location' + i;
		wpjmel_mb.lat_input = 'additionallocation['+i+'][geo_lat]';
		wpjmel_mb.lng_input = 'additionallocation['+i+'][geo_lng]';
		wpjmel_mb.lat = additionallocations[k]['geo_lat'];
		wpjmel_mb.lng = additionallocations[k]['geo_lng'];
		$( '#job_location' + i ).mapify(wpjmel_mb);
		i++;
	});

	console.log(additionallocations);


	$('#wpjmel_location').append('<p class="button button-primary button-medium addLocation"> Add another location</p>');
	$('body').on('click', '.addLocation', function(){
		// let clone = $('.fieldset-job_location').clone();
		$('#wpjmel_location .inside').append('<div><input type="text" class="input-text" name="additionallocation['+i+'][name]" id="job_location'+ i +'"></div>');
		// console.log(clone);
		wpjmel_mb.input = '#job_location' + i;
		wpjmel_mb.lat_input = 'additionallocation['+i+'][geo_lat]';
		wpjmel_mb.lng_input = 'additionallocation['+i+'][geo_lng]';
		$( '#job_location' + i ).mapify(wpjmel_mb);
		i++;
	});
});