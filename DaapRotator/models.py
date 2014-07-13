__author__ = 'pridemai'
__author__ = 'aliciawamsley'
from django.db import models


class TwitterFollowers(models.Model):
    username = models.CharField(max_length=30)
    def __unicode__(self):
        return self.username

class TwitterKeys(models.Model):
    api_key = models.CharField(max_length=100)
    api_key_secret= models.CharField(max_length=100)
    oauth_key = models.CharField(max_length=100)
    oauth_key_secret= models.CharField(max_length=100)
    effective_date = models.CharField(max_length=35)
    def __unicode__(self):
        return self.api_key
