from django.contrib import admin
from dados.models import Usuario, Admin

class Usuarios(admin.ModelAdmin):
    list_display = ('id', 'nome', 'endereco', 'telefone', 'cpf')
    list_display_links = ('id', 'nome', 'endereco', 'telefone', 'cpf')
    search_fields = ('id', 'nome', 'endereco', 'telefone', 'cpf',)

class Admins(admin.ModelAdmin):
    list_display = ('id', 'codigo', 'senha')
    list_display_links = ('id', 'codigo', 'senha')
    search_fields = ('id', 'codigo', 'senha',)

admin.site.register(Usuario, Usuarios)
admin.site.register(Admin, Admins)
