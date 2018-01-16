from django import forms
from .models import Publication, Project, Article

class DateInput(forms.DateInput):
    input_type = "date"



class PublicationForm(forms.ModelForm):

    class Meta:
        model = Publication
        exclude = []

        widgets = {
         "id": forms.TextInput(attrs={
          "placeholder": "ID", "autocomplete": "off"
         }),
         "title": forms.TextInput(attrs={
          "placeholder": "Title", "autocomplete": "off"
         }),
         "date": DateInput(),
         "url": forms.TextInput(attrs={
          "placeholder": "URL", "autocomplete": "off"
         }),
         "doi": forms.TextInput(attrs={
          "placeholder": "DOI", "autocomplete": "off"
         }),
         "authors": forms.TextInput(attrs={
          "placeholder": "Authors", "autocomplete": "off"
         }),
         "body": forms.Textarea(attrs={"placeholder": "Body"}),
        }



class ProjectForm(forms.ModelForm):

    class Meta:
        model = Project
        exclude = []

        widgets = {
         "name": forms.TextInput(attrs={
          "placeholder": "Name", "autocomplete": "off"
         }),
         "image": forms.TextInput(attrs={
          "placeholder": "Image Name", "autocomplete": "off"
         }),
         "description": forms.Textarea(attrs={"placeholder": "Description"}),
        }



class ArticleForm(forms.ModelForm):

    class Meta:
        model = Article
        exclude = []

        widgets = {
         "id": forms.TextInput(attrs={
          "placeholder": "ID", "autocomplete": "off"
         }),
         "title": forms.TextInput(attrs={
          "placeholder": "Title", "autocomplete": "off"
         }),
         "date": DateInput(),
         "url": forms.TextInput(attrs={
          "placeholder": "URL", "autocomplete": "off"
         }),
         "body": forms.Textarea(attrs={"placeholder": "Body"}),
        }
