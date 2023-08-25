from rest_framework import viewsets, generics, status
from dados.models import Usuario, Admin
from dados.serializers import UsuarioSerializer, AdminSerializer
from rest_framework.response import Response

class UsuarioViewset(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        cpf = request.data['cpf']
        my_str = str(cpf)
        query = self.queryset.filter(cpf = cpf)

        if(query.first() is not None):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'erro':'CPF já existe.'})
        elif(len(my_str) == 11):
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(status=status.HTTP_201_CREATED, data={'Conta criada.'})
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data='Erro: CPF inválido')

    def list(self, request):
        self.queryset = Usuario.objects.all()
        serializer = UsuarioSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def delete(self, request, id=None):
        usuario = Usuario.objects.filter(id=id)
        usuario.delete
        return Response(usuario.data)

class AdminViewset(viewsets.ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer

class AdminLogin(generics.CreateAPIView):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer

    def create(self, request, *args, **kwargs):
        codigo = request.data['codigo']
        senha = request.data['senha']
        query = self.queryset.filter(codigo = codigo, senha = senha)
        
        if (query.first() is not None):
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED, data={'erro':'Usuário ou senha inválidos'})