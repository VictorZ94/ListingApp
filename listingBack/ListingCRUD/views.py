from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Classes
import json


class ClassesView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            classes = list(Classes.objects.filter(id=id).values())
            if len(classes) > 0:
                new_class = classes[0]
                datos = {'message': "Success", 'new_class': new_class}
            else:
                datos = {'message': "new_class not found..."}
            return JsonResponse(datos)
        else:
            classes = list(Classes.objects.values())
            if len(classes) > 0:
                datos = {'message': "Success", 'classes': classes}
            else:
                datos = {'message': "classes not found..."}
            return JsonResponse(datos)

    def post(self, request):
        data = json.loads(request.body)
        title = data['title']
        slug = "-".join(list(map(lambda word: word.lower(), title.split())))
        Classes.objects.create(title=title,
                               description=data['description'],
                               event=data['event'],
                               slug=slug,
                               category=data['category']
                            )
        response = {'message': "Success"}
        return JsonResponse(response)
