interface MetadataGridProps {
  role: string;
  timeline: string;
  platform: string;
  surfaces?: string;
  status: string;
}

export function MetadataGrid({ role, timeline, platform, surfaces, status }: MetadataGridProps) {
  const items = [
    { label: 'Role', value: role },
    { label: 'Timeline', value: timeline },
    { label: 'Platform', value: platform },
    ...(surfaces ? [{ label: 'Surfaces', value: surfaces }] : []),
    { label: 'Status', value: status },
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-4">
      {items.map(({ label, value }) => (
        <div key={label}>
          <dt className="font-mono text-[0.8125rem] text-foreground-subtle mb-1">{label}</dt>
          <dd className="text-[0.875rem] text-foreground">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
