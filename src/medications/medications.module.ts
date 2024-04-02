import { Module } from '@nestjs/common';
import { MedicationsService } from './medications.service';
import { MedicationsResolver } from './medications.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicationSchema } from './schema/medication.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Medication', schema: MedicationSchema }])],
  providers: [MedicationsResolver, MedicationsService],
})
export class MedicationsModule {
}
