import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss'],
})
export class SidepanelComponent implements OnInit {
  @Input() show: Boolean = false;
  @Input() item: string = '';

  @Output() output = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeSlider() {
    this.show = false;
    this.output.emit();
  }

  listItems: any = [
    {
      Z1: [
        {
          stockQuality: 'A Grade',
          sku: 'Dulcolax',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Insulin',
          zone: 2,
          quantity: 8,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Eno sachets',
          zone: 3,
          quantity: 18,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Band aid',
          zone: 4,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Tab Sinarest',
          zone: 5,
          quantity: 9,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Amrutanjan',
          zone: 6,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Diacerein',
          zone: 7,
          quantity: 17,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Etoricoxib',
          zone: 8,
          quantity: 5,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Leflunomide',
          zone: 9,
          quantity: 8,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Lornoxicam',
          zone: 10,
          quantity: 19,
        },
      ],
      Z2: [
        {
          stockQuality: 'B Grade',
          sku: 'Mefenamic',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Morphine',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Nimesulide',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Tramadol',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Sufentanil',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Ibuprofen',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Diclofenac',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Chlorzoxazone',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Nimesulide',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Tramadol',
          zone: 10,
          quantity: 8,
        },
      ],
      Z3: [
        {
          stockQuality: 'A Grade',
          sku: 'Dexamethasone',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Pheniramine',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Azelastine',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Hydroxyzine',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Levocetirizine',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Loratadine',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Pheniramine',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Polyvalent',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Gluconate',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Desferrioxamine',
          zone: 10,
          quantity: 8,
        },
      ],
      Z4: [
        {
          stockQuality: 'A Grade',
          sku: 'Carbamazepine',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Phenytoin',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Gabapentin',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Carbamazepine',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Levetiracetam',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Oxcarbazepine',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Zonisamide',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Methylcobalamin',
          zone: 8,
          quantity: 10,
        },
      ],
      Z5: [
        {
          stockQuality: 'A Grade',
          sku: 'Amoxycillin',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Benzathine',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Benzylpenicillin',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ceftriaxone',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cefuroxime',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cloxacillin',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cephalexin',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Chloramphenicol',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'B Grade',
          sku: 'Ciprofloxacin',
          zone: 9,
          quantity: 12,
        },
      ],
      Z6: [
        {
          stockQuality: 'A Grade',
          sku: 'Clomifene',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Erythromycin',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Gentamicin',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Metronidazole',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Nalidixic',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Norfloxacin',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Nitrofurantoin',
          zone: 7,
          quantity: 7,
        },
      ],
      Z7: [
        {
          stockQuality: 'A Grade',
          sku: 'Vancomycin',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Clofazimine',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Dapsone',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ofloxacin',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Amphotericin',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Fluconazole',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Griseofulvin',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ketoconazole',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Nystatin',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Aciclovir',
          zone: 10,
          quantity: 8,
        },
      ],
      Z8: [
        {
          stockQuality: 'A Grade',
          sku: 'Didanosine',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Lamivudine',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Stavudine',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Nevirapine',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Efavirenz',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Indinavir',
          zone: 6,
          quantity: 22,
        },
      ],
      Z9: [
        {
          stockQuality: 'A Grade',
          sku: 'Ritonavir',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Tinidazole',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Primaquine',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Quinine',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cefoperazone',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ampicillin',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Piperacillin',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Levofloxacin',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cefuroxime',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cefpodoxime',
          zone: 10,
          quantity: 8,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Tobramycin',
          zone: 11,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Teicoplanin',
          zone: 12,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Linezolid',
          zone: 13,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Piperacillin',
          zone: 14,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Meropenem',
          zone: 15,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Famciclobir',
          zone: 16,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Linezolid',
          zone: 17,
          quantity: 7,
        },
      ],
      Z10: [
        {
          stockQuality: 'A Grade',
          sku: 'Amoxycillin',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Aztreonam',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cefazoline',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cefazoline',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Erythromycin',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Imipenem',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Metronidazole',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Norfloxacin',
          zone: 8,
          quantity: 10,
        },
      ],
      Z11: [
        {
          stockQuality: 'A Grade',
          sku: 'Nitazoxanide',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Piperacillin',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Trimethoprim',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ampicillin',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ofloxacin',
          zone: 5,
          quantity: 14,
        },
      ],
      Z12: [
        {
          stockQuality: 'A Grade',
          sku: 'Lamivudine',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Rizatriptan',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Sumatriptan',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Mebeverine',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Actinomycin',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Bleomycin',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Busulphan',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cisplatin',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Danazol',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Doxorubicin',
          zone: 10,
          quantity: 8,
        },
      ],
      Z13: [
        {
          stockQuality: 'A Grade',
          sku: 'Etoposide',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Flutamide',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Fluorouracil',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Folinic Acid',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Gemcitabine',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Asparaginase',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Melphalan',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Mercaptopurine',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Methotrexate',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Paclitaxel',
          zone: 10,
          quantity: 8,
        },
      ],
      Z14: [
        {
          stockQuality: 'A Grade',
          sku: 'Vinblastine',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Vincristine',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Prednisolone',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Raloxifene',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Tamoxifen',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ondansetron',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Daunorubicin',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Imatinib',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Hydroxyurea',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Fludarabine',
          zone: 10,
          quantity: 8,
        },
      ],
      Z15: [
        {
          stockQuality: 'A Grade',
          sku: 'Rituximab',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Pamidronate',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Thymocyle',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Anastrazole',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Carboplatin',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Docetaxel',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Hyaluronidase',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Leucovorin',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Oxaliplatin',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Thalidomide',
          zone: 10,
          quantity: 8,
        },
      ],
      Z16: [
        {
          stockQuality: 'A Grade',
          sku: 'Bromocriptine',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Levodopa',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Carbidopa',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cabregoline',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Benzhexol',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Pramipexole',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Rasagiline',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ropinirole',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Amantadine',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cyanocobalamin',
          zone: 10,
          quantity: 8,
        },
      ],
      Z17: [
        {
          stockQuality: 'A Grade',
          sku: 'Domperidone',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Iron Dextran',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Acenocoumarol',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Heparin',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Phytomenadione',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Warfarin',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Enoxaparin',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Iron Dextran',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Erythropoetin',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Tranexamic',
          zone: 10,
          quantity: 8,
        },
      ],
      Z18: [
        {
          stockQuality: 'A Grade',
          sku: 'Tranexamic',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Aprotinin',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Dalteparin',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Erythropoetin',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ethamsylate',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Fondaparinux',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Tranexamic',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Elemental Iron',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Cyanocobalamin',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Nicotinamide',
          zone: 10,
          quantity: 8,
        },
      ],
      Z19: [
        {
          stockQuality: 'A Grade',
          sku: 'Bisoprolol',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ramipril',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Clopidogrel',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Labetalol',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Atorvastatin',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Carvedilol',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Fenofibrate',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Isosorbide',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Mononitrate',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Nebivolol',
          zone: 10,
          quantity: 8,
        },
      ],
      Z20: [
        {
          stockQuality: 'A Grade',
          sku: 'Nicorandil',
          zone: 1,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Nitroglycerin',
          zone: 2,
          quantity: 15,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Perindopril',
          zone: 3,
          quantity: 20,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Prazosin',
          zone: 4,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Glibenclamide',
          zone: 5,
          quantity: 14,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Ranolazine',
          zone: 6,
          quantity: 22,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Rosuvastatin',
          zone: 7,
          quantity: 7,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Simvastatin',
          zone: 8,
          quantity: 10,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Telmisartan',
          zone: 9,
          quantity: 12,
        },
        {
          stockQuality: 'A Grade',
          sku: 'Trimetazidine',
          zone: 10,
          quantity: 8,
        },
      ],
    },
  ];
}
