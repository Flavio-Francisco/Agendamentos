<?php

namespace App\Filters;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class UserFilter implements FilterInterface
{

    use ResponseTrait;

    public function before(RequestInterface $request, $arguments = null)
    {
        $key = $_ENV['KEY'];

        // Verifique se o token está presente no cabeçalho da solicitação
        $token = $request->getServer('HTTP_AUTHORIZATION');

        if (!$token) {
            
            $response = service('response');
            $data = ['error' => 'Token não fornecido'];
            return $response->setJSON($data)->setStatusCode(401);
        }

        try {
            // Verifique o token JWT
            $decoded = JWT::decode($token, new Key($key, 'HS256'));

            // Mensagem de token Expirado
        } catch ( ExpiredException $e) {
            $response = service('response');
            $data = ['error' => 'Token expirado'];
            return $response->setJSON($data)->setStatusCode(401);

            // Mensagem de token invalido
        } catch (\Exception $e) {
            $response = service('response');
            $data = ['error' => 'Token inválido'];
            return $response->setJSON($data)->setStatusCode(401);
        }

      $responseData = [
            'token' => $token, // Adicione o token JWT à resposta
            'user' => $decoded->data // Adicione os dados do usuário à resposta (supondo que estão em $decoded->data)
        ];

        return $this->respond($responseData);
    }

    /**
     * Allows After filters to inspect and modify the response
     * object as needed. This method does not allow any way
     * to stop execution of other after filters, short of
     * throwing an Exception or Error.
     *
     * @param RequestInterface  $request
     * @param ResponseInterface $response
     * @param array|null        $arguments
     *
     * @return mixed
     */
    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        //
    }
}
