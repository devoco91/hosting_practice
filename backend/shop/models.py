from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)


def __str__(self):
    return self.name


class Applicant(models.Model):
    firstname = models.CharField(max_length=80)
    lastname = models.CharField(max_length=80)
    email = models.EmailField()
    address = models.CharField(max_length=255, blank=True)
    phone = models.CharField(max_length=30)
    center = models.CharField(max_length=80)
    course = models.CharField(max_length=120)
    mode = models.CharField(max_length=40)
    created = models.DateTimeField(auto_now_add=True)


def __str__(self):
    return f"{self.firstname} {self.lastname}"


class ContactMessage(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    subject = models.CharField(max_length=160, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)


def __str__(self):
    return f"{self.name} - {self.subject or 'No subject'}"