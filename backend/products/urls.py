from django.urls import path
from .views import (
    CreateBeverageAPIView,
    RetrieveUpdateDestroyBeverageAPIView,
    NonAlcoholicBeveragesAPIView,
    AlcoholicBeveragesAPIView,
)

urlpatterns = [
    path('products/non-alcohol/', NonAlcoholicBeveragesAPIView.as_view(), name='non_alcoholic_bevs'),
    path('products/alcohol/', AlcoholicBeveragesAPIView.as_view(), name='alcoholic_bevs'),
    path('products/<pk>/', RetrieveUpdateDestroyBeverageAPIView.as_view(), name='bevs_retrieve_update'),  # Specific with dynamic segment
    path('products/', CreateBeverageAPIView.as_view(), name='bevs_create'),  # Least specific
]
