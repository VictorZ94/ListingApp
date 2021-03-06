# Generated by Django 3.2.5 on 2021-12-17 08:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Classes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('event', models.CharField(max_length=50)),
                ('slug', models.SlugField(max_length=200, unique=True)),
                ('category', models.CharField(choices=[('FOODS', 'foods'), ('DRINKS', 'drinks'), ('ART', 'art')], default='DRINKS', max_length=20)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='NewUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=50)),
                ('tutor', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('classes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ListingCRUD.classes')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ListingCRUD.newuser')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
