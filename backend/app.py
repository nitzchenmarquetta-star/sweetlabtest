#!/usr/bin/env python3
"""
甜蜜实验室 - 后端 API
"""

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import sys
from pathlib import Path

# 添加父目录到路径，导入 core 模块
sys.path.insert(0, str(Path(__file__).parent.parent))

from core import (
    PoemGenerator,
    LoveGenerator,
    LoveTester,
    ChatHelper,
    AvatarStyler,
    MoreInteractions
)

app = Flask(__name__, static_folder='../web', static_url_path='')
CORS(app)  # 允许跨域请求

# 初始化各模块
poem_gen = PoemGenerator()
love_gen = LoveGenerator()
love_tester = LoveTester()
chat_helper = ChatHelper()
avatar_styler = AvatarStyler()
more_interactions = MoreInteractions()


@app.route('/')
def index():
    """返回主页"""
    return send_from_directory('../web', 'index.html')


# ==================== 藏头诗 API ====================

@app.route('/api/poem', methods=['POST'])
def api_poem():
    """生成藏头诗"""
    data = request.json or request.form
    name = data.get('name', '')
    style = data.get('style', 'romantic')
    
    result = poem_gen.generate_acrostic(name, style)
    return jsonify(result)


@app.route('/api/poem/styles', methods=['GET'])
def api_poem_styles():
    """获取藏头诗风格列表"""
    return jsonify({
        'styles': poem_gen.list_styles()
    })


# ==================== 情话 API ====================

@app.route('/api/love', methods=['POST'])
def api_love():
    """生成情话"""
    data = request.json or request.form
    style = data.get('style', 'romantic')
    name = data.get('name', '')
    scene = data.get('scene', '')
    
    result = love_gen.generate(style, name, scene)
    return jsonify(result)


@app.route('/api/love/styles', methods=['GET'])
def api_love_styles():
    """获取情话风格列表"""
    return jsonify({
        'styles': love_gen.list_styles(),
        'scenes': love_gen.list_scenes()
    })


# ==================== 聊天话术 API ====================

@app.route('/api/chat/earthy', methods=['GET'])
def api_chat_earthy():
    """获取土味情话"""
    count = request.args.get('count', 3, type=int)
    result = chat_helper.generate_earthy_flirt(count)
    return jsonify(result)


@app.route('/api/chat/reply', methods=['POST'])
def api_chat_reply():
    """生成高情商回复"""
    data = request.json or request.form
    message = data.get('message', '')
    style = data.get('style', 'normal')
    
    result = chat_helper.generate_reply(message, style)
    return jsonify(result)


@app.route('/api/chat/starter', methods=['POST'])
def api_chat_starter():
    """生成话题开场白"""
    data = request.json or request.form
    scene = data.get('scene', 'first_chat')
    
    result = chat_helper.generate_topic_starter(scene)
    return jsonify(result)


@app.route('/api/chat/styles', methods=['GET'])
def api_chat_styles():
    """获取聊天风格列表"""
    return jsonify({
        'styles': chat_helper.list_styles(),
        'scenes': chat_helper.list_scenes()
    })


# ==================== 契合测试 API ====================

@app.route('/api/test', methods=['POST'])
def api_test():
    """爱情/友情测试"""
    data = request.json or request.form
    name1 = data.get('name1', '')
    name2 = data.get('name2', '')
    birthday1 = data.get('birthday1', '')
    birthday2 = data.get('birthday2', '')
    relationship_type = data.get('type', 'romantic')
    
    result = love_tester.test(
        name1, name2, 
        birthday1, birthday2, 
        relationship_type
    )
    return jsonify(result)


# ==================== 头像风格化 API ====================

@app.route('/api/avatar', methods=['POST'])
def api_avatar():
    """头像风格化"""
    if 'image' not in request.files:
        return jsonify({
            'success': False,
            'error': '请选择图片'
        }), 400
    
    file = request.files['image']
    style = request.form.get('style', 'candy')
    
    # 保存上传的图片
    upload_dir = Path(__file__).parent / 'uploads'
    upload_dir.mkdir(exist_ok=True)
    
    input_path = upload_dir / file.filename
    file.save(str(input_path))
    
    # 生成输出路径
    output_path = upload_dir / f'styled_{file.filename}'
    
    # 应用风格
    result = avatar_styler.apply_style(
        str(input_path), 
        style, 
        str(output_path)
    )
    
    return jsonify(result)


@app.route('/api/avatar/styles', methods=['GET'])
def api_avatar_styles():
    """获取头像风格列表"""
    return jsonify({
        'styles': avatar_styler.list_styles()
    })


# ==================== 互动游戏 API ====================

@app.route('/api/interact/couple-name', methods=['POST'])
def api_interact_couple_name():
    """生成情侣名"""
    data = request.json or request.form
    name1 = data.get('name1', '')
    name2 = data.get('name2', '')
    
    result = more_interactions.generate_couple_name(name1, name2)
    return jsonify(result)


@app.route('/api/interact/nickname', methods=['POST'])
def api_interact_nickname():
    """生成外号"""
    data = request.json or request.form
    name = data.get('name', '')
    
    result = more_interactions.generate_nickname(name)
    return jsonify(result)


@app.route('/api/interact/truth-or-dare', methods=['POST'])
def api_interact_truth_or_dare():
    """真心话大冒险"""
    data = request.json or request.form
    choice = data.get('choice', 'random')
    
    result = more_interactions.truth_or_dare(choice)
    return jsonify(result)


@app.route('/api/interact/lucky-draw', methods=['GET'])
def api_interact_lucky_draw():
    """每日抽签"""
    result = more_interactions.lucky_draw()
    return jsonify(result)


@app.route('/api/interact/games', methods=['GET'])
def api_interact_games():
    """获取游戏列表"""
    return jsonify({
        'games': more_interactions.list_games()
    })


# ==================== 健康检查 ====================

@app.route('/api/health', methods=['GET'])
def api_health():
    """健康检查"""
    return jsonify({
        'status': 'ok',
        'service': 'sweet-lab-backend'
    })


if __name__ == '__main__':
    print("🍬 甜蜜实验室后端启动中...")
    print("📝  API 文档: http://localhost:5000/")
    print("=" * 50)
    app.run(host='0.0.0.0', port=5000, debug=True)
