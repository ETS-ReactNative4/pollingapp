from cassandra.cqlengine import connection
from cassandra.cqlengine.management import sync_table
from cassandra.cluster import Cluster
from .models import ExampleModel
from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')
    cluster = Cluster(['127.0.0.1'])
    session = cluster.connect()
    session.set_keyspace('db')
    #Do database stuff here (I know. Real technical)
    cluster.shutdown()
    return HttpResponse("Hello world")