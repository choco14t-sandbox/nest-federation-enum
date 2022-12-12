import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostArgs } from './post.args';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => Post)
  post(@Args() args: PostArgs): Post {
    const { postType } = args;
    console.log(postType);
    return {
      id: '1',
      title: 'test',
      postType: 1,
    } as Post;
  }
}
