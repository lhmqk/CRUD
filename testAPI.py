import requests

url = "http://localhost:8800/books"
data = {
    "title": "The Great Gatsby",
    "desc": "F. Scott Fitzgerald",
    "cover": "Pic of The Great Gatsby",
}

response = requests.post(url, json=data)

if response.status_code == 200:
    print("Book added successfully!")
else:
    print("Error adding book:", response.text)
