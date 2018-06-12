<?php

$app->group('', function(){
	$this->get('/','ProjectController:home')->setName('home');
	$this->get('/about','ProjectController:about')->setName('about');
});