import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Content } from 'src/modules/contents/entities/content.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity()
export class Lesson extends BaseEntity {
  @Column()
  description: string;

  @OneToOne(() => Content, (contents) => contents.lesson)
  contents: Content[];
}
