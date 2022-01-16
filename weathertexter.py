# importing file containing API authentication variables
import requests
from twilio.rest import Client
from apitokens import *

# need to find a way to get the user address and phone number from the application
USER_ADDRESS = '5446 Tasha Drive, Mississauga, ON, Canada'
USER_PHONE_NUMBER = '+16477676905'

params = {
    'key': GOOGLE_API_KEY,
    'address': USER_ADDRESS
}
# API endpoint for Google Geolocation
location_data = requests.get(url='https://maps.googleapis.com/maps/api/geocode/json?',
                                  params=params).json()

# accessing the user's coordinates using their address so it can be fed into the weather application
addr_lat = location_data['results'][0]['geometry']['location']['lat']
addr_lng = location_data['results'][0]['geometry']['location']['lng']


weather_apiparams = {
    'appid': APP_ID,
    'lon': addr_lng,
    'lat': addr_lat,
    'units': 'metric',
    'exclude': 'current,minutely,daily'
}
weather_data = requests.get(url='https://api.openweathermap.org/data/2.5/onecall',
                                 params=weather_apiparams).json()

client = Client(ACCOUNT_SID, AUTH_TOKEN)

# checking if conditions are unsafe for driving by checking weather ids in the next 12 hours
def should_take_bus():
    for i in range(0, 12):
        hourly_forecast = weather_data["hourly"][i]['weather'][0]['id']
        weather_desc = weather_data["hourly"][i]['weather'][0]['description']
        if hourly_forecast == 503 or hourly_forecast == 504 or hourly_forecast == 511 or hourly_forecast == 616 \
                or hourly_forecast == 622:
            return [True, weather_desc]
    return [False, weather_desc]


# texts the user if conditions are unsafe for driving
def text_user(client):
    take_bus = should_take_bus()[0]
    forecast = should_take_bus()[1]
    # sending a message based on the weather conditions
    message_body = f'The weather forecast for today is "{forecast}". Road conditions are not suitable for driving, ' \
                   f'please take the bus 🚌 if possible so you can be safe and help save the planet! 🌳'
    if take_bus == True:
        message = client.messages.create(
            body=message_body,
            from_='+13233104492', # twilio trial account phone number
            to=USER_PHONE_NUMBER
        )
        print(message.status)
    else:
        print("message not sent because weather conditions unfavorable")


def text_user_demo(client):
    take_bus = True
    forecast = 'freezing rain'
    # sending a message based on the weather conditions
    message_body = f'The weather forecast for today is "{forecast}". Road conditions are not suitable for driving, ' \
                   f'please take the bus 🚌 if possible so you can be safe and help save the planet! 🌳'
    message = client.messages.create(
        body=message_body,
        from_='+13233104492',  # twilio trial account phone number
        to=USER_PHONE_NUMBER
    )
    print(message.status)

text_user_demo(client)