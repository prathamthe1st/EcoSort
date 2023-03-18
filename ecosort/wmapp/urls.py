from django.contrib import admin
from .views import *
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'truck', TruckViewset)
router.register(r'emp', EmployeeViewset)
router.register(r'pickup', PickupViewset)

urlpatterns = [
    path('', include(router.urls)),
]