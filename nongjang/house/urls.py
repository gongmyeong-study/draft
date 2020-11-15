from django.urls import include, path
from rest_framework.routers import SimpleRouter
from house.views import HouseViewSet, PlaceViewSet, PlaceNecessityView, PlaceNecessityCountView, HousePlaceView

app_name = 'house'

router = SimpleRouter()
router.register('house', HouseViewSet, basename='house')  # /api/v1/house/
router.register('place', PlaceViewSet, basename='place')  # /api/v1/place/

urlpatterns = [
    path('', include((router.urls))),
    path('place/<int:place_id>/necessity/<int:necessity_id>/', PlaceNecessityView.as_view()),
    path('place/<int:place_id>/necessity/<int:necessity_id>/count/', PlaceNecessityCountView.as_view()),
    path('house/<int:house_id>/place/<int:place_id>/', HousePlaceView.as_view()),
]
