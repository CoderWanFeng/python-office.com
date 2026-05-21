export interface AutomationTool {
  id: string;
  name: string;
  description: string;
  descriptionForAI: string;
  category: string;
  capabilities: string[];
  useCases: string[];
  codeExample: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  popularity: number;
}

export const AUTOMATION_DATA: AutomationTool[] = [
  {
    id: 'excel-automation',
    name: 'Excel办公自动化',
    description: 'Python操作Excel的多种方法',
    descriptionForAI: '使用Python进行Excel自动化，包括读取、写入、格式化、使用pandas和openpyxl等库。适合数据处理和报表生成。',
    category: '办公自动化',
    capabilities: ['读取Excel', '写入Excel', '数据清洗', '报表生成'],
    useCases: ['数据整理', '报表自动化', '格式转换'],
    codeExample: 'import pandas as pd\ndf = pd.read_excel("data.xlsx")\ndf.to_excel("output.xlsx")',
    difficulty: 'easy',
    tags: ['Excel', 'pandas', '数据处理'],
    popularity: 95
  },
  {
    id: 'pdf-processing',
    name: 'PDF处理',
    description: 'Python处理PDF文件的各种操作',
    descriptionForAI: '使用Python处理PDF文件，包括读取文本、合并分割、添加水印、加密解密等。使用PyPDF2或pypdf等库。',
    category: '文档处理',
    capabilities: ['读取PDF', '合并分割', '添加水印', '加密解密'],
    useCases: ['合同处理', '文档合并', '批量转换'],
    codeExample: 'from PyPDF2 import PdfMerger\nmerger = PdfMerger()\nmerger.append("file1.pdf")\nmerger.append("file2.pdf")\nmerger.write("merged.pdf")',
    difficulty: 'medium',
    tags: ['PDF', 'pypdf', '文档处理'],
    popularity: 88
  },
  {
    id: 'email-automation',
    name: '邮件自动化',
    description: 'Python自动收发邮件',
    descriptionForAI: '使用Python自动化邮件处理，包括发送邮件、接收邮件、批量发送、使用smtplib和imaplib库。支持附件和HTML邮件。',
    category: '通讯自动化',
    capabilities: ['发送邮件', '接收邮件', '批量发送', '附件处理'],
    useCases: ['定时报告', '客户通知', '邮件营销'],
    codeExample: 'import smtplib\nfrom email.mime.text import MIMEText\nmsg = MIMEText("内容")\nmsg["Subject"] = "标题"',
    difficulty: 'easy',
    tags: ['邮件', 'smtplib', '自动化'],
    popularity: 90
  },
  {
    id: 'web-scraping',
    name: '网页爬虫',
    description: 'Python爬取网页数据',
    descriptionForAI: '使用Python进行网页数据爬取，包括requests获取页面、BeautifulSoup解析HTML、Selenium处理动态内容。',
    category: '数据采集',
    capabilities: ['网页抓取', '数据解析', '动态渲染', '反爬应对'],
    useCases: ['数据采集', '价格监控', '竞品分析'],
    codeExample: 'import requests\nfrom bs4 import BeautifulSoup\nr = requests.get(url)\nsoup = BeautifulSoup(r.text, "html.parser")',
    difficulty: 'medium',
    tags: ['爬虫', 'requests', 'BeautifulSoup'],
    popularity: 92
  },
  {
    id: 'image-processing',
    name: '图片处理',
    description: 'Python批量处理图片',
    descriptionForAI: '使用Python进行图片处理，包括缩放、裁剪、滤镜、水印等。使用Pillow库，简单易用。',
    category: '图像处理',
    capabilities: ['缩放裁剪', '添加水印', '格式转换', '批量处理'],
    useCases: ['图片压缩', '水印添加', '格式转换'],
    codeExample: 'from PIL import Image\nimg = Image.open("photo.jpg")\nimg.thumbnail((800, 600))\nimg.save("output.jpg")',
    difficulty: 'easy',
    tags: ['Pillow', '图片', '批量处理'],
    popularity: 85
  },
  {
    id: 'word-automation',
    name: 'Word自动化',
    description: 'Python操作Word文档',
    descriptionForAI: '使用Python操作Word文档，包括创建、读取、编辑、格式设置等。使用python-docx库。',
    category: '办公自动化',
    capabilities: ['创建文档', '内容编辑', '格式设置', '模板填充'],
    useCases: ['报告生成', '合同处理', '批量文档'],
    codeExample: 'from docx import Document\ndoc = Document()\ndoc.add_heading("标题", 0)\ndoc.add_paragraph("内容")\ndoc.save("output.docx")',
    difficulty: 'medium',
    tags: ['Word', 'docx', '文档处理'],
    popularity: 87
  },
  {
    id: 'data-visualization',
    name: '数据可视化',
    description: 'Python数据可视化图表',
    descriptionForAI: '使用Python进行数据可视化，包括matplotlib、seaborn、plotly等库。生成各种统计图表。',
    category: '数据展示',
    capabilities: ['折线图', '柱状图', '饼图', '交互图表'],
    useCases: ['数据分析', '报表展示', '趋势分析'],
    codeExample: 'import matplotlib.pyplot as plt\nplt.plot(x, y)\nplt.title("标题")\nplt.savefig("chart.png")',
    difficulty: 'easy',
    tags: ['matplotlib', 'seaborn', '可视化'],
    popularity: 93
  },
  {
    id: 'file-automation',
    name: '文件自动化',
    description: 'Python文件和文件夹操作',
    descriptionForAI: '使用Python进行文件和文件夹操作，包括复制、移动、重命名、批量处理等。使用os和shutil库。',
    category: '系统自动化',
    capabilities: ['文件复制', '批量重命名', '文件夹管理', '路径处理'],
    useCases: ['文件整理', '批量重命名', '备份管理'],
    codeExample: 'import os, shutil\nshutil.copy("src.txt", "dst.txt")\nos.rename("old.txt", "new.txt")',
    difficulty: 'easy',
    tags: ['文件', 'os', 'shutil'],
    popularity: 89
  }
];
