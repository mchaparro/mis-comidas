from django.db import models
from django.utils.translation import ugettext_lazy as _

from tg_utils.models import ClosableTimestampedModel


class Recipe(ClosableTimestampedModel):
    name = models.CharField(_('Recipe title'), max_length=127)
    description = models.CharField(_('Recipe description'), max_length=255, blank=True)
    tags = models.ManyToManyField('recipes.tag', related_name='recipes')
    ingredients = models.ManyToManyField('recipes.Ingredient', related_name='recipes',
                                       through='recipes.RecipeIngredient', through_fields=('recipe', 'ingredient'))

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(_('Tag name'), max_length=255, unique=True)

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    name = models.CharField(_('Ingredient'), max_length=255, unique=True)

    def __str__(self):
        return self.name


class RecipeIngredient(models.Model):
    recipe = models.ForeignKey('recipes.Recipe', related_name='recipe_ingredients')
    ingredient = models.ForeignKey('recipes.Ingredient', related_name='ingredient_recipes')
    amount = models.DecimalField(_('Amount'), max_digits=5, decimal_places=3, blank=True)
    unit = models.CharField(_('Unit'), max_length=255, blank=True)

    def __str__(self):
        return f'{self.recipe} ({self.ingredient})'
