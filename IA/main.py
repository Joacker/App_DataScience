from sklearn.neighbors import KNeighborsClassifier
from flask import Flask, jsonify, request
import querys

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

models = []

id_prob = {}

def lexNumbers(n):
    s = []
    for i in range(1, n + 1):
        s.append(str(i))   
    s.sort()
    ans = []
    for i in range(n):
        ans.append(int(s[i]))
    return ans

def lexNumbers0(n):
    s = []
    for i in range(0, n):
        s.append(str(i))   
    s.sort()
    ans = []
    for i in range(n):
        ans.append(int(s[i]))
    return ans


# CAUSA EN FUNCIÓN DE COMUNA - POS 0
@app.route('/query0', methods=['POST'])
def query0():
    x = request.json['datos']
    print(x)
    pred = models[0].predict([x])
    prob = models[0].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)

# COMUNA CON MAYOR PROBABILIDAD DE X FALLECIDOS - POS 1
@app.route('/query1', methods=['POST'])
def query1():
    x = request.json['datos']

    pred = models[1].predict([x])
    prob = models[1].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers0(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)

# COMUNA MÁS PROBABLE PARA CIERTA CAUSA - POS 2
@app.route('/query2', methods=['POST'])
def query2():
    x = request.json['datos']

    pred = models[2].predict([x])
    prob = models[2].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)

# TIPO DE UBICACIÓN EN FUNCIÓN DEL TIPO DE ACCIDENTE Y COMUNA - POS 3
@app.route('/query3', methods=['POST'])
def query3():
    x = request.json['datos']

    pred = models[3].predict([x])
    prob = models[3].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)

# ESTADO DE CALZADA EN FUNCIÓN DE X FALLECIDOS - POS 4
@app.route('/query4', methods=['POST'])
def query4():
    x = request.json['datos']

    pred = models[4].predict([x])
    prob = models[4].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)

# CLIMA EN FUNCIÓN DE X FALLECIDOS - POS 5
@app.route('/query5', methods=['POST'])
def query5():
    x = request.json['datos']

    pred = models[5].predict([x])
    prob = models[5].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)

# CAUSA EN FUNCIÓN DE X FALLECIDOS - POS 6
@app.route('/query6', methods=['POST'])
def query6():
    x = request.json['datos']

    pred = models[6].predict([x])
    prob = models[6].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)

# ESTADO DE LA CALLE EN RELACIÓN A UNA COMUNA Y UN TIPO DE CALZADA - POS 7
@app.route('/query7', methods=['POST'])
def query7():
    x = request.json['datos']

    pred = models[7].predict([x])
    prob = models[7].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)

# EN FUNCIÓN DEL MES DETERMINA CAUSA
@app.route('/query8', methods=['POST'])
def query8():
    x = request.json['datos']

    pred = models[8].predict([x])
    prob = models[8].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)

# EN FUNCIÓN DEL MES DETERMINA COMUNA
@app.route('/query9', methods=['POST'])
def query9():
    x = request.json['datos']

    pred = models[9].predict([x])
    prob = models[9].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)

# EN FUNCIÓN DEL MES DETERMINA CLIMA
@app.route('/query9', methods=['POST'])
def query10():
    x = request.json['datos']

    pred = models[10].predict([x])
    prob = models[10].predict_proba([x])

    probabilities = {}
    lex_numbers = lexNumbers(len(prob[0]))

    for index, number in enumerate(lex_numbers):
        probabilities[number] = prob[0][index]

    message = {
        "prediction": pred.tolist(),
        "dp": probabilities,
        #"Distribución de probabilidades": prob.tolist(),
        "id":lex_numbers
    }

    return jsonify(message)


@app.route('/', methods=['GET'])
def index():
    return "<h1>API</h1>"


if __name__== "__main__":
    models = querys.querys()

    # API
    app.run(host='0.0.0.0', port=80, debug = True, threaded = True)
