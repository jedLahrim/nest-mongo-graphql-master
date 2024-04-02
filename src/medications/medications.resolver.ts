import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MedicationsService } from './medications.service';
import { CreateMedicationInput } from './dto/create-medication.input';
import { UpdateMedicationInput } from './dto/update-medication.input';
import { Medication } from './entities/medication.entity';

@Resolver('Medication')
export class MedicationsResolver {
  constructor(private readonly medicationsService: MedicationsService) {
  }

  @Mutation(() => Medication, { name: 'createMedication' })
  create(@Args('createMedicationInput') createMedicationInput: CreateMedicationInput) {
    return this.medicationsService.create(createMedicationInput);
  }

  @Query(() => String, { name: 'medications' })
  findAll() {
    return this.medicationsService.findAll();
  }

  @Query(() => String, { name: 'medication' })
  findOne(@Args('id') id: number) {
    return this.medicationsService.findOne(id);
  }

  @Mutation(() => Medication, { name: 'updateMedication' })
  update(@Args('updateMedicationInput') updateMedicationInput: UpdateMedicationInput) {
    return this.medicationsService.update(updateMedicationInput.id, updateMedicationInput);
  }

  @Mutation(() => Medication, { name: 'removeMedication' })
  remove(@Args('id') id: number) {
    return this.medicationsService.remove(id);
  }
}
