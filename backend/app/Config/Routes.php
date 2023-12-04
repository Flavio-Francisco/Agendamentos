<?php

namespace Config;


// Create a new instance of our RouteCollection class.
$routes = Services::routes();

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
// $routes->setAutoRoute(false);
$routes->get('/test','Home::index'); 

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.

              
$routes->post('/create','User::create',['filter' => 'jwt']); 
$routes->patch('/update/(:any)','User::updateUser/$1'/*,['filter' => 'jwt']*/);
$routes->delete('/delete/(:any)','User::delete/$1',['filter' => 'jwt']);
$routes->get('/get','User::get'/*,['filter' => 'jwt']*/); 
$routes->get('/uniqueUser/(:any)','User::uniqueUser/$1'/*,['filter' => 'jwt']*/);

//horarios disponiveis

$routes->post('/createtime/(:any)','TimesAvailable::createTime/$1'/*,['filter' => 'jwt']*/);
$routes->get('/getDate/(:any)','TimesAvailable::getDate/$1');
$routes->delete('/deleteDate/(:any)','TimesAvailable::deleteDate/$1'/*,['filter' => 'jwt']*/);
$routes->patch('/updateDate/(:any)','TimesAvailable::updateDate/$1'/*,['filter' => 'jwt']*/);

//login

$routes->post('/loginuser', 'Login::authJwtUser');
$routes->post('/loginclient', 'Login::authJwtClient');

//clientes

$routes->post('/createClient','Client::createClient'/*,['filter' => 'jwt']*/); 
$routes->get('/getClient','Client::getClient'/*,['filter' => 'jwt']*/);
$routes->get('/uniqueClient/(:any)','Client::uniqueClient/$1'/*,['filter' => 'jwt']*/);
$routes->delete('/deleteClient/(:any)','Client::deleteClient/$1'/*,['filter' => 'jwt']*/);
$routes->patch('/agenda/(:any)','Client::agenda/$1'/*,['filter' => 'jwt']*/);
$routes->get('/getDateClient/(:any)','Client::getDateClient/$1');
$routes->patch('/updateClient/(:any)','Client::updateClient/$1'/*,['filter' => 'jwt']*/);
$routes->patch('/avatar/(:any)','Client::avatar/$1'/*,['filter' => 'jwt']*/);


//materia
$routes->get('/matte/(:any)','User::matte/$1'); 

// datas recoretes

$routes->get('/rest', 'DateController::rest');

//media de estrelas

$routes->get('/star/(:any)','AssessmentController::stars/$1');

// mercado pago

$routes->post('payment/receive', 'PaymentController::receivePayment');
$routes->post('payment/pix','Pagamento::pix');
$routes->post('payment/preference','Pagamento::preference');
$routes->get('test','PaymentController::index'); 
$routes->get('/webhook/mercadopago','Pagamento::pix'); 
$routes->post('/getpix','Pagamento::get'); 
/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
