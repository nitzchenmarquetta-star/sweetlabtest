// 甜蜜实验室 - 完整版（支持纯前端 + 后端 API）

// ==================== 配置 ====================

const CONFIG = {
    backendUrl: '/api',  // 后端 API 地址
    useBackend: false     // 默认使用纯前端模式
};

// ==================== 纯前端数据（保持不变）====================

const poemStyles = {
    romantic: {
        name: '浪漫古风',
        templates: [
            '{name1}风吹过小桥边，{name2}月照佳人影自怜。\n{name3}花开有意随流水，{name4}春色无边醉眼前。',
            '{name1}山高水远路漫漫，{name2}相思两地梦魂牵。\n{name3}愿得一心长相守，{name4}不负韶华不负缘。'
        ]
    },
    cute: {
        name: '可爱卖萌',
        templates: [
            '{name1}是一只小可爱，{name2}蹦蹦跳跳真厉害。\n{name3}每天都要笑哈哈，{name4}开心快乐最重要！',
            '{name1}小可爱萌萌哒，{name2}眼睛眨眨会说话。\n{name3}今天也要加油哦，{name4}美好祝福送给你~'
        ]
    },
    funny: {
        name: '搞笑搞怪',
        templates: [
            '{name1}吃饭不洗碗，{name2}躺在床上玩手机。\n{name3}虽然有点小懒惰，{name4}但是依然很可爱！',
            '{name1}是个大吃货，{name2}看见美食就开心。\n{name3}吃完这顿想下顿，{name4}快乐生活每一天~'
        ]
    },
    modern: {
        name: '现代文艺',
        templates: [
            '{name1}在城市的街头，{name2}寻找着诗和远方。\n{name3}时光荏苒匆匆过，{name4}愿你初心永不忘。',
            '{name1}是夜空中的星，{name2}照亮了我的旅程。\n{name3}感谢遇见你真好，{name4}温暖陪伴在心中。'
        ]
    }
};

const loveStyles = {
    romantic: {
        name: '温柔浪漫',
        templates: [
            '想和你一起看日出日落，想和你一起走过四季变换。有你在身边，每一天都是情人节。',
            '你的笑容是我见过最美的风景，你的声音是我听过最动听的旋律。喜欢你，是我做过最正确的决定。'
        ]
    },
    funny: {
        name: '搞笑搞怪',
        templates: [
            '你知道你和星星的区别吗？星星在天上，而你在我心里... 顺便问一下，你什么时候下凡的？',
            '我觉得你应该去买彩票，因为遇见你花光了我所有的运气... 不过没关系，能用运气换到你，值了！'
        ]
    },
    cute: {
        name: '可爱卖萌',
        templates: [
            '今天也超级喜欢你哦！想要抱抱，想要贴贴，想要和你一直在一起~',
            '你是最可爱的！不接受反驳！反驳的话... 反驳无效！你最可爱！'
        ]
    },
    direct: {
        name: '直球表白',
        templates: [
            '我喜欢你，很喜欢很喜欢的那种喜欢。想和你在一起，可以吗？',
            '没有什么特别的理由，就是喜欢你。想做你的男朋友/女朋友，可以吗？'
        ]
    },
    literary: {
        name: '文艺小清新',
        templates: [
            '于千万人之中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了。',
            '你是一树一树的花开，是燕在梁间呢喃，你是爱，是暖，是希望，你是人间的四月天！'
        ]
    }
};

const earthyFlirts = [
    '你知道我的缺点是什么吗？是缺点你。',
    '你是哪里人？你是我的心上人。',
    '我想吃一碗面，你的心里面。',
    '你累不累啊？你已经在我脑子里跑了一整天了。',
    '我有一个超能力，超级喜欢你。',
    '你知道我想喝什么吗？想呵护你。',
    '你是属什么的？你是属于我的。'
];

const replyStyles = {
    flirty: [
        '在想你呀，你呢？',
        '没干嘛，就是在等你找我聊天~',
        '在猜你什么时候会找我，没想到你真的来了！'
    ],
    cute: [
        '在发呆呢，你找我有什么事呀？',
        '刚刚在想今天要吃什么好吃的！',
        '在摸鱼中，快来陪我一起~'
    ],
    funny: [
        '在思考人生大事，比如今天吃什么！',
        '在跟你聊天呀，笨蛋~',
        '在想怎么回复你才能显得我很聪明！'
    ],
    normal: [
        '没干嘛，你呢？',
        '在呢，怎么了？',
        '刚忙完，你找我有事吗？'
    ]
};

