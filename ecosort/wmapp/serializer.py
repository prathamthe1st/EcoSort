from rest_framework import serializers
from .models import *

class TruckSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GarbageTrucks
        fields = '__all__'



class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'


class PickupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pickup
        fields = '__all__'