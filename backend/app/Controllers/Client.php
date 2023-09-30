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
        $client_data = $this->model->select(['saldo'])->where(['id'=>$data->client_id])->find();
        $calc = $client_data[0]['saldo'];
      

        if ($client_data[0]['saldo'] > $data->valor && $this->dataModel->where(['id'=>$id])->find()){
            //reservando horario e atualizando saldo
            $new_saldo = $calc - $data->valor;
            $this->model->where(['id' => $data->client_id])->set(['saldo' => $new_saldo])->update();
            $this->dataModel->where(['id'=>$id])->set(['available'=>false,'client_id'=>$data->client_id])->update();
           
            return $this->response->setJSON($new_saldo);
        }else{
            return $this->failServerError("Saldo Insufucuente!");
        }
        
    }
}
