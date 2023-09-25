<?php



namespace App\Controllers\Api;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use MercadoPago\SDK;
use MercadoPago;
class Pagamento extends BaseController
{
    use ResponseTrait;

    public function pix()
    {
        $data= $this->request->getJSON();
   
        MercadoPago\SDK::setAccessToken(KEY_MP); // Either Production or SandBox AccessToken

        $payment = new MercadoPago\Payment();
        
        $payment->transaction_amount = 141; // valor da transação
        $payment->token = "YOUR_CARD_TOKEN";
        $payment->description = "Ergonomic Silk Shirt";//produto no caso as horas aulas
      //$payment->installments = 1;
        $payment->payment_method_id = "pix";//metodo de pagamento
        $payment->payer = array( // dados do cliente
          "email" => "flavyosilva@email.com",
          "fist_name"=> "Flávio",
          "last_name"=>"Francisco",
          "indentification"=>array(
            "type"=>"CPF",
            "number"=>"12345678910"
          )
        );
        if ($payment->save()) {
            $dados=[
                'qr_code_base64'=>$payment->point_of_interaction->transaction_data,
                'qr_code'=>$payment->point_of_interaction->transaction_data,
                'payment_id'=>$payment->id,
                'produto'=>$data->produto,
            ];
            return $this->respondCreated("horário agendado com sucesso!",$payment->status);
        }else{
            return $this->failServerError("pagamento não realizado!");
        }
        
    
        
       
    }
}

