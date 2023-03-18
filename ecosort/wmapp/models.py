from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class GarbageTrucks(models.Model):
    truck_id = models.BigAutoField(primary_key=True)
    number_plate = models.CharField(max_length=15)
    max_capacity = models.CharField(max_length=10)
    truck_active = models.BooleanField(default=False)

    def __str__(self):
        return self.number_plate


class Employee(models.Model):
    emp_id = models.BigAutoField(primary_key=True)
    emp_name = models.CharField(max_length=50)
    emp_salary = models.CharField(max_length=10)
    emp_present = models.BooleanField(default=False)

    def __str__(self):
        return self.emp_name

class Pickup(models.Model):
    pickup_id = models.BigAutoField(primary_key=True)
    # user_fk = models.ForeignKey(User, on_delete=models.CASCADE, to_field="username")
    location = models.CharField(max_length=200)
    image = models.CharField(max_length=1000)

    def __str__(self):
        return self.location