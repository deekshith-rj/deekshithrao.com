# Generated by Django 2.0 on 2018-01-15 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('samireland', '0004_auto_20180114_1822'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.SlugField(primary_key=True, serialize=False)),
                ('title', models.TextField()),
                ('date', models.DateField()),
                ('body', models.TextField()),
            ],
        ),
    ]
