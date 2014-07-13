from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'DaapRotator.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'DaapRotator.views.index', name='home'),
    url(r'^twitter/$', 'DaapRotator.views.twitter', name='home'),
    url(r'^weather/$', 'DaapRotator.views.weather', name='home'),

)
