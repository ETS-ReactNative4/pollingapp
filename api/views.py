from rest_framework import generics
from rest_framework import mixins
from rest_framework_extensions.mixins import PaginateByMaxMixin
from rest_framework.filters import SearchFilter, OrderingFilter
from example.models import PostModel, CommentModel, TagModel, VoteModel
from .pagination import StandardResultsSetPagination
from .serializers import PostSerializer, CommentSerializer, TagSerializer, VoteSerializer

#class Login(generics.ListCreateAPIView):
 #   serializer_class = LoginSerializer

class ListPost(mixins.CreateModelMixin, generics.ListAPIView):
    serializer_class = PostSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        tagname = self.request.GET.getlist('post_tags')
        post_id = self.request.GET.getlist('post_id')
        if not tagname:
            if not post_id:
                queryset = PostModel.objects.using('db').all()
            else:
                queryset = PostModel.objects.using('db').filter(post_id__in=post_id)  
        else:
            queryset = PostModel.objects.using('db').filter(post_tags__in=tagname)
        return queryset

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ListComment(mixins.CreateModelMixin, generics.ListAPIView):
    queryset = CommentModel.objects.using('db').all()
    serializer_class = CommentSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ListTag(mixins.CreateModelMixin, generics.ListAPIView):
    serializer_class = TagSerializer

    def get_queryset(self):
        tagname = self.request.GET.getlist('tag_name')
        if not tagname:
            queryset = TagModel.objects.using('db').all()
        else:
            queryset = TagModel.objects.using('db').filter(tag_name__in=tagname)
        return queryset

    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ListVote(mixins.CreateModelMixin, generics.ListAPIView):
    serializer_class = VoteSerializer

    def get_queryset(self):
        votename = self.request.GET.getlist('vote_id')
        username = self.request.GET.getlist('user_id')
        if not votename and username:
            queryset = VoteModel.objects.using('db').all()
        else:
            queryset = VoteModel.objects.using('db').filter(vote_id__in=tagname, user_id__in=username)
        return queryset

    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class DetailPost(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = PostModel.objects.using('db').all()
    serializer_class = PostSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class DetailComment(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = CommentModel.objects.using('db').all()
    serializer_class = CommentSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class DetailTag(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = TagModel.objects.using('db').all()
    serializer_class = TagSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)