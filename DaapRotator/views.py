__author__ = 'Andrew'
from django.shortcuts import render_to_response
from django.template.loader import get_template
import urllib,urllib2, json
from functions import *
from django.shortcuts import render
# WEATHER_URL = "http://api.wunderground.com/api/5ca691c6ec4c2984/conditions/q/OH/Cincinnati.json"

def index(request):

    kwargs = {}
    kwargs['tweets'] = get_twitter_feed()
    # kwargs['weather_desc'] = str(json_dict['current_observation']['weather']),
    # kwargs['winds'] = str(json_dict['current_observation']['wind_string'])
    # kwargs['weather_image_src'] = str(json_dict['current_observation']['icon_url'])
    # kwargs['temp'] = str(json_dict['current_observation']['temperature_string'])
    return render(request, "index.html", kwargs)

def twitter(request):
    return render(request, "twitter.html",{"tweets": get_twitter_feed()})

def weather(request):
    return render(request, "weather.html")