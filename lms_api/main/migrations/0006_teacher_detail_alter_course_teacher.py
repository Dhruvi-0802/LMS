# Generated by Django 4.1.2 on 2022-12-09 19:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0005_chapter_video_duration_alter_chapter_course"),
    ]

    operations = [
        migrations.AddField(
            model_name="teacher",
            name="detail",
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name="course",
            name="teacher",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="teacher_courses",
                to="main.teacher",
            ),
        ),
    ]
