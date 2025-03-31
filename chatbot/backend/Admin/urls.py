from django.urls import path
from .views import ProcessMarkdownAPIView, QueryMarkdownAPIView, ListStoredFilesAPIView

urlpatterns = [
    path("process-md/", ProcessMarkdownAPIView.as_view(), name="process-md"),
    path("query-md/", QueryMarkdownAPIView.as_view(), name="query-md"),
    path("stored-files/", ListStoredFilesAPIView.as_view(), name="stored-files"),

]
