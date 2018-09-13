import uuid
from cassandra.cqlengine import columns
from datetime import datetime    
from django_cassandra_engine.models import DjangoCassandraModel

class PostModel(DjangoCassandraModel):
    post_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    post_profile = columns.Text()
    post_title = columns.Text()
    post_content = columns.Text()
    post_tags = columns.Text()
    post_dateCreated = columns.DateTime(default=datetime.now)
    post_upvotes = columns.Integer(default=0)
    post_downvotes = columns.Integer(default=0)

class CommentModel(DjangoCassandraModel):
    comment_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    comment_post_id = columns.Text(primary_key=True, clustering_order='DESC')
    comment_profile = columns.Text()
    comment_content = columns.Text()
    comment_dateCreated = columns.DateTime(default=datetime.now)
    post_upvotes = columns.Integer(default=0)
    post_downvotes = columns.Integer(default=0)

    class Meta:
        get_pk_field = 'comment_id'

class ProfileModel(DjangoCassandraModel):
    profile_id = columns.Text(primary_key=True)
    profile_dateCreated = columns.DateTime(default=datetime.now)
