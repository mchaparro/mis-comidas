from rest_framework.routers import SimpleRouter

from forums.rest.views import ForumViewSet


router = SimpleRouter(trailing_slash=False)
router.register(r'forums', ForumViewSet)

urlpatterns = router.urls
