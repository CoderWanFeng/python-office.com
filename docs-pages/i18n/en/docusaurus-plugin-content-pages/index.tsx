import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const FEATURES = [
  {emoji: '📊', title: 'Excel', desc: 'Data generation, merge, split, search, PDF export', to: '/modules/excel/guide'},
  {emoji: '📝', title: 'Word', desc: 'Word/PDF conversion, merge, image extraction', to: '/modules/word/guide'},
  {emoji: '📑', title: 'PDF', desc: 'Conversion, encryption, merge, split, watermark', to: '/modules/pdf/guide'},
  {emoji: '📊', title: 'PPT', desc: 'Convert to PDF, convert to image (long image), merge', to: '/modules/ppt/guide'},
  {emoji: '🖼️', title: 'Image', desc: 'Compression, watermark, QR code, word cloud, cartoonify', to: '/modules/image/guide'},
  {emoji: '📁', title: 'File', desc: 'Batch rename, file management', to: '/modules/file/guide'},
  {emoji: '📧', title: 'Email', desc: 'Auto send/receive emails, attachments, mass send', to: '/modules/email/guide'},
  {emoji: '💬', title: 'WeChat', desc: 'WeChat bot, auto-reply', to: '/modules/wechat/guide'},
  {emoji: '🔍', title: 'OCR', desc: 'Invoice recognition → Excel', to: '/modules/ocr/guide'},
  {emoji: '🎬', title: 'Video', desc: 'Audio/video conversion, watermark, text-to-speech', to: '/modules/video/guide'},
  {emoji: '📝', title: 'Markdown', desc: 'Excel to Markdown', to: '/modules/markdown/guide'},
  {emoji: '🤖', title: 'WorkBuddy', desc: 'AI office assistant, boost daily office efficiency', to: 'https://www.codebuddy.cn/events/invite/?inviteCode=bflfcx96gj'},
  {emoji: '🛠️', title: 'Tools', desc: 'Translation, QR code, password and 10+ other tools', to: '/modules/tools/guide'},
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="python-office"
      description="One line of code for office automation">
      {/* Simple Hero */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #306998 0%, #4B8BBE 100%)',
        color: 'white',
      }}>
        <Heading as="h1" style={{fontSize: '3rem', margin: '0 0 1rem'}}>
          {siteConfig.title}
        </Heading>
        <p style={{fontSize: '1.25rem', margin: '0 0 2rem'}}>
          One line of code for office automation · A one-stop Python library for office automation
        </p>
        <Link
          to="/start/overview"
          style={{
            display: 'inline-block',
            background: '#FFD43B',
            color: '#306998',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700,
            marginRight: '1rem',
          }}>
          🚀 Quick Start
        </Link>
        <Link
          to="/modules/overview"
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#306998',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700,
            marginRight: '1rem',
          }}>
          📦 View Modules
        </Link>
        <Link
          to="https://www.bilibili.com/opus/857901377884520482?spm_id_from=333.1387.0.0"
          style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.18)',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.45)',
            textDecoration: 'none',
            fontWeight: 700,
          }}>
          🎬 Video Tutorial
        </Link>
      </div>

      {/* Feature cards */}
      <div style={{
        maxWidth: '1200px',
        margin: '3rem auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.25rem',
      }}>
        {FEATURES.map((f, i) => (
          <Link
            key={i}
            to={f.to}
            style={{
              display: 'block',
              padding: '1.5rem',
              background: '#f6f8fa',
              borderRadius: '12px',
              border: '1px solid #e1e4e8',
              textDecoration: 'none',
              color: 'inherit',
            }}>
            <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>{f.emoji}</div>
            <h3 style={{color: '#306998', margin: '0 0 0.5rem'}}>{f.title}</h3>
            <p style={{color: '#586069', margin: 0, fontSize: '0.9rem'}}>{f.desc}</p>
          </Link>
        ))}
      </div>
    </Layout>
  );
}