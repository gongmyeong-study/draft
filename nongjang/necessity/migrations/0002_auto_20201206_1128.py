# Generated by Django 3.0.7 on 2020-12-06 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('necessity', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='necessityplace',
            name='is_hidden',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterUniqueTogether(
            name='necessityplace',
            unique_together=set(),
        ),
    ]
