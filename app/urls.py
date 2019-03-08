from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index/$', views.index, name='index'),
    url(r'^market/$', views.market, name='markets'),
    url(r'^market/(?P<childid>\d+)/(?P<sortid>\d+)/$', views.market, name='market'),
    url(r'^cart/$', views.cart, name='cart'),
    url(r'^mine/$', views.mine, name='mine')
]
