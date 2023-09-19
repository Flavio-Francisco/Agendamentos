<?php

namespace App\Controllers;

use App\Models\ScheduledTimesAvailable;
use CodeIgniter\I18n\Time;
use CodeIgniter\RESTful\ResourceController;
use DateTime;

class DateController extends ResourceController
{

  protected $model;
    
    public function __construct(){
        $this->model = new ScheduledTimesAvailable();
    }

    private function isWeekend($date)
    {
        // Obtém o dia da semana (1 a 7, onde 1 é segunda-feira e 7 é domingo)
        $dayOfWeek = (int)$date->format('N');
        
        // Verifica se é sábado (6) ou domingo (7)
        
       
    return $dayOfWeek === 6 || $dayOfWeek === 7;
    }

    public function repeatDates()
    {
        
       
        $data = $this->model->select('date')->where('repeat',true)->get();

        session()->set(['date'=>  $data ]);

       if (session()->has('date')) {
       var_dump(session()->get('date'));
       die();
       }
        $initialDate = $data;
      
        $today = new DateTime();
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
  
       
    
public function rest()
{
    //pegando a data no banco de dados
    $data = $this->model->select('date')->where('repeat', true)->find();
    $dateValue = $data[0]['date'];

    //conveterndo para o formato de hora e data
    $initialDate = new DateTime( $dateValue);
   
    $endOfYear = new DateTime(date('Y-12-31')); // Último dia do ano atual

    $dates = [];

    // Adiciona 7 dias à data inicial até que a data seja posterior ao último dia do ano
    while ( $initialDate  <= $endOfYear) {
        // Pula os finais de semana (sábado e domingo)
        while ($this->isWeekend($initialDate)) {
            $initialDate->modify('+1 day');
        }

        $dates[] = $initialDate->format('d-m-Y');
        $initialDate->modify('+7 days');
    }
        $date = new DateTime();
        $date->format('d-m-Y');


    for($i = 0 ;$i < count($dates) ;$i++){
        
        var_dump($dates[$i]);
        if($date == $dates[$i]){
            
            return $dates[$i];
        }
    }
    //return $this->respond($dates);
 }



 
}


    

