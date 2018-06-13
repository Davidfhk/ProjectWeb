<?php

namespace App\projectws;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\projectws\ProjectModel as Model;

class ProjectController
{
	private $model;
	private $route;
	private $view;

    public function __construct(Model $model,$route,$view)
    {
		$this->model = $model;
		$this->route = $route;
		$this->view = $view;
    }

	public function home (Request $request, Response $response, $args)
    {  
        return $this->view->render($response, 'index.twig');
    }


	public function about (Request $request, Response $response, $args)
    {  
        return $this->view->render($response, 'about.twig');
    }

	public function reloj (Request $request, Response $response, $args)
    {  
        return $this->view->render($response, 'reloj.twig');
    }

	public function contact (Request $request, Response $response, $args)
    {  
        return $this->view->render($response, 'contact.twig');
    }
}