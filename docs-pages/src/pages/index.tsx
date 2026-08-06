import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

/* Lucide 风格 SVG 图标（24x24 stroke，替代 emoji，颜色跟随主题） */
function Icon({name}: {name: string}): ReactNode {
  const paths: Record<string, ReactNode> = {
    table: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M12 3v18" />
      </>
    ),
    fileText: (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </>
    ),
    shieldFile: (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M12 11v6" />
        <path d="M9 14h6" />
      </>
    ),
    presentation: (
      <>
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </>
    ),
    image: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </>
    ),
    folder: (
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    messageCircle: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
    scanText: (
      <>
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <path d="M7 8h8" />
        <path d="M7 12h10" />
        <path d="M7 16h6" />
      </>
    ),
    video: (
      <>
        <path d="m22 8-6 4 6 4V8Z" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </>
    ),
    fileCode: (
      <>
        <path d="M10 12.5 8 15l2 2.5" />
        <path d="m14 12.5 2 2.5-2 2.5" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      </>
    ),
    bot: (
      <>
        <path d="M12 8V4H8" />
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </>
    ),
    wrench: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const FEATURES = [
  {icon: 'table', title: 'Excel', descId: 'homepage.feature.excel.desc', descMsg: '数据生成、合并、拆分、搜索、PDF 导出', to: '/modules/excel/guide'},
  {icon: 'fileText', title: 'Word', descId: 'homepage.feature.word.desc', descMsg: 'Word/PDF 转换、合并、图片提取', to: '/modules/word/guide'},
  {icon: 'shieldFile', title: 'PDF', descId: 'homepage.feature.pdf.desc', descMsg: '转换、加解密、合并、拆分、水印', to: '/modules/pdf/guide'},
  {icon: 'presentation', title: 'PPT', descId: 'homepage.feature.ppt.desc', descMsg: '转 PDF、转图片（长图）、合并', to: '/modules/ppt/guide'},
  {icon: 'image', title: 'Image', descId: 'homepage.feature.image.desc', descMsg: '压缩、水印、二维码、词云、卡通化', to: '/modules/image/guide'},
  {icon: 'folder', title: 'File', descId: 'homepage.feature.file.desc', descMsg: '批量重命名、文件管理', to: '/modules/file/guide'},
  {icon: 'mail', title: 'Email', descId: 'homepage.feature.email.desc', descMsg: '自动收发邮件、附件、群发', to: '/modules/email/guide'},
  {icon: 'messageCircle', title: 'WeChat', descId: 'homepage.feature.wechat.desc', descMsg: '微信机器人、自动回复', to: '/modules/wechat/guide'},
  {icon: 'scanText', title: 'OCR', descId: 'homepage.feature.ocr.desc', descMsg: '发票识别 → Excel', to: '/modules/ocr/guide'},
  {icon: 'video', title: 'Video', descId: 'homepage.feature.video.desc', descMsg: '音视频转换、加水印、文本转语音', to: '/modules/video/guide'},
  {icon: 'fileCode', title: 'Markdown', descId: 'homepage.feature.markdown.desc', descMsg: 'Excel 转 Markdown', to: '/modules/markdown/guide'},
  {icon: 'bot', title: 'WorkBuddy', descId: 'homepage.feature.workbuddy.desc', descMsg: 'AI 办公助手，提升日常办公效率', to: 'https://www.codebuddy.cn/events/invite/?inviteCode=bflfcx96gj'},
  {icon: 'wrench', title: 'Tools', descId: 'homepage.feature.tools.desc', descMsg: '翻译、二维码、密码等 10+ 工具', to: '/modules/tools/guide'},
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="python-office"
      description={translate({id: 'homepage.description', message: '一行代码搞定自动化办公'})}>
      {/* Hero */}
      <header className={styles.heroBanner}>
        <div className="container">
          <span className={styles.heroBadge}>
            {translate({id: 'homepage.badge', message: '开源 · 38万+ 下载 · GitHub 1200+ Star'})}
          </span>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            {translate({id: 'homepage.tagline', message: siteConfig.tagline})}
          </p>
          <div className={styles.buttons}>
            <Link className={styles.heroBtnPrimary} to="/start/overview">
              {translate({id: 'homepage.cta.start', message: '快速开始'})}
            </Link>
            <Link className={styles.heroBtnSecondary} to="/modules/overview">
              {translate({id: 'homepage.cta.modules', message: '查看模块'})}
            </Link>
            <Link
              className={styles.heroBtnGhost}
              to="https://www.bilibili.com/opus/857901377884520482?spm_id_from=333.1387.0.0">
              {translate({id: 'homepage.cta.video', message: '视频教程'})}
            </Link>
          </div>

          {/* pip install 代码示例 */}
          <div className={styles.codeBox}>
            <div className={styles.codeBoxHeader}>
              <span className={styles.dot} style={{background: '#ff5f57'}} />
              <span className={styles.dot} style={{background: '#febc2e'}} />
              <span className={styles.dot} style={{background: '#28c840'}} />
              <span className={styles.codeBoxTitle}>terminal</span>
            </div>
            <pre className={styles.codeBlock}>
              <span className={styles.comment}>
                # {translate({id: 'homepage.code.install', message: '安装'})}
              </span>
              {'\n'}
              <span className={styles.func}>pip</span> install python-office
              {'\n\n'}
              <span className={styles.comment}>
                # {translate({id: 'homepage.code.example', message: '一行代码：PDF 转 Word'})}
              </span>
              {'\n'}
              <span className={styles.keyword}>import</span> office
              {'\n'}
              office.pdf.<span className={styles.func}>pdf2docx</span>(file_path=
              <span className={styles.string}>'test.pdf'</span>)
            </pre>
          </div>
        </div>
      </header>

      {/* 功能模块 */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <Heading as="h2">
              {translate({id: 'homepage.features.title', message: '功能模块'})}
            </Heading>
            <p>
              {translate({id: 'homepage.features.subtitle', message: '13 大模块，覆盖日常办公自动化全场景'})}
            </p>
          </div>
          <div className={styles.featureGrid}>
            {FEATURES.map((f) => (
              <Link key={f.title} to={f.to} className="feature-card">
                <span className={styles.featureIcon}>
                  <Icon name={f.icon} />
                </span>
                <Heading as="h3">{f.title}</Heading>
                <p>{translate({id: f.descId, message: f.descMsg})}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <Heading as="h2">
              {translate({id: 'homepage.cta.title', message: '准备好提升办公效率了吗？'})}
            </Heading>
            <p>
              {translate({id: 'homepage.cta.desc', message: '一条命令完成安装，一行代码搞定自动化办公。'})}
            </p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/start/overview">
                {translate({id: 'homepage.cta.start', message: '快速开始'})}
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://github.com/CoderWanFeng/python-office">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
