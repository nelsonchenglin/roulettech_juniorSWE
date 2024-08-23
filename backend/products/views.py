from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    RetrieveUpdateAPIView,
    CreateAPIView
)
from .models import Product
from .serializer import ProductSerializer

class CreateBeverageAPIView(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class RetrieveUpdateBeverageAPIView(RetrieveUpdateAPIView):
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
       
class DrinksPricedAt16APIView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()