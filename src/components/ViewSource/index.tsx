import {useState, useEffect, useCallback, type ReactNode} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

export default function ViewSource({children}: {children: ReactNode}): ReactNode {
  const {metadata} = useDoc();
  const [showSource, setShowSource] = useState(false);
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(false);

  const sourceUrl = metadata.source?.replace('@site/', '/_source/') || '';

  useEffect(() => {
    if (showSource && !source && !loading) {
      setLoading(true);
      fetch(sourceUrl)
        .then(res => {
          if (!res.ok) throw new Error('Failed to load');
          return res.text();
        })
        .then(text => {
          setSource(text);
          setLoading(false);
        })
        .catch(() => {
          setSource('// Error: could not load source file');
          setLoading(false);
        });
    }
  }, [showSource, source, loading, sourceUrl]);

  const toggle = useCallback(() => {
    setShowSource(v => !v);
  }, []);

  return (
    <>
      <div className={styles.bar}>
        <span className={styles.sourceFilename}>
          {showSource ? metadata.source?.replace('@site/', '') : ''}
        </span>
        <button
          className={showSource ? styles.toggleActive : styles.toggle}
          onClick={toggle}
          title="Toggle Markdown source view">
          {'</>'} {showSource ? 'Rendered' : 'Source'}
        </button>
      </div>
      {showSource ? (
        <pre className={styles.sourceBlock}>
          <code>{loading ? 'Loading...' : source}</code>
        </pre>
      ) : children}
    </>
  );
}
