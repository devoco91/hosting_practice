from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, ApplicantCreateView, ContactCreateView, RegisterView


router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')


urlpatterns = [
path('', include(router.urls)),
path('applicants/', ApplicantCreateView.as_view(), name='applicant-create'),
path('contact/', ContactCreateView.as_view(), name='contact-create'),
path('auth/register/', RegisterView.as_view(), name='register'),
]