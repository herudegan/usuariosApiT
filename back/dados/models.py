from django.db import models
from django.core.validators import RegexValidator

class Usuario(models.Model):
    nome = models.CharField(max_length=60)
    endereco = models.CharField(max_length=100)
    telefone = models.BigIntegerField()
    cpf = models.BigIntegerField()

class Admin(models.Model):
    codigo = models.CharField(max_length=10)
    senha = models.CharField(max_length=50)