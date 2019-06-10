from django.db import models
from django.utils.translation import ugettext_lazy as _

from tg_utils.models import ClosableTimestampedModel


class Thread(ClosableTimestampedModel):
    title = models.CharField(_('Thread title'), max_length=127, blank=True)
    description = models.TextField(_('Thread description'))
    forum = models.ForeignKey('forums.Forum', related_name='threads')

    def __str__(self):
        return self.title
