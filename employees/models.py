from django.db import models

class Employee(models.Model):
    id_number = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    address = models.TextField()
    email = models.EmailField(unique=True)
    

    def __str__(self):
        return self.name
