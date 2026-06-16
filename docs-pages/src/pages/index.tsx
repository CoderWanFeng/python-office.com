import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const FEATURES = [
  {emoji: '📊', title: 'Excel', desc: '数据生成、合并、拆分、搜索、PDF 导出', to: '/modules/excel/guide'},
  {emoji: '📝', title: 'Word', desc: 'Word/PDF 转换、合并、图片提取', to: '/modules/word/guide'},
  {emoji: '📑', title: 'PDF', desc: '转换、加解密、合并、拆分、水印', to: '/modules/pdf/guide'},
  {emoji: '📊', title: 'PPT', desc: '转 PDF、转图片（长图）、合并', to: '/modules/ppt/guide'},
  {emoji: '🖼️', title: 'Image', desc: '压缩、水印、二维码、词云、卡通化', to: '/modules/image/guide'},
  {emoji: '📁', title: 'File', desc: '批量重命名、文件管理', to: '/modules/file/guide'},
  {emoji: '📧', title: 'Email', desc: '自动收发邮件、附件、群发', to: '/modules/email/guide'},
  {emoji: '💬', title: 'WeChat', desc: '微信机器人、自动回复', to: '/modules/wechat/guide'},
  {emoji: '🔍', title: 'OCR', desc: '发票识别 → Excel', to: '/modules/ocr/guide'},
  {emoji: '🎬', title: 'Video', desc: '音视频转换、加水印、文本转语音', to: '/modules/video/guide'},
  {emoji: '📝', title: 'Markdown', desc: 'Excel 转 Markdown', to: '/modules/markdown/guide'},
  {emoji: '🤖', title: 'WorkBuddy', desc: 'AI 办公助手，提升日常办公效率', to: 'https://www.codebuddy.cn/events/invite/?inviteCode=bflfcx96gj'},
  {emoji: '🛠️', title: 'Tools', desc: '翻译、二维码、密码等 10+ 工具', to: '/modules/tools/guide'},
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="python-office"
      description="一行代码搞定自动化办公">
      {/* 简单版 Hero */}
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
          {siteConfig.tagline}
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
          🚀 快速开始
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
          📦 查看模块
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
          🎬 视频教程
        </Link>
      </div>

      {/* 功能卡片 */}
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
