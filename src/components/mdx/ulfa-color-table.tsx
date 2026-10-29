export function UlfaColorTable() {
  const themes = [
    { name: 'Slate / أزرق', lightPrimary: '#2E5E7E', lightRatio: '7.0:1', darkPrimary: '#8DB8D6', darkRatio: '8.9:1' },
    { name: 'Forest / أخضر', lightPrimary: '#2F6B57', lightRatio: '6.2:1', darkPrimary: '#8CCDB4', darkRatio: '10.3:1' },
    { name: 'Rose / وردي', lightPrimary: '#8E4A57', lightRatio: '6.4:1', darkPrimary: '#E3A9B4', darkRatio: '9.4:1' },
    { name: 'Ochre / عسلي', lightPrimary: '#7A5A16', lightRatio: '6.4:1', darkPrimary: '#DDBB6E', darkRatio: '10.2:1' },
  ];

  return (
    <div className="my-10 max-w-[680px] mx-auto">
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-[0.875rem] leading-[1.5]">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="text-start px-4 py-3 font-medium text-foreground">Theme</th>
              <th className="text-start px-4 py-3 font-medium text-foreground">Light primary</th>
              <th className="text-start px-4 py-3 font-medium text-foreground text-[0.75rem]">White text</th>
              <th className="text-start px-4 py-3 font-medium text-foreground">Dark primary</th>
              <th className="text-start px-4 py-3 font-medium text-foreground text-[0.75rem]">Dark text</th>
            </tr>
          </thead>
          <tbody>
            {themes.map((t, i) => (
              <tr key={t.name} className={i < themes.length - 1 ? 'border-b border-border' : ''}>
                <td className="px-4 py-3 text-foreground font-medium">{t.name}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-4 rounded-full shrink-0"
                      style={{ background: t.lightPrimary }}
                      aria-hidden
                    />
                    <span className="text-[0.75rem] text-foreground-muted">{t.lightPrimary}</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-[0.75rem] text-foreground-muted">{t.lightRatio}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-4 rounded-full shrink-0 border border-border"
                      style={{ background: t.darkPrimary }}
                      aria-hidden
                    />
                    <span className="text-[0.75rem] text-foreground-muted">{t.darkPrimary}</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-[0.75rem] text-foreground-muted">{t.darkRatio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[0.875rem] leading-[1.65] text-foreground-muted">
        Session type colors (workshop, ongoing, one-time) and Live stay the same in every theme, and every badge carries a word, not only a color.
      </p>
    </div>
  );
}
