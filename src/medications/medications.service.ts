import { Injectable } from '@nestjs/common';
import { CreateMedicationInput } from './dto/create-medication.input';
import { UpdateMedicationInput } from './dto/update-medication.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medication } from './entities/medication.entity';

@Injectable()
export class MedicationsService {
  @InjectModel('Medication') private medicationModel: Model<Medication>;

  async create(createMedicationInput: CreateMedicationInput) {
    const { name, description } = createMedicationInput;
    const medication = await this.medicationModel.create({ name: name, description: description });
    return medication
  }

  findAll() {
    return `This action returns all medications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medication`;
  }

  update(id: number, updateMedicationInput: UpdateMedicationInput) {
    return `This action updates a #${id} medication`;
  }

  remove(id: number) {
    return `This action removes a #${id} medication`;
  }
}
