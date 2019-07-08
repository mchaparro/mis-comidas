from rest_framework.routers import SimpleRouter
from recipes.rest.views import RecipeViewSet


router = SimpleRouter(trailing_slash=False)
router.register(r'recipes', RecipeViewSet, basename='recipes')

urlpatterns = router.urls
