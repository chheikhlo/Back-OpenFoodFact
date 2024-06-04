import requests
from pymongo import MongoClient
import json

response = "./france.json"

with open("france.json", "r") as file:
    data = json.load(file)
    products = data['products']

    client = MongoClient('mongodb+srv://ibenothmen:789456123@clusteropenfood.dqchtue.mongodb.net/?retryWrites=true&w=majority&appName=Clusteropenfood')
    db = client['openfood']
    collection = db['food']

    for item in products:
        collection.insert_one({
            'product_name': item.get('product_name', ''),
            'categories_hierarchy': item.get('categories_hierarchy', []),
            'allergens_tags': item.get('allergens_tags', []),
            'code': item.get('code', ''),
            'ingredients_text': item.get('ingredients_text', []),
            'stores_tags': item.get('stores_tags', []),
            'image_front_small_url': item.get('stores_tags', []),
            'link_page_on_openfoodfacts': "https://world.openproductsfacts.org/product/"+item.get('code', '')
        })

    client.close()
