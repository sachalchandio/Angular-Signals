import { Component, computed } from '@angular/core';
import { NgFor, NgClass, NgIf, AsyncPipe } from '@angular/common';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'sw-vehicle-list',
  standalone: true,
  imports: [AsyncPipe, NgClass, NgFor, NgIf],
  templateUrl: './vehicle-list.component.html'
})
export class VehicleListComponent {
  pageTitle = 'Vehicles';
  errorMessage = '';

  // Component signals
  vehicles = computed(() => {
    try {
      return this.vehicleService.vehicles();
    } catch (e) {
      this.errorMessage = typeof e === 'string'? e : 'Error';
      return [];
    }
  });
  selectedVehicle = this.vehicleService.selectedVehicle;

  constructor(private vehicleService: VehicleService) { }

  // When a vehicle is selected, emit the selected vehicle name
  onSelected(vehicleName: string): void {
    this.vehicleService.vehicleSelected(vehicleName);
  }

}