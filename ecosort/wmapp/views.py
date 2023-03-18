from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializer import *

# Create your views here.

class TruckViewset(viewsets.ModelViewSet):
    queryset = GarbageTrucks.objects.all()
    serializer_class = TruckSerializer

class EmployeeViewset(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class PickupViewset(viewsets.ModelViewSet):
    queryset = Pickup.objects.all()
    serializer_class = PickupSerializer