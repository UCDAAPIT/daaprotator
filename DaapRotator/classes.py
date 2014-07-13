__author__ = 'pridemai'
from twython import TwythonStreamer
import re
class TwitterStreamer(TwythonStreamer):
    def on_success(self, data):
        if 'text' in data:
            print data['text'].encode('utf-8')

    def on_error(self, status_code, data):
        print status_code

        # Want to stop trying to get data because of the error?
        # Uncomment the next line!
        # self.disconnect()


class Tweet():
    tweet_content = ''
    tweet_user = '@'
    profile_picture_url = ''
    tweet_user_url = ''
    tweet_date = ''
    tweet_media_url = ''

    # tweet_urls =[]
    #just so we can set the profile picture, content of tweet and user image url
    def __init__(self, content='', user='', url='', user_url='', date='', media_url=''):
        self.profile_picture_url = url
        self.tweet_user += '%s:' %user
        self.tweet_content = content
        self.tweet_date = date
        self.tweet_user_url = user_url
        self.tweet_media_url = media_url

    def create_tweet_html(self):
        #create the base of the tweet
        # hashtag_regex = '<#. >'
        if self.tweet_media_url != '':
            html = u"<p><img src=\"{0}\"> <strong><span class=\"twitter_user\">{1}</span></strong> {2}<br><img src=\"{3}\" height=\"150\" width=\"175\">" \
               u"</p>".format(self.profile_picture_url, self.tweet_user, self.tweet_content, self.tweet_media_url)
        else:
             html = u"<p><img src=\"{0}\"> <strong><span class=\"twitter_user\">{1}</span></strong> {2}<br>" \
               u"</p>".format(self.profile_picture_url, self.tweet_user, self.tweet_content)

        return html






