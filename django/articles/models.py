from django.db import models
from wagtail.models import Page, Orderable
from wagtail.rich_text import RichText
from wagtail.fields import RichTextField
from wagtail.snippets.models import register_snippet
from wagtail.admin.panels import FieldPanel, InlinePanel

class ArticlesPage(Page):

    text = RichTextField(blank=True, max_length=1000)

    content_panels = Page.content_panels + [
        FieldPanel("text"),
        InlinePanel("articles", label="Articles"),
    ]



class ArticleCategory(models.Model):

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    


class Article(Orderable):

    date = models.DateField("Article date")
    image = models.ForeignKey("wagtailimages.Image", null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
    category = models.ForeignKey("ArticleCategory", null=True, blank=True, on_delete=models.SET_NULL)
    intro_text = models.TextField()
    body = RichTextField(blank=True)
    page = models.ForeignKey(ArticlesPage, on_delete=models.CASCADE, related_name="articles")

    panels = [
        FieldPanel("date"),
        FieldPanel("image"),
        FieldPanel("category"),
        FieldPanel("intro_text"),
        FieldPanel("body"),
    ]

    def __str__(self):
        return self.title