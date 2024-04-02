import { Document } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Medication extends Document {
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
}
