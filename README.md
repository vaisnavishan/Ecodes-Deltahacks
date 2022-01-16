# Ecodes-Deltahacks


## Table of contents
* [Demo](#demo)
* [About](#about)
* [Challenges & What we learned](#challenges&whatwelearned)
* [Next Steps](#next-steps)

## Demo

### Figma Prototyping
https://www.figma.com/proto/bE2aQSxRT4I4kffUGMMPF3/Ecode?node-id=0%3A68&starting-point-node-id=0%3A2&show-proto-sidebar=1
### QR Codes 

<img width="288" alt="ecodes" src="https://user-images.githubusercontent.com/77128514/149668053-cd15558e-15f2-4749-baeb-03069c669836.png">
<img width="288" alt="ecodes" src="https://user-images.githubusercontent.com/77128514/149668082-91a598b2-2fba-4b48-b237-30aeef2ff4fa.png">
<img width="288" alt="ecodes" src="https://user-images.githubusercontent.com/77128514/149668090-867bdd29-c34d-42e5-8752-fa1736b2a1ef.png">
<img width="288" alt="ecodes" src="https://user-images.githubusercontent.com/77128514/149668103-7006138a-bdaa-4e38-80be-14baf640443c.png">
<img width="288" alt="ecodes" src="https://user-images.githubusercontent.com/77128514/149668113-9f766596-a84e-48b8-bb57-8eb993acf5aa.png">


### Walkthrough Demo of our App
https://drive.google.com/file/d/1suT7tPila3rz4PSmoyl42G5gyAwrC_vu/view?usp=sharing





	
## About

This app is a modern way to embed an eco-friendly lifestyle into people to take care of our environment. A lot of the time, we need motivation to do what’s right and so we developed an app that improves our human lifestyle by being rewarded with every eco-friendly action we take. There are very small but impactful ways to save the plant like, using reusable bags, shopping at thrift stores, or taking bus/carpooling and each time someone does so this app will reward them! Simply scanning a QR code at every location where you can be environmentally friendly will enable you to claim points that can be converted into discounts, coupons or gift cards to small businesses!

![image1](https://user-images.githubusercontent.com/47333291/149666818-251bde5b-e5e9-4dfb-8ebe-24b2b4aa88c1.jpeg)

Download the Expo app or open your phone camera/google lens and try it out! Note: Not a full functioning app, just a prototype demo :)

<img width="288" alt="ecodes" src="https://user-images.githubusercontent.com/47333291/149667693-92a4fc1b-5f15-4e81-990b-d576714bfc65.png">

Project is created with:
* React.js
* Python
* Flask
* Figma
* Expo.io (Expo Go)
* APIs (Twilio, OpenWeatherMap, Geolocation)

### How we built it:
We initially prototyped UI/UX using Figma, then built onto a React-Native frontend and a Flask backend. QR codes were generated for each business via python and detected using a camera access feature created in React-Native. We then moved on to use the OpenWeatherMaps API and the Twilio API in the backend to send users text-based eco-friendly reminders.

## Challanges & What we learned:
Implementing camera access into the app and actually scanning specific QR codes that corresponded to a unique business and number of EcoPoints. But after all, there's nothing a little documentation can't solve! We took the challenge to learn new skills outside of our comfort zone, learning how to add impressive features to an app such as camera access, QR code scanning, counter updates, and aesthetic UI. Our final hack turned out to be better than we anticipated, and inspired us to develop impactful and immensely capable apps in the future :)


## Next Steps
In the future, we'd like to:
* Add a location feature to send users text-based reminders to the user, informing them that an Ecode is nearby. We can use the Geolocation Google Maps API and Twilio API to implement this. 
* Add a carpooling feature which enables users to earn points together by carpooling with one another!!




