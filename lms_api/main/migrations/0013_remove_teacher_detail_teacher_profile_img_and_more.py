# Generated by Django 4.1.2 on 2022-12-10 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0012_courserating"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="teacher",
            name="detail",
        ),
        migrations.AddField(
            model_name="teacher",
            name="profile_img",
            field=models.ImageField(null=True, upload_to="teacher_profile_imgs/"),
        ),
        migrations.AlterField(
            model_name="teacher",
            name="password",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
