from django.db import models


class BaseModel(models.Model):
    """ Base class for all models
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class NewUser(BaseModel):
    name = models.CharField(max_length=50)
    tutor = models.BooleanField(default=False)


CATEGORY = (
    ("FOODS", "foods"),
    ("DRINKS", "drinks"),
    ("ART", "art"),
)

class Classes(BaseModel):
    title = models.CharField(max_length=50)
    description = models.TextField()
    event = models.CharField(max_length=50)
    slug = models.SlugField(max_length=200, unique=True)
    category = models.CharField(choices=CATEGORY, default="DRINKS", 
                                max_length=20)


class Record(BaseModel):
    classes = models.ForeignKey(Classes, on_delete=models.CASCADE)
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