const topicStarters = {
    first_chat: [
        '你平时喜欢做什么呀？',
        '周末一般都怎么安排？',
        '喜欢看电影吗？最近有什么好看的推荐？',
        '你喜欢什么类型的音乐？'
    ],
    ambiguous: [
        '今天有没有发生什么有趣的事？',
        '给你看个好玩的东西！',
        '这家店看起来不错，要不要一起去试试？',
        '今天天气真好，适合出去走走~'
    ],
    couple: [
        '今天有没有想我？',
        '晚上想吃什么？我做给你吃~',
        '周末我们去哪里约会呀？',
        '给你准备了一个小惊喜，猜猜是什么？'
    ]
};

const coupleNames = [
    '{name1}和{name2}的小窝',
    '{name1}的心属于{name2}',
    '甜蜜的{name1}&{name2}',
    '{name1}的{name2}宝贝',
    '{name2}是{name1}的光'
];

const nicknames = [
    '{name}小可爱',
    '{name}小笨蛋',
    '{name}宝贝',
    '小{name}',
    '{name}同学'
];

const truthQuestions = [
    '你最长的一次暗恋持续了多久？',
    '你做过最丢脸的事是什么？',
    '你理想中的另一半是什么样的？',
    '你第一次接吻是什么时候？',
    '你有没有偷偷喜欢过我？'
];

const dareTasks = [
    '给你喜欢的人发一条我想你',
    '对着窗外大喊三声我是傻瓜',
    '做一个最丑的鬼脸自拍',
    '跳一段舞录下来',
    '用屁股写自己的名字'
];

const luckyItems = [
    { item: '大吉', desc: '今天运气超级好，做什么都顺利！', emoji: '🍀' },
    { item: '中吉', desc: '今天运气不错，会有好事发生~', emoji: '✨' },
    { item: '小吉', desc: '今天平平安安，也是一种幸福', emoji: '🌸' },
    { item: '末吉', desc: '今天可能会有点小挫折，但没关系，加油！', emoji: '💪' }
];

// ==================== 工具函数 ====================

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getChar(name, index) {
    return name[index] || '你';
}

