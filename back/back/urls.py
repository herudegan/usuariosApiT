from django.contrib import admin
from django.urls import path, include
from dados.views import UsuarioViewset, AdminViewset, AdminLogin
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Usuario', UsuarioViewset, basename='/usuario/')
router.register(r'Admin', AdminViewset, basename='/admin/')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', AdminLogin.as_view()),
    path('', include(router.urls)),
]
