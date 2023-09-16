<?php
namespace App\Controllers;


use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


class Login extends ResourceController{

use ResponseTrait;

protected $model;
public function __construct(){

    $this->model =  new UserModel();
    
}

public function authJwt(){
    

    $query = $this->request->getJSON();
    $data = $this->model->where('userName',$query->userName )->first();
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


}

?>