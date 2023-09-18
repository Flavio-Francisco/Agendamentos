<?php

namespace App\Controllers;

use App\Models\ScheduledTimesAvailable;
use CodeIgniter\RESTful\ResourceController;

class DateController extends ResourceController
{

    private function isWeekend($date)
    {
        // Obtém o dia da semana (1 a 7, onde 1 é segunda-feira e 7 é domingo)
        $dayOfWeek = (int)$date->format('N');
        
        // Verifica se é sábado (6) ou domingo (7)
        
       
    return $dayOfWeek === 6 || $dayOfWeek === 7;
    }

    public function repeatDates()
    {
        $data = $this->request->getJSON();
        $initialDate = new \DateTime($data->date);
      
        $today = new \DateTime();
           // Calcula a data por tempo variavél 
        $initialDate->modify('+' . $data->day . ' day');

     if ($initialDate < $today) {
            // Se for data retroativa, avança para a próxima semana
            $initialDate->modify('next monday');
        }
      if ($this->isWeekend($initialDate)) {
            // Se for um final de semana, avança para a próxima semana
            $initialDate->modify('next monday');
        }
       

        return $this->respond($initialDate->format('d-m-Y'));
    }

       
    
public function repeatWeeklyUntilEndOfYear($prof_id = null)
{
    $model = new ScheduledTimesAvailable();
    $data = $this->request->getJSON();
    $initialDate = new \DateTime($data->date);

   
    $endOfYear = new \DateTime(date('Y-12-31')); // Último dia do ano atual

    $dates = [];

    // Adiciona 7 dias à data inicial até que a data seja posterior ao último dia do ano
    while ($initialDate <= $endOfYear) {
        // Pula os finais de semana (sábado e domingo)
        while ($this->isWeekend($initialDate)) {
            $initialDate->modify('+1 day');
        }

        $dates[] = $initialDate->format('d-m-Y');
        $initialDate->modify('+7 days');
    }
    return $this->respond($dates);
 }
}