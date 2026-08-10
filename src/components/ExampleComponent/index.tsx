import type {ReactNode} from 'react';

export default function ExampleComponent(): ReactNode {
  return (
    <div style={{
      padding: '1rem',
      border: '1px solid var(--ifm-color-primary)',
      borderRadius: 'var(--ifm-global-radius)',
      background: 'var(--ifm-color-primary-contrast-background)',
      margin: '1rem 0',
    }}>
      This is a custom React component rendered inside an MDX doc page.
    </div>
  );
}
