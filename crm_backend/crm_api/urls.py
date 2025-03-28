from django.urls import path
from .views import (
    login_user,
    logout_user,
    user_create_list,
    user_detail,
    account_list_create,
    account_detail,
    contact_detail,
    contact_list_create,
)

urlpatterns = [
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
    path('users/', user_create_list, name='users-list'),
    path('users/<str:username>/', user_detail, name='user-detail'),
    path('accounts/', account_list_create, name='account-list-create'),
    path('accounts/<int:account_id>/', account_detail, name='account-detail'),
    path('contacts/', contact_list_create, name='contact-list-create'),
    path('contacts/<int:contact_id>/', contact_detail, name='contact-detail'),
]