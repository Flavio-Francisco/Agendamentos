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
        $data = $this->request->getJSON();
        $initialDate = new DateTime($data->date);
      
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

       
    
public function repeatWeeklyUntilEndOfYear($prof_id = null)
{
   
    $data = $this->request->getJSON();
    $initialDate = new DateTime($data->date);

   
    $endOfYear = new DateTime(date('Y-12-31')); // Último dia do ano atual

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



 
 public function rest(){
         
    $session = session();
    
            
    
    // Verifique se a data inicial já está armazenada na sessão
            if (!$session->has('data_inicial')) {
                // Se não estiver armazenada, obtenha a data inicial do banco de dados
                
                
    $data_inicial = $this->obterDataInicialDoBancoDeDados(); // Substitua pela sua lógica
                
                              
    $session->set('data_inicial', $data_inicial);
            } 
           
    else {
                // Se a data inicial estiver armazenada, calcule a próxima data para exibição
                
               
    $data_inicial = new DateTime($session->get('data_inicial'));
                
                
    $data_inicial->modify('+7 days'); // Adicione 7 dias para a próxima semana
                $session->set('data_inicial', $data_inicial->format('Y-m-d'));
            }
           
    // Exiba a data para o usuário
            
            
    $dataParaExibir = $session->get('data_inicial');
    
            
    
    // Faça algo com $dataParaExibir, como passá-lo para a view ou retorná-lo como resposta JSON
            return $this->response->setJSON(['next_date' => $dataParaExibir]);
        }
    
        
        
    
       
    // Função para obter a data inicial do banco de dados (substitua conforme necessário)
        private function obterDataInicialDoBancoDeDados()
        {
            
           
    // Substitua isso com sua lógica para obter a data inicial do banco de dados
            return '2023-01-01'; // Exemplo de data inicial
        }
    }

