<?php

$app->group('/home', function(){
	$this->get('','ProjectController:home')->setName('home');
});