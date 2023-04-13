from django.urls import path
from .views import ContactListCreate

urlpatterns = [
    path('contact-us/', ContactListCreate.as_view(),name='contact-us'),
]