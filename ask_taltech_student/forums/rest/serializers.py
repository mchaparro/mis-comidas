from rest_framework import serializers

from accounts.rest.serializers import UserSerializer
from forums.models import Forum, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name')


class ForumSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    created_by = UserSerializer()

    class Meta:
        model = Forum
        fields = ('id', 'title', 'description', 'tags', 'created_by', 'created_at')
