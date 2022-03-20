import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';

@ObjectType('Student')
export class StudentDTO extends BaseDTO {
  @Field()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
