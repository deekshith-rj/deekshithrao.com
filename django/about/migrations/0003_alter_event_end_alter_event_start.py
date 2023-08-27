# Generated by Django 4.2.2 on 2023-08-27 13:04

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0002_event'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='end',
            field=models.CharField(blank=True, max_length=7, validators=[django.core.validators.RegexValidator(message='Must be in the format YYYY=MM', regex='\\d\\d\\d\\d=\\d\\d')]),
        ),
        migrations.AlterField(
            model_name='event',
            name='start',
            field=models.CharField(max_length=7, validators=[django.core.validators.RegexValidator(message='Must be in the format YYYY=MM', regex='\\d\\d\\d\\d=\\d\\d')]),
        ),
    ]
