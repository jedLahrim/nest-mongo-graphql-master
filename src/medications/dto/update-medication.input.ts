import { CreateMedicationInput } from './create-medication.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, InputType } from 'type-graphql';
@InputType()
export class UpdateMedicationInput extends PartialType(CreateMedicationInput) {
  @Field()
  id: number;
}
