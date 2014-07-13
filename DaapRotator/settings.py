"""
Django settings for DaapRotator project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
PROJECT_ROOT = os.path.dirname(__file__)



# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '570ziecx=7q*)=(%8_^^(t2@@ko*ew5kdj^n*&zww4s11fax+!'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []

# oauth-tokens settings
TWITTER_API_KEY = '8rfFpTpT124rFHGrp9uBKoCQu'
TWITTER_API_KEY_SECRET = 'EGNXqZ6b9nd6w6DSrwPgfUQYiNrcnL0VhzMg7lFIL1dKq4U6DB'
OAUTH_TOKENS_HISTORY = False# to keep in DB expired access tokens
OAUTH_TOKENS_TWITTER_CLIENT_ID = '2617244862-s5j0qCsOHQmVB0h926WONeeCPqUs3eW68PccGds'                                # application ID
OAUTH_TOKENS_TWITTER_CLIENT_SECRET = 'ipvFJnPxkAwCnxbSlrkwri25Rf8AVqcW5Af9wUc2Q9lOi'                            # application secret key
OAUTH_TOKENS_TWITTER_USERNAME = 'daapcgc'                                 # user login
OAUTH_TOKENS_TWITTER_PASSWORD = 'm@npower'                                 # user password
# UC_TWITTER_ACCOUNTS= [
#     'UCEmergency', 'uofcincy', 'daapcgc', 'UC_DAAP'
# ]


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'DaapRotator'

)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'DaapRotator.urls'

WSGI_APPLICATION = 'DaapRotator.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': '/Users/pridemai/PycharmProjects/daaprotator/rotator.db',                      # Or path to database file if using sqlite3.
        'USER': '',                      # Not used with sqlite3.
        'PASSWORD': '',                  # Not used with sqlite3.
        'HOST': '',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'static'),

    # Put strings here, like "/home/html/static" or "C:/www/django/static".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
    # os.path.join(STATIC_ROOT, "js"),
)
TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, "templates"),
    # os.path.join(PROJECT_ROOT, "pages"),

    # Put strings here, like "/home/html/django_templates" or "C:/www/django/templates".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
)