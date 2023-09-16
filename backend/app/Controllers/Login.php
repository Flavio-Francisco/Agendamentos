<?php
namespace App\Controllers;

use App\Models\ClientModel;
use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


class Login extends ResourceController{

use ResponseTrait;

protected $userModel;
protected $clientModel;
public function __construct(){

    $this->userModel =  new UserModel();
    $this->clientModel =  new ClientModel();
}

public function authJwtUser(){
    

    $query = $this->request->getJSON();
    $data = $this->userModel->where('userName',$query->userName )->first();
    $key = $_ENV['KEY'];

    if($data['userName'] == $query->userName&& $data['password'] == $query->password){

    
        $payload =[
            // tempo de expiração
            "exp"=>time() + 100,
            //data de criação
            "iat"=> time(),
            //dados do usuario
            "data" =>$data  
        ];
                // gerando o token
        $jwt = JWT::encode($payload, $key, 'HS256');
        
                //criando uma nova chave com o token
        $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
        
        $response = [
            'token' =>$jwt,
            'user'=> $decoded->data
        ];

        return $this->response->setJSON($response);
    }

    return $this->failServerError("usuario não encontrado!");
    
}
public function authJwtClient(){
    

    $query = $this->request->getJSON();
    $data = $this->clientModel->where('name',$query->name )->first();
    $key = $_ENV['KEY'];

    if($data['name'] == $query->name && $data['password'] == $query->password){

    
        $payload =[
            // tempo de expiração
            "exp"=>time() + 100,
            //data de criação
            "iat"=> time(),
            //dados do usuario
            "data" =>$data  
        ];
                // gerando o token
        $jwt = JWT::encode($payload, $key, 'HS256');
        
                //criando uma nova chave com o token
        $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
        
        $response = [
            'token' =>$jwt,
            'user'=> $decoded->data
        ];

        return $this->response->setJSON($response);
    }

    return $this->failServerError("usuario não encontrado!");
    
}


}

?>