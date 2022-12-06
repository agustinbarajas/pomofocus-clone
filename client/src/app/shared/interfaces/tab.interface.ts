import { TemplateRef } from '@angular/core';

export interface Tab {
  id: number;
  name: string;
  templateRef: TemplateRef<HTMLElement>;
  color?: string;
  isActive?: boolean;
}
