import type {ReactNode} from 'react';
import OriginalDocItemFooter from '@theme-original/DocItem/Footer';

export default function DocItemFooter(): ReactNode {
  return (
    <>
      <div className="doc-bottom-ad">
        <div className="doc-bottom-ad__badge">AI 办公效率课</div>
        <div className="doc-bottom-ad__content">
          <strong>35 讲 AI 自动化办公实战课</strong>
          <span>用 Python + AI 处理 Excel、Word、PDF、邮件等办公场景。</span>
        </div>
        <a
          className="doc-bottom-ad__button"
          href="https://www.bilibili.com/cheese/play/ss982042944"
          target="_blank"
          rel="noopener noreferrer">
          去学习
        </a>
      </div>
      <OriginalDocItemFooter />
    </>
  );
}
