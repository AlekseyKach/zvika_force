from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .Products import products

# Create your views here.


@api_view(['GET'])
def GetRoutes(request):
    routes = [

        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/reviews/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',


    ]

    return Response(routes)


# @api_view(['GET'])
# def GetProducts(requset):
#     return Response(products)


@api_view(['GET'])
def getProductById(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)