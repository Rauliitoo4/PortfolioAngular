import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level',
  standalone: true
})
export class LevelPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 80) return 'Avanzado';
    if (value >= 60) return 'Intermedio';
    if (value >= 40) return 'Básico';
    return 'Iniciación';
  }
}
