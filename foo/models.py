from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Task(models.Model):

    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    
    title = models.CharField(max_length=150)
    content = models.TextField()




