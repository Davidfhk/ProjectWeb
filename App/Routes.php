<?php

$app->group('', function(){
	$this->get('/home','ProjectController:home')->setName('home');
	$this->get('/about','ProjectController:about')->setName('about');
	$this->get('/reloj','ProjectController:reloj')->setName('reloj');
		$this->get('/contact','ProjectController:contact')->setName('contact');
});