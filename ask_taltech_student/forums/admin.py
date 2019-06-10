from django.contrib import admin

from forums.models import Forum, Tag


@admin.register(Forum)
class ForumAdmin(admin.ModelAdmin):
    list_display = ('title', 'tags', 'description')
    search_fields = ('title', 'tags')

    def tags(self, forum: Forum):
        return ', '.join(map(str, forum.tags.all()))


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
