<?php

namespace App\Models;

use CodeIgniter\Model;

class Assessment extends Model
{
    protected $table            = 'assessment';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'id',
        'star',
        'id_prof',
    ];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];
    public function getRatingsById($id)
    {
        return $this->select('star')->where('id_prof', $id)->findAll(); // Supondo que cada registro na tabela tenha uma coluna chamada 'username' que representa o nome do usuário e outra coluna chamada 'stars' que contém a quantidade de estrelas atribuídas.
    }
}
