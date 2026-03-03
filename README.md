# 🍬 甜蜜实验室 - 完整版（前后端）

支持双模式切换：纯前端模式 + 后端 API 模式

---

## 📁 文件结构

```
sweet-lab/
├── web/                    # 纯前端版本（可以直接部署 GitHub Pages）
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── web-full/               # 完整版（支持后端）
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md           # 本文件
├── backend/                # 后端 API
│   ├── app.py             # Flask 应用
│   ├── requirements.txt   # Python 依赖
│   └── uploads/           # 上传文件目录（自动创建）
└── core/                   # 核心模块（Python）
    ├── poem_generator.py
    ├── love_generator.py
    ├── ...
```

---

## 🚀 部署方案

### 方案一：纯前端 + GitHub Pages（最简单）

**使用 `web/` 目录的文件**

1. 把 `web/` 下的 3 个文件推送到 GitHub
2. Settings → Pages → 选择 `master` 分支
3. 访问：`https://你的用户名.github.io/仓库名/`

**优点**：
- ✅ 完全免费
- ✅ 部署简单
- ✅ 不需要服务器

**缺点**：
- ❌ 没有头像风格化功能
- ❌ 功能相对简单

---

### 方案二：完整版 - Vercel（推荐）

**使用 `web-full/` + `backend/`**

#### 第一步：部署后端到 Vercel

1. 把整个项目推送到 GitHub
2. 去 https://vercel.com 导入项目
3. 配置：
   - **Framework Preset**: `Other`
   - **Build Command**: 留空
   - **Output Directory**: 留空
   - **Install Command**: `pip install -r sweet-lab/backend/requirements.txt`
4. 点击 **Deploy**

#### 第二步：部署前端到 Vercel

1. 在同一个项目中配置
2. 或者单独部署 `web-full/` 目录
3. 修改 `web-full/script.js` 中的 `backendUrl` 为你的 Vercel 后端地址

**优点**：
- ✅ 免费额度够用
- ✅ 自动部署
- ✅ 支持 Serverless Functions

---

### 方案三：完整版 - PythonAnywhere（适合 Python）

#### 1. 注册 PythonAnywhere

去 https://www.pythonanywhere.com 注册免费账号

#### 2. 上传代码

- 用 Git 克隆或者直接上传文件
- 把代码放到 `~/sweet-lab/`

#### 3. 创建虚拟环境

```bash
mkvirtualenv sweet-lab --python=/usr/bin/python3.9
workon sweet-lab
cd ~/sweet-lab/backend
pip install -r requirements.txt
```

#### 4. 配置 Web App

- 在 PythonAnywhere 控制面板点击 **Add a new web app**
- 选择 **Flask**
- 选择 **Python 3.9**
- 路径设置为：`/home/你的用户名/sweet-lab/backend/app.py`

#### 5. 配置 WSGI 文件

编辑 WSGI 文件：
```python
import sys
path = '/home/你的用户名/sweet-lab'
if path not in sys.path:
    sys.path.append(path)

from backend.app import app as application
```

#### 6. 重新加载 Web App

点击 **Reload** 按钮

#### 7. 部署前端

把 `web-full/` 下的文件也部署，或者用 GitHub Pages 托管前端

**优点**：
- ✅ 专门为 Python 设计
- ✅ 免费额度够用
- ✅ 部署简单

---

## 🎮 本地运行

### 运行后端

```bash
cd sweet-lab/backend
pip install -r requirements.txt
python app.py
```

后端会运行在：http://localhost:5000

### 运行前端

直接用浏览器打开 `web-full/index.html`

点击右上角的 **🔄** 按钮切换到后端模式

---

## 🔧 配置说明

### 修改后端地址

编辑 `web-full/script.js`：

```javascript
const CONFIG = {
    backendUrl: 'https://你的-vercel-domain.vercel.app/api',
    useBackend: false
};
```

---

## ✅ 功能对比

| 功能 | 纯前端模式 | 后端模式 |
|------|-----------|---------|
| 藏头诗生成 | ✅ | ✅ |
| 情话生成 | ✅ | ✅ |
| 聊天话术 | ✅ | ✅ |
| 契合测试 | ✅ | ✅ |
| 情侣名/外号 | ✅ | ✅ |
| 真心话大冒险 | ✅ | ✅ |
| 每日抽签 | ✅ | ✅ |
| 头像风格化 | ❌ | ✅ |

---

## 📄 许可证

MIT License - 随便用，随便改~

---

**祝你玩得开心！** 🍬💖
