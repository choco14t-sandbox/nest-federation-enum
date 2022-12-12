import { ArgsType, Field } from '@nestjs/graphql';
import { PostType } from './post-type.enum';

@ArgsType()
export class PostArgs {
  @Field(() => PostType, { nullable: true, defaultValue: PostType.PRIVATE })
  postType: PostType;
}
