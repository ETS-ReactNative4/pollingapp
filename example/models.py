import uuid
from cassandra.cqlengine import columns
from django_cassandra_engine.models import DjangoCassandraModel

class ExampleModel(DjangoCassandraModel):
    example_id    = columns.UUID(primary_key=True, default=uuid.uuid4)
    example_type  = columns.Integer(index=True)
    created_at    = columns.DateTime()
    description   = columns.Text(required=False)

class PostModel(DjangoCassandraModel):
    post_id = columns.UUID(primary_key=True, default=uuid.uuid1)
    post_profile = columns.Text()
    post_title = columns.Text()
    post_content = columns.Text()
    post_tags = columns.Text()
    post_upvotes = columns.Integer()
    post_downvotes = columns.Integer()

class CommentModel(DjangoCassandraModel):
    comment_id = columns.UUID(primary_key=True, default=uuid.uuid1)
    comment_post_id = columns.Text(primary_key=True, clustering_order='DESC')
    comment_profile = columns.Text()
    comment_content = columns.Text()

    class Meta:
        get_pk_field = 'comment_id'

class ProfileModel(DjangoCassandraModel):
    profile_id = columns.Text(primary_key=True)
    profile_dateCreated = columns.Date()
