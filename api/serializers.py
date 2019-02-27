from rest_framework import serializers
from datetime import datetime
import uuid
from example.models import PostModel, CommentModel, TagModel, VoteModel

class PostSerializer (serializers.Serializer):
        post_id = serializers.CharField(default=uuid.uuid4)
        post_profile = serializers.CharField()
        post_title = serializers.CharField()
        post_choice_one = serializers.CharField()
        post_choice_two = serializers.CharField()
        post_choice_three = serializers.CharField(required=False)
        post_choice_four = serializers.CharField(required=False)
        choice_one_votes = serializers.IntegerField(default=0)
        choice_two_votes = serializers.IntegerField(default=0)
        choice_three_votes = serializers.IntegerField(default=0)
        choice_four_votes = serializers.IntegerField(default=0)
        post_tags = serializers.CharField()
        post_dateCreated = serializers.DateTimeField(default=datetime.now)
        post_upvotes = serializers.IntegerField(default=0)
        post_downvotes = serializers.IntegerField(default=0)

        class Meta:
            model = PostModel
            fields = ('post_tags', 'post_id')

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

class TagSerializer (serializers.Serializer):
        value = serializers.CharField()
        label = serializers.CharField()

        class Meta:
            model = TagModel
            fields = ('value')


        def create(self, validated_data):
            return TagModel.objects.create(**validated_data)

class VoteSerializer (serializers.Serializer):
        post_id = serializers.CharField()
        user_id = serializers.CharField()

        class Meta:
            model = VoteModel
            fields = ('post_id', 'user_id')


        def create(self, validated_data):
            return VoteModel.objects.create(**validated_data)