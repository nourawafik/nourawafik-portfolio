export const social = [
  { id: 'linkedin',  label: 'LinkedIn',  href: 'https://linkedin.com/in/nourawafik', visible: true  },
  { id: 'behance',   label: 'Behance',   href: 'https://www.behance.net/nourawafik', visible: false },
  { id: 'instagram', label: 'Instagram', href: '',                                    visible: false },
] as const;

export const visibleSocial = social.filter(s => s.visible);
