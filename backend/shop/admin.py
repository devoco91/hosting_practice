from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Product, Applicant, ContactMessage


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','name','price','created')
    search_fields = ('name',)


@admin.register(Applicant)
class ApplicantAdmin(admin.ModelAdmin):
    list_display = ('id','firstname','lastname','email','phone','center','course','mode','created')
    search_fields = ('firstname','lastname','email')


@admin.register(ContactMessage)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('id','name','email','subject','created')
    search_fields = ('name','email','subject')