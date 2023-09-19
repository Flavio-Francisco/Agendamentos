<?php

namespace App\Models;

use CodeIgniter\Model;

class ScheduledTimesAvailable extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'available';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'id',
        'date',
        'times',
        'start_time',
        'end_time',
        'available',
        'repeat',
        'prof_id',
        'client_id'
    ];
     //relacionamento entre as tabelas
     public function user()
     {
         return $this->belongsTo(UserModel::class, 'prof_id');
     }
     public function client()
     {
         return $this->belongsTo(UserModel::class, 'client_id');
     }
 

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
}
