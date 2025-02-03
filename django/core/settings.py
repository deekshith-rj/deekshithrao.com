import os
import environ

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.dirname(PROJECT_DIR)

env = environ.Env(
    SECRET_KEY=(str, "12345"),
    REVALIDATE_TOKEN=(str, "12345"),
    STATIC_ROOT=(str, os.path.join(BASE_DIR, "static")),
    MEDIA_ROOT=(str, os.path.join(BASE_DIR, "media")),
    DB_URL=(str, f"sqlite:///{PROJECT_DIR}/db.sqlite3"),
    WAGTAILADMIN_BASE_URL=(str, "admin"),
    # FRONTEND_URL=(str, "http://localhost"),
    INTERNAL_FRONTEND_URL=(str, "http://localhost:3000"),
)
env.read_env(os.path.join(PROJECT_DIR, ".env"))  # Reading from .env file
print("DEBUG value is : ")
print(env("DEBUG"))
DEBUG = env("DEBUG")
SECRET_KEY = env("SECRET_KEY")
STATIC_ROOT = env("STATIC_ROOT")
MEDIA_ROOT = env("MEDIA_ROOT")
FRONTEND_URL = env("FRONTEND_URL")
INTERNAL_FRONTEND_URL = env("INTERNAL_FRONTEND_URL")
WAGTAILADMIN_BASE_URL = env("WAGTAILADMIN_BASE_URL")
WAGTAIL_SITE_NAME = env("WAGTAIL_SITE_NAME")
REVALIDATE_TOKEN = env("REVALIDATE_TOKEN")

# URLs
ROOT_URLCONF = "core.urls"
STATIC_URL = "/static/"
MEDIA_URL = "/media/"
DATABASES = {
    "default": env.db("DB_URL")
}

# Security
ALLOWED_HOSTS = ["*"]
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
CSRF_TRUSTED_ORIGINS = [
    env("FRONTEND_URL")
]
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

# Wagtail / Misc settings
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
WAGTAILIMAGES_EXTENSIONS = ["gif", "jpg", "jpeg", "png", "webp", "svg"]
WAGTAIL_APPEND_SLASH = False
TIME_ZONE = "UTC"

INSTALLED_APPS = [
    "django.contrib.contenttypes",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "wagtail.contrib.forms",
    "wagtail.contrib.redirects",
    "wagtail.embeds",
    "wagtail.sites",
    "wagtail.users",
    "wagtail.snippets",
    "wagtail.documents",
    "wagtail.images",
    "wagtail.search",
    "wagtail.admin",
    "wagtail",
    "modelcluster",
    "taggit",
    "corsheaders",
    "core",
    "articles",
    "projects",
    "about",
]

MIDDLEWARE = [
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "wagtail.contrib.redirects.middleware.RedirectMiddleware"
]

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            os.path.join(PROJECT_DIR, "templates"),
        ],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]
