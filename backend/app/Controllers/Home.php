<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(){
      if (session()->has('date')) {
        var_dump(session()->get('date'));
        
      }

    }
    public function test(){

      //  criando sessao e redirecionando para index
        session()->set([
        'date'=> 12/04/1983,
        ,'available'=>true]);

        return redirect()->route('index');
    }
    //da uma olhada na criação de che
}
