<?php
/**
 * DEPENDENCIES OF THE APP MUST BE INYECTED HERE
 *
 * DEPENDENCY CONTAINER: $container
 *
 * @autor David Ignacio Martos <davidignacio.martos@madisonmk.com>
 * @version 1.0.0
 */

$container['ProjectModel'] = function ($c){
	return new \App\projectws\ProjectModel;
};

$container['ProjectController'] = function ($c){
	return new \App\projectws\ProjectController(
		$c['ProjectModel'],
		$c['router'],
		$c['view']
	);
};

$container['view'] = function ($c){
	$view = new \Slim\Views\Twig(__DIR__ . '/projectws/templates/',[
		'cache' => false]);
	$view->addExtension(new \Slim\Views\TwigExtension(
		$c['router'],
		$c['request']->getUri()
	));
	return $view;
};