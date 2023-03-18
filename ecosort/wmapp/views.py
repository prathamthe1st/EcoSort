from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializer import *
from django.db.models import Count
from django.http import JsonResponse
from rest_framework.decorators import api_view

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

@api_view(['GET'])
def statistics(request):
    pickup_count = Pickup.objects.all().count()
    employee_count = Employee.objects.all().count()
    truck_count = GarbageTrucks.objects.all().count()
    data = {
        'pickup_count': pickup_count,
        'employee_count': employee_count,
        'truck_count': truck_count
    }
    return JsonResponse(data)