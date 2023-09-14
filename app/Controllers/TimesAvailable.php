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
          
        if ($this->userModel->find($id) ){

            $this->model->save($data);
            return $this->respondCreated($data, 'horario salvo vom sucesee!');
        }

    }

    public function getDate($prof_id = null){

        $data = $this->model->where(['prof_id'=>$prof_id , 'available' => true])->findAll();

        if ($data) {
           return $this->respond($data);
        }
        return $this->failServerError("Horarios não encontrados!");
        
    }

    public function deleteDate($id = null){

        if($this->model->find($id)){
    
            $this->model->delete($id);
             $response = [
               'status'   => 200,
               'error'    => null,
               'messages' => [
                   'success' => 'Dados deletados com sucesso!!'
               ]
               ];
           
           return$this->respondUpdated($response);
       }
       return $this->failNotFound('Nenhum horarios'.$id);

    }
    public function updateDate($id = null){

        $data = $this->request->getJSON();

        if($this->model->find($id)){
    
            $this->model->update($id,$data);
             $response = [
               'status'   => 200,
               'error'    => null,
               'messages' => [
                   'success' => 'Horarios Atualizados com sucesso!!'
               ]
               ];
           
           return$this->respondUpdated($response);
       }
       return $this->failNotFound('horario alterados com sucesso! '.$id); 
        
    }

}


