from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from forums.models import Forum
from forums.rest.serializers import ForumSerializer


class ForumViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    GenericViewSet,
):
    queryset = Forum.objects.all()
    serializer_class = ForumSerializer
