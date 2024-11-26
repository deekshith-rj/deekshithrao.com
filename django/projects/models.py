from django.db import models
from wagtail.models import Page, Orderable, ParentalKey
from wagtail.rich_text import RichText
from wagtail.fields import RichTextField, StreamField
from django.http import JsonResponse
from django.conf import settings
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock
from modelcluster.fields import ParentalKey
from modelcluster.fields import ParentalManyToManyField
from modelcluster.models import ClusterableModel
from wagtail.snippets.models import register_snippet

class PortfolioPage(Page):

    text = RichTextField(blank=True, max_length=1000)

    content_panels = Page.content_panels + [
        FieldPanel("text"),
        # InlinePanel("projects", label="Projects"),
    ]

    max_count = 1

    subpage_types = ["projects.ProjectPage"]

    preview_modes = []

    def get_url(self, *args, **kwargs):
        return f"{settings.FRONTEND_URL}/projects"

    def serve(self, request, *args, **kwargs):
        return JsonResponse({
            "title": self.title,
            "text": str(RichText(self.text)),
            "projects": [{
                "title": project.title,
                "slug": project.slug,
                "featured_overview": project.featured_overview,
                "description": project.description,
                "code_url": project.code_url,
                "about_url": project.about_url,
                "image": project.image.file.url if project.image else None,
                "tags": [{"name": tag.name, "color": tag.color} for tag in project.tags.all()],
            } for project in ProjectPage.objects.filter(live=True).order_by("path")],
            "meta": {
                "title": self.seo_title or self.title,
                "description": self.search_description
            }
        })



class ProjectPage(Page):

    featured_overview = RichTextField(blank=True, max_length=1000)
    description = RichTextField()
    code_url = models.URLField(blank=True, null=True)
    about_url = models.URLField(blank=True, null=True)
    image = models.ForeignKey("wagtailimages.Image", null=True, blank=True, on_delete=models.SET_NULL, related_name="+")
    body = StreamField([
        ("text", blocks.RichTextBlock(features=["bold", "link", "italic", "h2", "h3", "ol", "ul", "code", "strikethrough"])),
        ("figure", blocks.StructBlock([
            ("image", ImageChooserBlock()),
            ("caption", blocks.RichTextBlock(features=["bold", "link", "italic"], required=False)),
        ], icon="image")),
        ("code", blocks.StructBlock([
            ("language", blocks.CharBlock()),
            ("code", blocks.TextBlock()),
        ], icon="code")),
    ], blank=True, null=True, use_json_field=True)
    tags = ParentalManyToManyField("projects.ProjectTag", related_name="projects")
    # page = ParentalKey(PortfolioPage, on_delete=models.PROTECT, related_name="projects")

    content_panels = Page.content_panels + [
        FieldPanel("featured_overview"),
        FieldPanel("description"),
        FieldPanel("code_url"),
        FieldPanel("about_url"),
        FieldPanel("body", ),
        FieldPanel("image"),
        FieldPanel("tags"),
    ]

    parent_page_type = ["projects.PortfolioPage"]

    preview_modes = []

    also_revalidate = ["/projects"]

    def __str__(self):
        return self.title
    
    def get_url(self, *args, **kwargs):
        return f"{settings.FRONTEND_URL}/projects/{self.slug}"

    def serve(self, request, *args, **kwargs):
        blocks = []
        for block in self.body:
            if block.block_type == "text":
                blocks.append({
                    "type": block.block_type,
                    "value": block.render()
                })
            elif block.block_type == "figure":
                blocks.append({
                    "type": block.block_type,
                    "value": {
                        "image": block.value["image"].file.url,
                        "caption": str(block.value["caption"]),
                    }
                })
            elif block.block_type == "code":
                blocks.append({
                    "type": block.block_type,
                    "value": {
                        "language": block.value["language"],
                        "code": block.value["code"],
                    }
                })
        return JsonResponse({
            "title": self.title,
            "image": self.image.file.url if self.image else None,
            "body": blocks,
            "tags": [{"name": tag.name, "color": tag.color} for tag in self.tags.all()],
            "meta": {
                "title": self.seo_title or self.title,
                "description": self.search_description
            }
        })



@register_snippet
class ProjectTag(models.Model):
    
    name = models.CharField(max_length=50, unique=True)
    color = models.CharField(max_length=10)

    def __str__(self):
        return self.name
