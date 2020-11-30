# NOTE FOR SCRAPING THE WEB DATA

## 1. SOME REF SITE FOR SCRAPING USING PYTHON

- Convert python dict to json: <https://appdividend.com/2019/04/15/how-to-convert-python-dictionary-to-json-tutorial-with-example/#:~:text=To%20convert%20Python%20dict%20to,the%20json(dictionary)%20object!>
- Saving json to file: <https://www.geeksforgeeks.org/saving-text-json-and-csv-to-a-file-in-python/>
- Decode the url back to normal: <https://stackoverflow.com/questions/44177831/how-to-convert-encoded-url-into-json-format>
- Convert bs4 tag element to str: <https://stackoverflow.com/questions/37873059/get-text-with-beautifulsoup-css-selector>

## 2. CODE REF FOR SCRAPING IVIVU USING PYTHON

```python
import requests
from bs4 import BeautifulSoup
import json

URLTest = "https://www.ivivu.com/du-lich/tour-da-lat?date=2020-11-26&from=h%e1%bb%93-ch%c3%ad-minh"
pageGetSrc = requests.get(URLTest)
soupGetSrc = BeautifulSoup(pageGetSrc.content, 'html.parser')
listSrc = soupGetSrc.find_all('a', class_='linkDetail')
linkToDetail = []

# Write a tag to the list
for aTag in listSrc:
    linkToDetail.append('https://www.ivivu.com'+aTag['href'])

tourDetailArr = {}

# Scrape using requests

for _page in linkToDetail:
    pageDetail = requests.get(_page)
    soupInFor = BeautifulSoup(pageDetail.content, 'html.parser')
    tourDetailDiv = soup.find_all('div', class_='tourDetailContainer')
    tourDetailArr[_page] = tourDetailDiv

# Convert the scrape data to json and write to JSON file

for key in tourDetailArr:
    tourDetailDict[key] = str(tourDetailArr[key][0])

out_file = open("myfile.json", "w")
json.dump(tourDetailDict, out_file, indent = 6)
```

```js
// function to convert json encoded to normal
var myJSON = decodeURIComponent("%7B%22book%22:%22ABC%22%7D");
var myObject = JSON.parse(myJSON);
```

## 3. IMPORT JSON USING JQUERY

- Ref <https://stackoverflow.com/questions/51317294/importing-external-data-json-file-into-javascript-variable>
