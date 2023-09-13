<?php

namespace App\Controllers;



use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class User extends ResourceController
{
    use ResponseTrait;

    protected $model;
    public function __construct(){

        $this->model = new UserModel(); 

    }
    public function create()
    {
       
        $data = $this->request->getJSON();
        
        if ( $this->model->save($data)) {
            return $this->respondCreated($data, 'usuario criado comsucesso!');
        }

    }

    public function get(){
        $data = $this->model->findAll();

        return $this->respond($data);
    }


    public function updateUser($id = null){

        $data = $this->request->getJSON();

        if($this->model->find($id)){
    
            $this->model->update($id,$data);
             $response = [
               'status'   => 200,
               'error'    => null,
               'messages' => [
                   'success' => 'Dados Atualizados com sucesso!!'
               ]
               ];
           
           return$this->respondUpdated($response);
       }
       return $this->failNotFound('Nenhum dado encontrado com id '.$id); 
        
    }

    public function delete($id = null){

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
       return $this->failNotFound('Nenhum dado encontrado com id '.$id);

    }
}
