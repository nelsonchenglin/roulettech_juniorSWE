from django.urls import path
from .views import (
    CreateBeverageAPIView,
    RetrieveUpdateBeverageAPIView,
    NonAlcoholicBeveragesAPIView,
    AlcoholicBeveragesAPIView,
)

urlpatterns = [
    path('products/non-alcohol/', NonAlcoholicBeveragesAPIView.as_view(), name='non_alcoholic_bevs'),
    path('products/alcohol/', AlcoholicBeveragesAPIView.as_view(), name='alcoholic_bevs'),
    path('products/<pk>/', RetrieveUpdateBeverageAPIView.as_view(), name='bevs_retrieve_update'),  # Specific with dynamic segment
    path('products/', CreateBeverageAPIView.as_view(), name='bevs_create'),  # Least specific
]
