from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('index.html')

@main.route('/discussions')
def discussions():
    return render_template('discussions.html')

@main.route('/video-chat')
def video_chat():
    return render_template('video_chat.html')

@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/contact')
def contact():
    return render_template('contact.html')
