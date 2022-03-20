import { CreateLessonInput } from './create-lesson.input';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
@InputType()
export class UpdateLessonInput extends PartialType(CreateLessonInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
