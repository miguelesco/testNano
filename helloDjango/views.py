from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, 'home.html', {'siteName': 'Hello Django Site'})


def about(request):

    context = {'name': 'Julio'}

    if request.method == 'GET':
        context['name'] = 'Pepe'

    return render(request, 'about.html', context)