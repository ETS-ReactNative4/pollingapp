import uuid
from cassandra.cqlengine import columns
from datetime import datetime    
from django_cassandra_engine.models import DjangoCassandraModel

class PostModel(DjangoCassandraModel):
    post_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    post_tags = columns.Text(primary_key=True, clustering_order='DESC')
    post_profile = columns.Text()
    post_title = columns.Text()
    post_choice_one = columns.Text()
    post_choice_two = columns.Text()
    post_choice_three = columns.Text(required=False)
    post_choice_four = columns.Text(required=False)
    choice_one_votes = columns.Integer(default=0)
    choice_two_votes = columns.Integer(default=0)
    choice_three_votes = columns.Integer(default=0)
    choice_four_votes = columns.Integer(default=0)
    post_dateCreated = columns.DateTime(default=datetime.now)
    post_upvotes = columns.Integer(default=0)
    post_downvotes = columns.Integer(default=0)

    class Meta:
        get_pk_field = 'post_id'

class CommentModel(DjangoCassandraModel):
    comment_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    comment_post_id = columns.Text(primary_key=True, clustering_order='DESC')
    comment_reply = columns.Text(required=False)
    comment_profile = columns.Text()
    comment_content = columns.Text()
    comment_dateCreated = columns.DateTime(default=datetime.now)
    post_upvotes = columns.Integer(default=0)
    post_downvotes = columns.Integer(default=0)

    class Meta:
        get_pk_field = 'comment_id'

class TagModel(DjangoCassandraModel):
    value = columns.Text(primary_key=True)
    label = columns.Text()

    def __str__(self):
        return self.tag_name

class VoteModel(DjangoCassandraModel):
    post_id = columns.Text(primary_key=True)
    user_id = columns.Text(primary_key=True)
    comment_id = columns.Text()
    user_choice = columns.Integer(default=0)


    class Meta:
        get_pk_field = 'post_id'

    def __str__(self):
        return self.post_id