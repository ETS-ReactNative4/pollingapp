from rest_framework import serializers
from datetime import datetime
import uuid
from example.models import ProfileModel, PostModel, CommentModel

class ProfileSerializer (serializers.Serializer):
        profile_id = serializers.CharField()
        profile_dateCreated = serializers.DateTimeField(default=datetime.now)

        def create(self, validated_data):
            return ProfileModel.objects.create(**validated_data)

class PostSerializer (serializers.Serializer):
        post_id = serializers.CharField(default=uuid.uuid4)
        post_profile = serializers.CharField()
        post_title = serializers.CharField()
        post_content = serializers.CharField()
        post_tags = serializers.CharField()
        post_dateCreated = serializers.DateTimeField(default=datetime.now)
        post_upvotes = serializers.IntegerField(default=0)
        post_downvotes = serializers.IntegerField(default=0)

        def create(self, validated_data):
            return PostModel.objects.create(**validated_data)

class CommentSerializer (serializers.Serializer):
        comment_id = serializers.CharField(default=uuid.uuid4)
        comment_post_id = serializers.CharField()
        comment_profile = serializers.CharField()
        comment_content = serializers.CharField()
        comment_dateCreated = serializers.DateTimeField(default=datetime.now)
        comment_upvotes = serializers.IntegerField(default=0)
        comment_downvotes = serializers.IntegerField(default=0)

        def create(self, validated_data):
            return CommentModel.objects.create(**validated_data)
