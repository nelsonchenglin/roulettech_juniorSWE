from django.urls import path
from .views import (
    CreateBeverageAPIView,
    RetrieveUpdateBeverageAPIView,
    NonAlcoholicBeveragesAPIView,
    AlcoholicBeveragesAPIView
)


urlpatterns = [
    path('products/', CreateBeverageAPIView.as_view(), name = 'bevs_create'),
    path('products/<pk>/', RetrieveUpdateBeverageAPIView.as_view(), name = 'bevs_retrieve_update'),
    path('products/non-alcoholic/', NonAlcoholicBeveragesAPIView.as_view(), name = 'non_alcoholic_bevs'),
    path('products/alcoholic/', AlcoholicBeveragesAPIView.as_view(), name = 'alcoholic_bevs')

]