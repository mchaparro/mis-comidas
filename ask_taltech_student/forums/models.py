from django.db import models
from django.utils.translation import ugettext_lazy as _

from tg_utils.models import ClosableTimestampedModel


class Forum(ClosableTimestampedModel):
    title = models.CharField(_('Forum title'), max_length=127)
    description = models.CharField(_('Forum description'), max_length=255, blank=True)
    tags = models.ManyToManyField('forums.tag', related_name='forums')

    def __str__(self):
        return self.title


class Tag(models.Model):
    name = models.CharField(_('Tag name'), max_length=255, unique=True)

    def __str__(self):
        return self.name
