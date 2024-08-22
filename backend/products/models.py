from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length = 200, unique = True)
    description = models.TextField(blank = True)
    price = models.DecimalField(max_digits = 10, decimal_places = 2)
    alcohol = models.BooleanField(default = False)

    def __str__(self):
        return f"name: {self.name} ~ description: {self.description} ~ price: {self.price} ~ Alcoholic Drink: {self.alcohol}"
    
