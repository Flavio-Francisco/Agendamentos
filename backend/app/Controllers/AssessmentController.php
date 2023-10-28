<?php

namespace App\Controllers;

use App\Models\Assessment;
use CodeIgniter\RESTful\ResourceController;

class AssessmentController extends ResourceController
{
    protected $ratingModel; 
    public function __construct()
    {
        $this->ratingModel = new Assessment();
    }

    public function stars($id = null)
    {
        $ratings = $this->ratingModel->getRatingsById($id); // Implemente o método apropriado no modelo.

         if (!empty($ratings)) {
            $totalStars = 0;

            foreach ($ratings as $rating) {
                // Converte o valor de "star" para um número antes de somar
                $totalStars += (int) $rating['star'];
            }
               
          $average = $totalStars / count($ratings);

              return $this->response->setJSON($average);
         } else {
             return json_encode(['error' => 'Usuário não encontrado']);
          }
    }
}
