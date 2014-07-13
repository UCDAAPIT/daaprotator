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
    weather_data = get_weather_data_as_json()
    kwargs = {}
    kwargs['weather_desc'] = str(weather_data['current_observation']['weather']).replace("(","").replace(")", "").replace(",","").replace("'","")
    kwargs['winds'] = str(weather_data['current_observation']['wind_string']).replace("Gusting to", "-")
    kwargs['weather_image_src'] = str(weather_data['current_observation']['icon_url'])
    temp_str = str(weather_data['current_observation']['temperature_string'])
    kwargs['temp'] = temp_str[0:temp_str.find('F')+1].replace(" ", "&deg;")
    return render(request, "weather.html", kwargs)