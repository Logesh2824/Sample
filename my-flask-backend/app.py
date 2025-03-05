from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React frontend to access the backend

@app.route("/")
def home():
    return jsonify({"message": "Hello from Flask on Render!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
