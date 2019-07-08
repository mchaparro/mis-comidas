from mis_comidas.celery import app as celery_app


default_app_config = 'mis_comidas.apps.AskTaltechStudentConfig'

__all__ = ['celery_app']
