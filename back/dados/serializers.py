from rest_framework import serializers
from dados.models import Usuario, Admin

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'nome', 'endereco', 'telefone', 'cpf')

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('id', 'codigo', 'senha')