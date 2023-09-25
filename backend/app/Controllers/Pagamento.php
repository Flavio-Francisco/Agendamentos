<?php

namespace App\Controllers;

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
   
       $sdk = new MercadoPago\SDK();
       $sdk->setAccessToken(KEY_MP);

        $payment = new MercadoPago\Payment();
        
        $payment->transaction_amount = 141; // valor da transação
     //  $payment->token = "YOUR_CARD_TOKEN";
        $payment->description = $data->description;//produto no caso as horas aulas
      //$payment->installments = 1;
      $payment->
        $payment->payment_method_id = "pix";//metodo de pagamento
        $payment->payer = array( // dados do cliente
          "email" => $data->email,
          "fist_name"=> $data->fist_name,
          "last_name"=>$data->last_name,
          "indentification"=>array(
            "type"=>$data->last_name,
            "number"=>$data->number
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

