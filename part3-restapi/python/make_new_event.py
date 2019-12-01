import requests

url = "http://127.0.0.1:5000/events"

data = {
	"date": "2020-01-01",
	"type": "books",
	"name": "book week starts!"
} 
response = requests.post(url, json=data)
response.raise_for_status()
print(response.status_code)
print(response.json())
