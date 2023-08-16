from django.db import models
from wagtail.models import Page
from wagtail.rich_text import RichText
from wagtail.fields import RichTextField
from django.http import JsonResponse
from wagtail.admin.panels import FieldPanel

class WritingPage(Page):

    text = RichTextField(blank=True, max_length=1000)

    content_panels = Page.content_panels + [
        FieldPanel("text"),
    ]

    def serve(self, request, *args, **kwargs):
        return JsonResponse({
            "title": self.title,
            "text": str(RichText(self.text)),
            "articles": [{
                "title": article.title,
                "date": article.date,
                "intro": article.intro,
                "image": article.image.file.url,
            } for article in ArticlePage.objects.all().order_by("-date")]
        })



class ArticleCategory(models.Model):

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    


class ArticlePage(Page):

    date = models.DateField("Article date")
    image = models.ForeignKey("wagtailimages.Image", null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
    category = models.ForeignKey("ArticleCategory", null=True, blank=True, on_delete=models.SET_NULL)
    intro = models.TextField()
    body = RichTextField(blank=True)

    panels = [
        FieldPanel("date"),
        FieldPanel("image"),
        FieldPanel("category"),
        FieldPanel("intro_text"),
        FieldPanel("body"),
    ]

    def __str__(self):
        return self.title