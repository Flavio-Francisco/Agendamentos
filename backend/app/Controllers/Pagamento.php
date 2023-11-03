<?php

namespace App\Controllers;
use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\Exceptions\MPApiException;
use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use MercadoPago\MercadoPagoConfig;

class Pagamento extends BaseController
{
    use ResponseTrait;

    public function pix()
    {
        $data= $this->request->getJSON();
       return $this->response->setJSON($data);
    }

public function get($payment_id=null){
  MercadoPagoConfig::setAccessToken(KEY_MP);

  $client = new PaymentClient();

  var_dump($client->get($payment_id));

}

}