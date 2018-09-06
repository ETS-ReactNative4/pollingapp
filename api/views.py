from rest_framework import generics

from example.models import ProfileModel
from .serializers import ProfileSerializer


class ListProfile(generics.ListCreateAPIView):
    queryset = ProfileModel.objects.all()
    serializer_class = ProfileSerializer


class DetailProfile(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProfileModel.objects.all()
    serializer_class = ProfileSerializer