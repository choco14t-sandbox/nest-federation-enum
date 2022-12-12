import { registerEnumType } from '@nestjs/graphql';

export enum PostType {
  PUBLIC = 1,
  PRIVATE = 2,
}

registerEnumType(PostType, { name: 'PostType' });
