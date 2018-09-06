from rest_framework import serializers
from example.models import ProfileModel

class ProfileSerializer (serializers.ModelSerializer):
    class Meta:
        model = ProfileModel
        fields = ('profile_id', 'profile_dateCreated')