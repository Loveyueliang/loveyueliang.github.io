from django.shortcuts import render, HttpResponse
from django.http.response import JsonResponse
# Create your views here.
from indexpy.models import UserModel


def register(request):
    try:
        email = request.POST.get('reEM')
        password = request.POST.get('rePW')
        username = email

        if email == '' or password == '':
            return JsonResponse({'status': '用户名或密码不能为空'})

        user = UserModel.objects.filter(email=email)
        if len(user) != 0:
            return JsonResponse({'status': '该邮箱已被注册'})

        user = UserModel.objects.create(username=username, email=email, password=password)


    except Exception as e:
        return HttpResponse(str(e))
    else:
        return JsonResponse({'status': '注册成功'})


def login(request):
    try:
        email = request.POST['sginEm']
        password = request.POST['sginPW']
        username = email

        user = UserModel.objects.filter(username=email, password=password)
        if len(user) != 0:
            return JsonResponse({'status': '登录成功'})
        else:
            return JsonResponse({'status': '用户名或密码不正确'})


    except Exception as e:
        print(str(e))
        return HttpResponse(str(e))