function randomScore(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ==================== 模式切换 ====================

function toggleMode() {
    CONFIG.useBackend = !CONFIG.useBackend;
    updateModeBadge();
    
    if (CONFIG.useBackend) {
        checkBackendHealth();
    }
}

function updateModeBadge() {
    const badge = document.getElementById('mode-badge');
    const text = document.getElementById('mode-text');
    
    if (CONFIG.useBackend) {
        badge.className = 'mode-badge backend';
        text.textContent = '后端模式';
        document.querySelectorAll('.backend-only').forEach(el => el.style.display = 'block');
    } else {
        badge.className = 'mode-badge frontend';
        text.textContent = '纯前端模式';
        document.querySelectorAll('.backend-only').forEach(el => el.style.display = 'none');
    }
}

async function checkBackendHealth() {
    try {
        const response = await fetch(`${CONFIG.backendUrl}/health`);
        const data = await response.json();
        if (data.status === 'ok') {
            alert('✅ 后端连接成功！');
        }
    } catch (e) {
        alert('⚠️ 无法连接后端，将使用纯前端模式');
        CONFIG.useBackend = false;
        updateModeBadge();
    }
}

// ==================== Tab 切换 ====================

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

// ==================== API 调用辅助函数 ====================

async function callApi(endpoint, method = 'POST', data = null) {
    const url = `${CONFIG.backendUrl}${endpoint}`;
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    if (data && method !== 'GET') {
        options.body = JSON.stringify(data);
    }
    
    const response = await fetch(url, options);
    return await response.json();
}

// ==================== 藏头诗生成 ====================

async function generatePoem() {
    const name = document.getElementById('poem-name').value.trim();
    const style = document.getElementById('poem-style').value;
    
    if (!name || name.length < 2 || name.length > 4) {
        document.getElementById('poem-result').innerHTML = `
            <h3>❌ 请输入2-4个字的名字</h3>
        `;
        return;
    }
    
    let result;
    
    if (CONFIG.useBackend) {
        try {
            result = await callApi('/poem', 'POST', { name, style });
        } catch (e) {
            result = generatePoemFrontend(name, style);
        }
    } else {
        result = generatePoemFrontend(name, style);
    }
    
    if (result.success) {
        document.getElementById('poem-result').innerHTML = `
            <h3>✨ ${result.style_name || poemStyles[style].name}</h3>
            <div class="content">${result.poem}</div>
        `;
    } else {
        document.getElementById('poem-result').innerHTML = `
            <h3>❌ 失败</h3>
            <div class="content">${result.error}</div>
        `;
    }
}

function generatePoemFrontend(name, style) {
    const styleData = poemStyles[style];
    let template = randomChoice(styleData.templates);
    
    for (let i = 0; i < 4; i++) {
        template = template.replace(new RegExp(`\\{name${i+1}\\}`, 'g'), getChar(name, i));
    }
    
    return {
        success: true,
        style_name: styleData.name,
        poem: template
    };
}

// ==================== 情话生成 ====================

async function generateLove() {
    const name = document.getElementById('love-name').value.trim();
    const style = document.getElementById('love-style').value;
    const scene = document.getElementById('love-scene').value;
    
    let result;
    
    if (CONFIG.useBackend) {
        try {
            result = await callApi('/love', 'POST', { name, style, scene });
        } catch (e) {
            result = generateLoveFrontend(name, style, scene);
        }
    } else {
        result = generateLoveFrontend(name, style, scene);
    }
    
    if (result.success) {
        document.getElementById('love-result').innerHTML = `
            <h3>💕 ${result.style_name || loveStyles[style].name}</h3>
            <div class="content">${result.text}</div>
        `;
    } else {
        document.getElementById('love-result').innerHTML = `
            <h3>❌ 失败</h3>
            <div class="content">${result.error}</div>
        `;
    }
}

function generateLoveFrontend(name, style, scene) {
    const styleData = loveStyles[style];
    let text = randomChoice(styleData.templates);
    
    if (name) {
        text = text.replace(/你/g, name);
    }
    
    return {
        success: true,
        style_name: styleData.name,
        text
    };
}

// ==================== 聊天话术 ====================

async function generateEarthy() {
    hideAllSubForms();
    
    let result;
    
    if (CONFIG.useBackend) {
        try {
            result = await callApi('/chat/earthy', 'GET');
        } catch (e) {
            result = generateEarthyFrontend();
        }
    } else {
        result = generateEarthyFrontend();
    }
    
    const flirts = result.flirts || result;
    document.getElementById('chat-result').innerHTML = `
        <h3>😂 土味情话</h3>
        <div class="content">${flirts.slice(0, 3).map((f, i) => `${i+1}. ${f}`).join('\n\n')}</div>
    `;
}

function generateEarthyFrontend() {
    const flirts = [];
    for (let i = 0; i < 3; i++) {
        flirts.push(randomChoice(earthyFlirts));
    }
    return { flirts };
}

function showReplyForm() {
    hideAllSubForms();
    document.getElementById('reply-form').classList.remove('hidden');
}

function showStarterForm() {
    hideAllSubForms();
    document.getElementById('starter-form').classList.remove('hidden');
}

function hideAllSubForms() {
    document.querySelectorAll('.sub-form').forEach(form => form.classList.add('hidden'));
}

async function generateReply() {
    const message = document.getElementById('chat-message').value;
    const style = document.getElementById('chat-style').value;
    
    let result;
    
    if (CONFIG.useBackend) {
        try {
            result = await callApi('/chat/reply', 'POST', { message, style });
        } catch (e) {
            result = generateReplyFrontend(style);
        }
    } else {
        result = generateReplyFrontend(style);
    }
    
    const replies = result.replies || result;
    document.getElementById('chat-result').innerHTML = `
        <h3>💭 高情商回复</h3>
        <div class="content">${replies.map((r, i) => `${i+1}. ${r}`).join('\n\n')}</div>
    `;
}

function generateReplyFrontend(style) {
    return { replies: replyStyles[style] };
}

async function generateStarter() {
    const scene = document.getElementById('chat-scene').value;
    
    let result;
    
    if (CONFIG.useBackend) {
        try {
            result = await callApi('/chat/starter', 'POST', { scene });
        } catch (e) {
            result = generateStarterFrontend(scene);
        }
    } else {
        result = generateStarterFrontend(scene);
    }
    
    const starters = result.starters || result;
    document.getElementById('chat-result').innerHTML = `
        <h3>🎯 话题开场白</h3>
        <div class="content">${starters.map((s, i) => `${i+1}. ${s}`).join('\n\n')}</div>
    `;
}

function generateStarterFrontend(scene) {
    return { starters: topicStarters[scene] };
}

// ==================== 契合测试 ====================

async function generateTest() {
    const name1 = document.getElementById('test-name1').value.trim();
    const name2 = document.getElementById('test-name2').value.trim();
    const type = document.getElementById('test-type').value;
    
    if (!name1 || !name2) {
        document.getElementById('test-result').innerHTML = `
            <h3>❌ 请输入两个人的名字</h3>
        `;
        return;
    }
    
    let result;
    
    if (CONFIG.useBackend) {
        try {
            result = await callApi('/test', 'POST', { name1, name2, type });
        } catch (e) {
            result = generateTestFrontend(name1, name2, type);
        }
    } else {
        result = generateTestFrontend(name1, name2, type);
    }
    
    const typeName = type === 'romantic' ? '爱情' : '友情';
    const score = result.score || randomScore(60, 99);
    const analysis = result.analysis || [
        `你们的契合度真的很高！在一起会很开心的~`,
        `虽然偶尔会有小摩擦，但整体来说还是很合适的！`,
        `需要多沟通，多理解对方，你们的关系会越来越好的！`
    ];
    
    document.getElementById('test-result').innerHTML = `
        <h3>💕 ${typeName}契合度测试</h3>
        <div class="score">${score}%</div>
        <div class="content">
${name1} & ${name2}

${randomChoice(analysis)}
        </div>
    `;
}

function generateTestFrontend(name1, name2, type) {
    return {
        score: randomScore(60, 99),
        analysis: [
            `你们的契合度真的很高！在一起会很开心的~`,
            `虽然偶尔会有小摩擦，但整体来说还是很合适的！`
        ]
    };
}

// ==================== 头像风格化（仅后端）====================

async function generateAvatar() {
    if (!CONFIG.useBackend) {
        document.getElementById('avatar-result').innerHTML = `
            <h3>⚠️ 需要后端模式</h3>
            <div class="content">请先切换到后端模式（点击右上角的 🔄 按钮）</div>
        `;
        return;
    }
    
    const fileInput = document.getElementById('avatar-image');
    const style = document.getElementById('avatar-style').value;
    
    if (!fileInput.files || !fileInput.files[0]) {
        document.getElementById('avatar-result').innerHTML = `
            <h3>❌ 请选择图片</h3>
        `;
        return;
    }
    
    const formData = new FormData();
    formData.append('image', fileInput.files[0]);
    formData.append('style', style);
    
    try {
        const response = await fetch(`${CONFIG.backendUrl}/avatar`, {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            document.getElementById('avatar-result').innerHTML = `
                <h3>✅ 处理完成</h3>
                <div class="content">已保存到: ${result.output_path}</div>
            `;
        } else {
            document.getElementById('avatar-result').innerHTML = `
                <h3>❌ 失败</h3>
                <div class="content">${result.error}</div>
            `;
        }
    } catch (e) {
        document.getElementById('avatar-result').innerHTML = `
            <h3>❌ 网络错误</h3>
            <div class="content">无法连接后端，请检查后端是否启动</div>
        `;
    }
}

// ==================== 更多互动 ====================

function generateCoupleName() {
    hideAllSubForms();
    const name1 = prompt('请输入第一个人的名字：');
    const name2 = prompt('请输入第二个人的名字：');
    
    if (!name1 || !name2) return;
    
    let coupleName = randomChoice(coupleNames);
    coupleName = coupleName.replace('{name1}', name1).replace('{name2}', name2);
    
    document.getElementById('interact-result').innerHTML = `
        <h3>💕 情侣名</h3>
        <div class="content">${coupleName}</div>
    `;
}

function showNicknameForm() {
    hideAllSubForms();
    document.getElementById('nickname-form').classList.remove('hidden');
}

function generateNickname() {
    const name = document.getElementById('nickname-name').value.trim();
    if (!name) return;
    
    let nickname = randomChoice(nicknames);
    nickname = nickname.replace('{name}', name);
    
    document.getElementById('interact-result').innerHTML = `
        <h3>😜 外号</h3>
        <div class="content">${nickname}</div>
    `;
}

function truthOrDare() {
    hideAllSubForms();
    const choice = confirm('点击确定=真心话，点击取消=大冒险');
    
    if (choice) {
        const question = randomChoice(truthQuestions);
        document.getElementById('interact-result').innerHTML = `
            <h3>🎮 真心话</h3>
            <div class="content">${question}</div>
        `;
    } else {
        const task = randomChoice(dareTasks);
        document.getElementById('interact-result').innerHTML = `
            <h3>🎮 大冒险</h3>
            <div class="content">${task}</div>
        `;
    }
}

function luckyDraw() {
    hideAllSubForms();
    const item = randomChoice(luckyItems);
    
    document.getElementById('interact-result').innerHTML = `
        <h3>🍀 每日抽签</h3>
        <div class="content" style="text-align: center; font-size: 1.5em;">
            ${item.emoji} ${item.item}
            <br><br>
            <span style="font-size: 0.8em;">${item.desc}</span>
        </div>
    `;
}

// ==================== 初始化 ====================

document.addEventListener('DOMContentLoaded', () => {
    updateModeBadge();
    console.log('🍬 甜蜜实验室完整版已加载！');
});
