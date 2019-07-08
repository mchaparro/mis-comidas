from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from recipes.models import Recipe
from recipes.rest.serializers import RecipeSerializer


class RecipeViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    GenericViewSet,
):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
