from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Product, Applicant, ContactMessage
from .serializers import (
ProductSerializer,
ApplicantSerializer,
ContactSerializer,
RegisterSerializer,
)


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.order_by('-created')
    serializer_class = ProductSerializer


class ApplicantCreateView(generics.CreateAPIView):
    queryset = Applicant.objects.all()
    serializer_class = ApplicantSerializer


class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


def create(self, request, *args, **kwargs):
    response = super().create(request, *args, **kwargs)
    data = response.data
    return Response({ 'username': data['username'], 'email': data.get('email','') })