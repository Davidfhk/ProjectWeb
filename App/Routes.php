<?php

$app->group('', function(){
	$this->get('/home','ProjectController:home')->setName('home');
	$this->get('/about','ProjectController:about')->setName('about');
});