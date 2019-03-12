from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index/$', views.index, name='index'),
    url(r'^market/$', views.market, name='markets'),
    url(r'^market/(\d+)/(\d+)/$', views.market, name='market'),
    url(r'^cart/$', views.cart, name='cart'),
    url(r'^mine/$', views.mine, name='mine'),
    url(r'^register/$', views.register, name='register'),
    url(r'^login/$',views.login,name='login'),
    url(r'^logout/$',views.logout,name='logout'),
    url(r'^addcart/$',views.addcart,name='addcart'),
    url(r'^sucart/$',views.sucart,name='sucart'),
    url(r'^changecartselect/$',views.changecartselect,name='changecartselect'),
    url(r'^changecartall/$',views.changecartall,name='changecartall'),
]
