<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use MercadoPago\SDK;
use MercadoPago\Payment;

class PaymentController extends BaseController
{
    use ResponseTrait;

    public function receivePayment()
    {
        $data = $this->request->getJSON();
        // Chave do SDK do Mercado Pago
        SDK::setAccessToken(KEY_MP);
   

        // criação de um pagamento
        $payment = new Payment();
        $payment->transaction_amount = $data->transaction_amount;
        $payment->description = $data->description;
        $payment->payment_method_id = $data->payment_method_id;
        $payment->payer = [
            'email' => $data->email,
            'first_name' => $data->fist_name,
            'last_name' => $data->last_name,
        ];

        //processamento do pagamento
        if ($payment->save()) {
            // Pagamento bem-sucedido
            return $this->respondCreated('Pagamento realizado com sucesso!', $payment->status);
        } else {
            // Falha no pagamento
            return $this->failServerError('Pagamento não realizado!');
        }
    }
}
