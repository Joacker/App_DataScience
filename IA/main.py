from flask import Flask, jsonify, request

app = Flask(__name__)
message = ''

if __name__== "__main__":
    app.run(debug = True)