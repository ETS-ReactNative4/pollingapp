from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^profile/$', views.ListProfile.as_view()),
    url(r'^post/$', views.ListPost.as_view()),
    url(r'^comment/$', views.ListComment.as_view()),
    url(r'^profile/(?P<pk>[\w.@+-]+)/$', views.DetailProfile.as_view()),
    url(r'^post/(?P<pk>[0-9]+)/$', views.DetailPost.as_view()),
    url(r'^comment/(?P<pk>[0-9]+)/$', views.DetailComment.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)