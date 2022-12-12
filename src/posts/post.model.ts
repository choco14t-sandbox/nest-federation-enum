import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PostType } from './post-type.enum';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => PostType)
  postType: PostType;
}
