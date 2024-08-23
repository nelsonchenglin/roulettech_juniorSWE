from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    RetrieveUpdateDestroyAPIView,
    CreateAPIView
)
from .models import Product
from .serializer import ProductSerializer

class CreateBeverageAPIView(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class RetrieveUpdateDestroyBeverageAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class AlcoholicBeveragesAPIView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(alcohol=True)
    

class NonAlcoholicBeveragesAPIView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(alcohol=False)
