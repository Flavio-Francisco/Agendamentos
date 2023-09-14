<?php

namespace App\Controllers;


use App\Models\ClientModel;
use App\Models\ScheduledTimesAvailable;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class Client extends ResourceController
{
    use ResponseTrait;

    protected $model;
    protected $dataModel ;
    public function __construct(){
        $this->dataModel = new ScheduledTimesAvailable();
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

    public function getClient(){
        $data = $this->model->findAll();

        return $this->respond($data);
    }

    public function uniqueClient($id = null){
        $data = $this->model->where(['id'=> $id])->find();
        if ($data ) {
            return $this->respond($data);
        }
       
        return $this->failNotFound('Nenhum dado encontrado com id '.$id); 
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
    //falta testa
    public function getDateClient($client_id = null){

        $data = $this->dataModel->where(['client_id'=>$client_id])->findAll();

        if ($data) {
           return $this->respond($data);
        }
        return $this->failServerError("Horarios não encontrados!");
        
    }

    public function agenda($id =null){
        $data = $this->request->getJSON();
        if ($this->dataModel->where(['id'=>$id])->find()) {
            
            $this->dataModel->update($id,$data);
            return $this->respond($data);
        }
        return $this->failServerError("Horarios não encontrados!");
    }
}
