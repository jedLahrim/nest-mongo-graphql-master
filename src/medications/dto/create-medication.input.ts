import { Field, InputType } from 'type-graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateMedicationInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsOptional()
  description?: string;
}
