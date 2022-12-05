import { TemplateRef } from '@angular/core';

export interface Tab {
  name: string;
  contentRef: TemplateRef<any>;
  color?: string;
  isActive?: boolean;
}
