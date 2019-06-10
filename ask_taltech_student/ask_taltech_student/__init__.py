from ask_taltech_student.celery import app as celery_app


default_app_config = 'ask_taltech_student.apps.AskTaltechStudentConfig'

__all__ = ['celery_app']
