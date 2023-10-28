<?php

namespace App\Controllers;



use App\Models\Assessment;
use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class User extends ResourceController
{
    use ResponseTrait;

    protected $model;
    protected $ratingModel ;
    public function __construct(){

        $this->model = new UserModel(); 
        $this->ratingModel = new Assessment();
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
    public function uniqueUser($id = null){
        $data = $this->model->where(['id'=> $id])->find();
        if ($data ) {
            return $this->respond($data);
        }
       
        return $this->failNotFound('Nenhum dado encontrado com id '.$id); 
    }

    public function updateUser($id_prof = null){

        $data = $this->request->getJSON();

        $starBody=[
            'id_prof'=> $id_prof,
            'star'=> $data->star
        ];
      

       if($this->model->find($id_prof)){
   

           if ( $this->ratingModel->save( $starBody)) {

              $totalStars = 0;

              $ratings = $this->ratingModel->getRatingsById($id_prof);

              foreach ($ratings as $rating) {
               // Converte o valor de "star" para um número antes de somar
                 $totalStars += (int) $rating['star'];
             }
                  
                 $flaot = $totalStars / count($ratings);
                 $average = round($flaot);
                

                  $star = [
                     'star' => $average
                 ];
                
                 if ($star) {
                    $result = $this->model->where('id', $id_prof)->set($star)->first();
                    
                    return $this->response->setJSON($result);
                 }
                      
            } else {
                return json_encode(['error' => 'Usuário não encontrado']);
          }

       }
      return $this->failNotFound('Nenhum dado encontrado com id '.$id_prof); 
     
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
    public function matte($id = null){

        
        $query = $this->model->where(['teacher'=>true, 'matte_id'=>$id])->findAll();
        return $this->respond($query);
    }
}
