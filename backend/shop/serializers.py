from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Applicant, ContactMessage


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'image', 'created']


class ApplicantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicant
        fields = ['id', 'firstname', 'lastname', 'email', 'address', 'phone', 'center', 'course', 'mode', 'created']


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'subject', 'phone', 'message', 'created']


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)


class Meta:
    model = User
    fields = ['username', 'email', 'password']


def create(self, validated_data):
    return User.objects.create_user(**validated_data)