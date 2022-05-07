from flask import Flask, render_template, send_from_directory, request, redirect, json
from flask_compress import Compress
from flask_mail import Mail, Message

app = Flask(__name__, static_folder='static')
Compress(app)


# redirect to https
@app.before_request
def before_request():
    if not ("localhost" in request.url or "127.0.0.1" in request.url) and not request.is_secure:
        url = request.url.replace('http://', 'https://', 1)
        code = 301
        return redirect(url, code=code)


# routes
@app.route("/", methods=["GET"])
def home():
    return render_template("home.html")

@app.route("/about", methods=["GET"])
def about():
    return render_template("about.html")

@app.route("/contact", methods=["GET"])
def contact():
    return render_template("contact.html")


@app.products("/products", methods=["GET"])
def index():
    return render_template("products.html")


# technical pages
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404



if __name__ == "__main__":
    app.run()
