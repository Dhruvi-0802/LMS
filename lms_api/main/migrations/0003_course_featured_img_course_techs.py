# Generated by Django 4.1.2 on 2022-12-04 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0002_alter_course_options_alter_coursecategory_options_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="course",
            name="featured_img",
            field=models.ImageField(null=True, upload_to="course_imgs/"),
        ),
        migrations.AddField(
            model_name="course",
            name="techs",
            field=models.TextField(null=True),
        ),
    ]
