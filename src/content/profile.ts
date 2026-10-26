export const DESIGNING_SINCE = 2020;

export function yearsExperience(): number {
  return new Date().getFullYear() - DESIGNING_SINCE;
}

export function yearsLabel(locale: 'en' | 'ar'): string {
  const n = yearsExperience();
  if (locale === 'ar') {
    const unit = n >= 11 ? 'سنة' : 'سنوات';
    return `أكثر من ${n} ${unit}`;
  }
  return `${n}+`;
}
