<?php

namespace App\Controllers;


use App\Models\ClientModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class Client extends ResourceController
{
    use ResponseTrait;

    protected $model;
    public function __construct(){

        $this->model = new ClientModel(); 

    }
    public function createClient()
    {
    
        $data = $this->request->getJSON();
       
        if ( $this->model->save($data)) {
            
            return $this->respondCreated($data, 'usuario criado comsucesso!');
        }
        return $this->failServerError("dados invalidos");

    }

    public function geClient(){
        $data = $this->model->findAll();

        return $this->respond($data);
    }


    public function updateClient($id = null){

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

    public function deleteClient($id = null){

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
