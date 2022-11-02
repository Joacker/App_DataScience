from flask import Flask, jsonify, request

app = Flask(__name__)
message = 'asdasd'

@app.route('/api', methods=['GET'])
def ping():
    return jsonify({'message': message})

if __name__== "__main__":
    app.run(host='0.0.0.0', port=80, debug = True, threaded = True)