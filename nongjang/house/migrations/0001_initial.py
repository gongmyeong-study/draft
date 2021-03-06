# Generated by Django 3.0.7 on 2020-11-15 04:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='House',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('introduction', models.CharField(blank=True, max_length=300)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_hidden', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='UserHouse',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_leader', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('house', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_houses', to='house.House')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_houses', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'house')},
            },
        ),
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('house', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='places', to='house.House')),
            ],
            options={
                'unique_together': {('house', 'name')},
            },
        ),
    ]
