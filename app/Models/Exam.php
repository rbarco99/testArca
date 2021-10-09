<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    use HasFactory;
    protected $fillable = [
        'titulo',
        'descripcion',
        'tiempo',
        'intentos',
        'preguntas'
        
    ];
    protected $casts =[
        'preguntas' => 'array'
    ];
}
