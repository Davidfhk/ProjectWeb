'use strict';

$(document).ready(function(){


// Slider

	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 1200
	});


// Posts

	var posts = [
		{
			"title":"Primer Post",
			"date": "Publicado el " + moment().date() + " de "+ moment().format('MMMM') + " del "+ moment().format('YYYY'),
			"content": "Etiam ultricies libero id porttitor ornare. Fusce hendrerit, dolor in efficitur euismod, dui lorem convallis quam, ac condimentum velit mauris vitae lectus. Vestibulum venenatis lacinia ante, id congue eros tincidunt in. Curabitur molestie nec augue non molestie. Fusce laoreet risus sit amet commodo fringilla. Pellentesque dapibus lorem et dolor tristique, id pulvinar urna lacinia. Pellentesque egestas neque vel arcu volutpat, malesuada hendrerit turpis semper. Sed vulputate purus nec rutrum pellentesque. Fusce ut tincidunt nulla, sed finibus turpis. Proin feugiat pulvinar ornare. Nulla ut sem ut ligula finibus pharetra. In lobortis ligula ac laoreet gravida. Nam vel orci lectus. Suspendisse potenti. Cras at nibh fringilla, vehicula felis sit amet, euismod augue. Vestibulum id diam et arcu suscipit pharetra non sit amet ex."
		},
		{
			"title":"Segundo Post",
			"date": "Publicado el " + moment().date() + " de "+ moment().format('MMMM') + " del "+ moment().format('YYYY'),
			"content": "Etiam ultricies libero id porttitor ornare. Fusce hendrerit, dolor in efficitur euismod, dui lorem convallis quam, ac condimentum velit mauris vitae lectus. Vestibulum venenatis lacinia ante, id congue eros tincidunt in. Curabitur molestie nec augue non molestie. Fusce laoreet risus sit amet commodo fringilla. Pellentesque dapibus lorem et dolor tristique, id pulvinar urna lacinia. Pellentesque egestas neque vel arcu volutpat, malesuada hendrerit turpis semper. Sed vulputate purus nec rutrum pellentesque. Fusce ut tincidunt nulla, sed finibus turpis. Proin feugiat pulvinar ornare. Nulla ut sem ut ligula finibus pharetra. In lobortis ligula ac laoreet gravida. Nam vel orci lectus. Suspendisse potenti. Cras at nibh fringilla, vehicula felis sit amet, euismod augue. Vestibulum id diam et arcu suscipit pharetra non sit amet ex."
		},
		{
			"title":"Tercer Post",
			"date": "Publicado el " + moment().date() + " de "+ moment().format('MMMM') + " del "+ moment().format('YYYY'),
			"content": "Etiam ultricies libero id porttitor ornare. Fusce hendrerit, dolor in efficitur euismod, dui lorem convallis quam, ac condimentum velit mauris vitae lectus. Vestibulum venenatis lacinia ante, id congue eros tincidunt in. Curabitur molestie nec augue non molestie. Fusce laoreet risus sit amet commodo fringilla. Pellentesque dapibus lorem et dolor tristique, id pulvinar urna lacinia. Pellentesque egestas neque vel arcu volutpat, malesuada hendrerit turpis semper. Sed vulputate purus nec rutrum pellentesque. Fusce ut tincidunt nulla, sed finibus turpis. Proin feugiat pulvinar ornare. Nulla ut sem ut ligula finibus pharetra. In lobortis ligula ac laoreet gravida. Nam vel orci lectus. Suspendisse potenti. Cras at nibh fringilla, vehicula felis sit amet, euismod augue. Vestibulum id diam et arcu suscipit pharetra non sit amet ex."
		},
	];

	posts.forEach(post =>{
		var template = `	
		<article class="post">
			<h2>${post.title}</h2>
			<span class="date">${post.date}</span>
			<p>${post.content}</p>
			<a href="" class="button-more">Leer mas</a>
		</article>`
		
		$('#posts').append(template);
	});



})