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
$routes->setDefaultController('User');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
// $routes->setAutoRoute(false);


/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.

              
$routes->post('/create','User::create'/*,['filter' => JWTAuthMiddleware::class]*/); 
$routes->patch('/update/(:any)','User::updateUser/$1');
$routes->delete('/delete/(:any)','User::delete/$1');
$routes->get('/get','User::get'); 
$routes->get('/uniqueUser/(:any)','User::uniqueUser/$1');

//horarios disponiveis

$routes->post('/createtime/(:any)','TimesAvailable::createTime/$1');
$routes->get('/getDate/(:any)','TimesAvailable::getDate/$1');
$routes->delete('/deleteDate/(:any)','TimesAvailable::deleteDate/$1');
$routes->patch('/updateDate/(:any)','TimesAvailable::updateDate/$1');

//login

$routes->post('/login', 'Login::authJwt');

//clientes

$routes->post('/createClient','Client::createClient'); 
$routes->get('/getClient','Client::getClient');
$routes->get('/uniqueClient/(:any)','Client::uniqueClient/$1');
$routes->delete('/deleteClient/(:any)','Client::deleteClient/$1');
$routes->patch('/agenda/(:any)','Client::agenda/$1');
$routes->get('/getDateClient/(:any)','Client::getDateClient/$1');
 
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
