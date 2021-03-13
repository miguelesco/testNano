from django.shortcuts import render
from django.views.generic import ListView

from .models import Task

# Create your views here.
class TaskList(ListView):
    model = Task
    template_name = 'task_list.html'