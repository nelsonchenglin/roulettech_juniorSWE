from django.urls import path
from .views import (
    ListProductAPIView, 
    CreateProductAPIView, 
    RetrieveProductAPIView,
    DestroyProductAPIView
)


urlpatterns = [
    path('products/', ListProductAPIView.as_view(), name = 'products_list'),
    path('products/create/', CreateProductAPIView.as_view(), name = 'products_create'),
    path('products/retrieve/<pk>/', RetrieveProductAPIView.as_view(), name = 'products_create'),
    path('products/destroy/<pk>/', DestroyProductAPIView.as_view(), name='products_destroy'),
]