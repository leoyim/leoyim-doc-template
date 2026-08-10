import {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const features = [
  {
    title: '📝 Markdown & MDX',
    desc: 'Write pages in plain Markdown or MDX with JSX components.',
  },
  {
    title: '🔍 View Source',
    desc: 'Every page has a built-in button to show the raw Markdown source.',
  },
  {
    title: '📱 Responsive',
    desc: 'Works on desktop, tablet, and mobile out of the box.',
  },
  {
    title: '🌗 Dark Mode',
    desc: 'Built-in light/dark theme toggle.',
  },
  {
    title: '🔎 Full-text Search',
    desc: 'Instant search across all doc pages.',
  },
  {
    title: '⚡ Static Site',
    desc: 'Pre-rendered HTML — fast to load, easy to deploy anywhere.',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description="Doc home">
      <header style={{textAlign: 'center', padding: '5rem 0 3rem'}}>
        <div className="container">
          <Heading as="h1">{siteConfig.title}</Heading>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--ifm-color-emphasis-600)',
            marginBottom: '2rem',
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {siteConfig.tagline}
          </p>
          <Link
            to="/docs/"
            className="button button--primary button--lg"
            style={{fontWeight: 600}}>
            Browse Doc Pages
          </Link>
        </div>
      </header>
      <main>
        <section style={{padding: '0 0 4rem'}}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
              maxWidth: 900,
              margin: '0 auto',
            }}>
              {features.map((f, i) => (
                <div key={i} style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--ifm-global-radius)',
                  border: '1px solid var(--ifm-color-emphasis-300)',
                  background: 'var(--ifm-background-surface-color)',
                }}>
                  <Heading as="h3" style={{marginBottom: '0.5rem', fontSize: '1.1rem'}}>{f.title}</Heading>
                  <p style={{margin: 0, color: 'var(--ifm-color-emphasis-700)', fontSize: '0.9rem'}}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
