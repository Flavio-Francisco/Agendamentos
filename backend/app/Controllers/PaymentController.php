<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use MercadoPago\SDK;
use MercadoPago\Payment;
use MercadoPago\Payer;

class PaymentController extends BaseController
{
    use ResponseTrait;

    public function receivePayment()
    {
        $data = $this->request->getJSON();
        // Chave do SDK do Mercado Pago
        SDK::setAccessToken(KEY_MP);
   

        // criação de um <pagamento></pagamento>
        $payment = new Payment();
        $payer = new Payer();
            
        $payment->transaction_amount = $data->transaction_amount;
        $payment->token = $data->token;
        $payment->description = $data->description;
        $payment->payment_method_id = $data->payment_method_id;
        $payment->installments = (int)$data->installments;
        $payment->issuer_id =$data->issuer_id;

        $payer->email =$data->email;
        $payer ->identification = [
           "type" => $data->type,
           "number"=> $data->fist_name,
            
        ];
        $payment->payer =$payer;

        //processamento do pagamento
        if ($payment->save()) {
            // Pagamento bem-sucedido
            $response = array(
                'status' => $payment->status,
                'status_detail' => $payment->status_detail,
                'id' => $payment->id
             );
            return $this->respond($response);
        } else {
            // Falha no pagamento
            return $this->failServerError('Pagamento não realizado!');
        }
    }
}
