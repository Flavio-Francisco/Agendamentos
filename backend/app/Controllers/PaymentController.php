<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use MercadoPago\SDK;
use MercadoPago\Payment;
use MercadoPago\Payer;
use MercadoPago\Item;
use MercadoPago\Preference;

class PaymentController extends BaseController
{
    use ResponseTrait;
 

// credito ou debito
    public function receivePayment()
    {
        $contents = json_decode(file_get_contents('php://input'), true);
       
        // Chave do SDK do Mercado Pago
        SDK::setAccessToken(KEY_MP);
   

        // criando pagamento
        $payment = new Payment();
        $payer = new Payer();
            
        $payment->transaction_amount = $contents['transaction_amount'];
        $payment->token = $contents['token'];
        $payment->installments = $contents['installments'];
        $payment->payment_method_id = $contents['payment_method_id'];
        $payment->issuer_id = $contents['issuer_id'];
       
        $payer->email = $contents['payer']['email'];
        $payer->identification = array(
            "type" => $contents['payer']['identification']['type'],
            "number" => $contents['payer']['identification']['number']
        );
        $payment->payer = $payer;
        $payment->save();
        $response = array(
            'status' => $payment->status,
            'status_detail' => $payment->status_detail,
            'id' => $payment->id
        );
        echo json_encode($response);
    }
    public function preference()
    {
       SDK::configure([KEY_MP => KEY_MP]);
       SDK::setAccessToken(KEY_MP);
    $preference = new Preference();

    $item = new Item();
    $item->title = 'Aula';
    $item->quantity = 1;
    $item->unit_price = 100.00;
    
    $payer = new Payer();
    $payer->email = "flavyoSilva@hotmail.com";

    $preference->items = array($item);
    $preference->save();

    
    }
    //Transferência Bancária
    public function receivePaymentTraf()
    {
        $payment = new Payment();

        $payment->transaction_amount = 100;
        $payment->description = "aula";
        $payment->payment_method_id = "pix";
        $payment->payer = array(
            "email" => "flavyosilva@hotmail.com",
            "first_name" => "Flávio",
            "last_name" => "Francisco",
            "identification" => array(
                "type" => "CPF",
                "number" => "04678277455"
            ),
            "address"=>  array(
                "zip_code" => "06233200",
                "street_name" => "Av. das Nações Unidas",
                "street_number" => "3003",
                "neighborhood" => "Bonfim",
                "city" => "Osasco",
                "federal_unit" => "SP"
            )
          );
    
        $payment->save();
    }

    public function paymentpix(){
        SDK::configure([KEY_MP => KEY_MP]);
        $preference = new Preference();
        $item = new Item();

        $item->title = "Aulas";
        $item->quantity = 1;
        $item->currency_id = "BRL";
        $item->unit_price = 100;

        $payer = new Payer();
        $payer->email = "flavyosilva@hotmail.com";
      
        $preference->items = array($item);
        $preference->payer = $payer;
        $preference->save();

    }
}
