from rest_framework import generics
from rest_framework import mixins
from rest_framework_extensions.mixins import PaginateByMaxMixin
from example.models import ProfileModel, PostModel, CommentModel
from .pagination import StandardResultsSetPagination
from .serializers import ProfileSerializer, PostSerializer, CommentSerializer


class ListProfile(mixins.CreateModelMixin, generics.ListAPIView):
    queryset = ProfileModel.objects.all()
    serializer_class = ProfileSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ListPost(mixins.CreateModelMixin, generics.ListAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    pagination_class = StandardResultsSetPagination

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ListComment(mixins.CreateModelMixin, generics.ListAPIView):
    queryset = CommentModel.objects.all()
    serializer_class = CommentSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class DetailProfile(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = ProfileModel.objects.all()
    serializer_class = ProfileSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class DetailPost(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class DetailComment(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = CommentModel.objects.all()
    serializer_class = CommentSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)