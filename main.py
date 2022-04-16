import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

import random
from datetime import datetime
import time

import datetime
from firebase_admin.firestore import SERVER_TIMESTAMP

cred = credentials.Certificate("./serviceAccountKey.json")
app = firebase_admin.initialize_app(cred)

print(app.name)

db = firestore.client()

while True:
    db.collection(u'stats').add({"timestamp": SERVER_TIMESTAMP, "number": random.random()})
    print("added row")
    time.sleep(1)