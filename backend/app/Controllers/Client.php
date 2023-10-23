<?php

namespace App\Controllers;


use App\Models\ClientModel;
use App\Models\ScheduledTimesAvailable;
use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class Client extends ResourceController
{
    use ResponseTrait;

    protected $model;
    protected $dataModel;
    protected $userModel;

    public function __construct(){

        $this->dataModel = new ScheduledTimesAvailable();
        $this->model = new ClientModel(); 
        $this->userModel= new UserModel();
    }

    public function createClient()
    {
    
        $data = $this->request->getJSON();
       
        if ( $this->model->save($data)) {
            
            return $this->response->setJSON("usuário criado 00 com sucesso!");
        }
        return $this->response->setJSON("Algo deu errado!");

    }

    public function getClient(){
        $data = $this->model->findAll();

        return $this->respond($data);
    }

    public function uniqueClient($id = null){
        $data = $this->model->where(['id'=> $id])->find();
        
        if ($data) {
         
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
    public function avatar($id = null) {
        $request = \Config\Services::request();
        $avatarBlob = $request->getJSON('avatar'); // Obtém o objeto Blob do JSON
    
        if ($avatarBlob) {
            // Extrair dados relevantes do Blob
            $blobId = $avatarBlob->_data->blobId;
            $size = $avatarBlob->_data->size;
            $type = $avatarBlob->_data->type;
    
            // Chame o método extractImageData para obter os dados binários da imagem
            $imageData = $this->extractImageData($blobId);
    
            if ($imageData) {
                // Insira os dados da imagem no banco de dados
                $this->model->insert([
                    'user_id' => $id, // Suponha que você tenha uma coluna 'user_id' para associar a imagem ao usuário
                    'image_data' => $imageData, // Substitua 'image_data' pelo nome da coluna que armazena os dados binários da imagem
                ]);
    
                $response = [
                    'status'   => 200,
                    'error'    => null,
                    'messages' => [
                        'success' => 'Imagem inserida com sucesso!!'
                    ]
                ];
    
                return $this->respondCreated($response);
            }
        }
    }
    
    private function extractImageData($blobId) {
        // Aqui você deve implementar a lógica para extrair os dados binários da imagem
        // com base no blobId fornecido.
    
        // Exemplo hipotético: supondo que você tenha uma tabela "blobs" no banco de dados
        // onde os dados binários da imagem são armazenados.
        // Você pode usar o CodeIgniter Query Builder para buscar os dados com base no blobId.
    
        $db = \Config\Database::connect();
        $query = $db->table('aluno')->where('avatar', $blobId)->get();
    
        if ($query->getResult()) {
            // Suponha que 'image_data' seja o nome da coluna que armazena os dados binários da imagem.
            return $query->getRow()->image_data;
        }
    
        return null;
    }
    
}