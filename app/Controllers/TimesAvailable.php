<?php

namespace App\Controllers;


use App\Models\ScheduledTimesAvailable;
use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class TimesAvailable extends ResourceController
{
    use ResponseTrait;

    protected $userModel;
    protected $model;
    public function __construct(){

        $this->userModel = new UserModel(); 
        $this->model = new ScheduledTimesAvailable();
    }
    public function createTime($id = null)
    {
       
        $data = $this->request->getJSON();
        
        

        if ($this->userModel->find($id) ) {

            $this->model->save($data);
            return $this->respondCreated($data, 'horario salvo vom sucesee!');
        }

    }
}
