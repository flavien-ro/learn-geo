#!/usr/bin/python3

import sys
import json
import os

entries = os.listdir('countries/')

for entry in entries:
    try:
        with open("./countries/" + entry) as f:
            data = json.load(f)
        json_object = {
            "name" : data['features'][0]['properties']['name'],
            "id" : data['features'][0]['id'],
            "coordonate": data['features'][0]['geometry']['coordinates'],
        }
        with open("countries.json", "a") as outfile:
            outfile.write(json.dumps(json_object, indent=3))
            outfile.write(",\n")
    except Exception:
        pass