__author__ = 'pridemai'
import urllib, urllib2, json
from twython import Twython
from classes import TwitterStreamer, Tweet
import settings
from models import *
WEATHER_URL = "http://api.wunderground.com/api/5ca691c6ec4c2984/conditions/q/OH/Cincinnati.json"

def get_weather_data_as_json():
    result = urllib2.urlopen(WEATHER_URL, None)
    content_raw = result.read()
    json_dict = json.loads(content_raw)
    return json_dict

def get_twitter_feed():
    key = TwitterKeys.objects.latest('id')
    twitter = Twython(key.api_key, key.api_key_secret, key.oauth_key, key.oauth_key_secret)
    # ts = TwitterStreamer(settings.TWITTER_API_KEY, settings.TWITTER_API_KEY_SECRET, settings.OAUTH_TOKENS_TWITTER_CLIENT_ID, settings.OAUTH_TOKENS_TWITTER_CLIENT_SECRET)
    # ts.statuses.filter(track='twitter')
    # var = twitter.get_user_timeline(screen_name = 'uofcincy', count=1)
    tweets = []
    for follower in TwitterFollowers.objects.all():
        raw_tweets = twitter.get_user_timeline(screen_name = follower.username, count=1)
        for tweet in parse_tweets(raw_tweets):
            tweets.append(tweet)
        # tweets.append(raw_tweets)
    # tweets = []
    # for tweet in parse_tweets(twitter.get_user_timeline(screen_name = 'uofcincy', count=5)):
    #     tweets.append(tweet)
    # for tweet in parse_tweets(twitter.get_user_timeline(screen_name = 'daapcgc', count=5)):
    #     tweets.append(tweet)
    # # for raw in var:
    #     if 'media' in raw['entities']:
    #         print raw['entities']['media'][0]['media_url']
    #         # def __init__(self, content='', user='', url='', user_url='', date='', media_url=''):
    #         tweet = Tweet(raw['text'], raw['user']['screen_name'], raw['user']['profile_image_url'], raw['user']['url'], raw['created_at'], raw['entities']['media'][0]['media_url'])
    #     else:
    #         tweet = Tweet(raw['text'], raw['user']['screen_name'], raw['user']['profile_image_url'], raw['user']['url'])
    #     tweets.append(tweet.create_tweet_html())

    # tweets += twitter.get_user_timeline(screen_name = 'daapcgc', count=5)
    # for raw in var:
    #     if 'media' in raw['entities']:
    #
    #         tweet = Tweet(raw['text'], raw['user']['screen_name'], raw['user']['profile_image_url'], raw['user']['url'], raw['created_at'], raw['entities']['media'][0]['media_url'])
    #     else:
    #         tweet = Tweet(raw['text'], raw['user']['screen_name'], raw['user']['profile_image_url'], raw['user']['url'])
    #     tweets.append(tweet.create_tweet_html())

    # # Displaying the Daily Trends.
    # trends = twitter.getDailyTrends()
    # print(trends)
    # # Displaying the Weekly Trends.
    # weeklyTrends = twitter.getWeeklyTrends()
    return tweets


def parse_tweets(var):
    tweets = []
    for raw in var:
        if 'media' in raw['entities']:
            print raw['entities']['media'][0]['media_url']
            # def __init__(self, content='', user='', url='', user_url='', date='', media_url=''):
            tweet = Tweet(raw['text'], raw['user']['screen_name'], raw['user']['profile_image_url'], raw['user']['url'], raw['created_at'], raw['entities']['media'][0]['media_url'])
        else:
            tweet = Tweet(raw['text'], raw['user']['screen_name'], raw['user']['profile_image_url'], raw['user']['url'])
        tweets.append(tweet.create_tweet_html())
    return tweets
