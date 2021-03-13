from django.urls import path

from .views import TaskList

app_name = 'foo'
urlpatterns = [
	path('', TaskList.as_view(), name='list'),
    path('<slug:slug>/', ArticleDetailView.as_view(), name='article-detail')
]