# PROGRAM DESCRIPTION: Scrape and parse data from Major League Hacking
from pymongo import MongoClient
import requests
import lxml.html as lh

#mongo client
client = MongoClient('mongodb+srv://fadedlamp42:friedchicken@cluster0-acigc.mongodb.net/test?retryWrites=true&w=majority')
db = client.HackFSU

# requests section
url = 'https://mlh.io/seasons/na-2020/events'
r = requests.get(url)

# lxml html parse
doc = lh.fromstring(r.content)

# create list from fields between <tr> tags
events = doc.xpath('/html/body/div[1]/div[3]/div[1]/div')

i=0

innards = events[0].xpath('./div/a/div')

for e in events: 
   i+=1
   innards = e.xpath('./div/a/div')[0]
   try:
       title = innards.xpath('../@title')[0].strip()
   except:
       title = '(unknown)'
   titles.append(title)

   try:
       date = innards.xpath('./p')[0].text_content().strip()
   except:
       date = '(unknown)'
   dates.append(date)

   try:
       city = innards.xpath('./div[3]/span[1]')[0].text_content().strip()
   except: 
       city = '(unknown)' 
   cities.append(city)

   try:
       state = innards.xpath('./div[3]/span[2]')[0].text_content().strip()
   except:
       state = '(unknown)'
   states.append(state)

   push = {"name" : title, "date" : date, "city" : city, "state" : state}
   db.Venue.insert_one(push)
   #print (f"{i}: {title} on {date} in {city}, {state}")
