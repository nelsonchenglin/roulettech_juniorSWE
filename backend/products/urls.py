from django.urls import path
from .views import (
    ListCreateProductAPIView,
    RetrieveUpdateDestroyProductAPIView
)


urlpatterns = [
    path('products/', ListCreateProductAPIView.as_view(), name = 'products_list_create'),
    path('products/<pk>/', RetrieveUpdateDestroyProductAPIView.as_view(), name = 'products_retrieve_update_destroy'),
]