<h1 align="center">Cyle♻️IT</h1>
<h3 align="center">"Making the world greener-one step at a time"</h3>
<p align="center">
  <img src="https://res.cloudinary.com/du9wkwhju/image/upload/v1704029634/logo_pr1i5l.png" height="250px">
</p>

<b>This is the frontend repo of the cycleit project, the backend repo can be found [here](https://github.com/Nupoor10/cycleit-backend)</b>

## Table Of Contents

* [Demo and Links](#demo-and-links)
* [About the Project](#about)
* [Built With](#built-with)
* [Features](#features)
* [How it works](#how-it-works)
* [Local Setup](#local-setup)
  * [Prerequisites](#prerequisites)
  * [Frontend](#frontend)
  * [Backend](#backend)

## Demo and Links

- Link to frontend repo can be found [here](https://github.com/Nupoor10/cycleit)
- Link to backend repo can be found [here](https://github.com/Nupoor10/cycleit-backend)
- Link to online demo can be found [here](https://cycleit.vercel.app/)

## About

Did you know, Recycling 1 ton of paper saves 17 trees, 7,000 gallons of water, 380 gallons of oil, and 3.3 cubic yards of landfill space?! While statistics are bound to change throughout the years, it is imperative that we encourage people to recycle to save our precious planet and promote sustainability. And that is exactly what CycleIT aims to do, encourage users to recycle used items by making the entire process engaging and rewarding! CycleIT aims to promote a greener more sustainable lifestyle for everyone.

## Built With

<div align="center">
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"> 
    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/React-000049?style=for-the-badge&logo=react&logoColor=61DAFB"> 
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> 
    <img src="https://img.shields.io/badge/Express.js-800080?style=for-the-badge"> 
    <img src="https://img.shields.io/badge/MongoDB-6FD161?style=for-the-badge&logo=mongodb&logoColor=white">
    <img src="https://img.shields.io/badge/TensorFlow-FF6F80?style=for-the-badge&logo=tensorflow&logoColor=white"> 
    <img alt="Git" src="https://img.shields.io/badge/Git-F09032?style=for-the-badge&logo=git&logoColor=white" />
</div>

CycleIT is developed using the MERN stack as well as integrating with several libraries to provide mapping and analytical features.

- React.Js: React.Js is utilized for building the frontend components of the application. React.Js is a popular Javascript framework preferred for building frontend apps due to its component based architecture.

- CSS3 - Styling for the entire application is done using plain CSS3 utilizing appropriate media queries to ensure responsiveness across devices.

- Express.Js: The backend server of the project is built using Express.js which is a minimal and lightweight framework for building servers with Node.Js. The express server consists of controller logic, backend routes along with middleware for authentication.

- MongoDB: Mongo Atlas is used as the database to store application data. In addition, Mongoose is used which is a ORM for integrating MongoDB with Node.Js reducing the need of boilerplate code and providing important native MongoDB capabilities.

- Axios: Axios is used to make API requests to the backend as well as external servers. Axios is a popular JavaScript library for making HTTP requests in browsers and Node.js environments. It simplifies the process with a clean syntax, support for Promises, and the ability to intercept request and response actions, making it widely used for asynchronous data fetching in web applications.

- React-Leaflet: Users are provided with a dynamic map where one can view all the recycling centers in a particular city. For the map, ```react-leaflet``` is used which is a is a React wrapper for the Leaflet.js mapping library, enabling seamless integration of interactive and customizable maps into React applications.

- Geoapify: Geoapify Places API allows developers to integrate location-based services into their applications. The Places API enables users to search for places and retrieve details about specific locations, providing geocoding, autocomplete, and place details functionalities. It is used to search for all recycling centers given a particular city.

- React-Charts: It is a React wrapper for the Chart.js library, providing an easy way to integrate dynamic and interactive charts into React applications. The project utilizes this library to provide statistics to the user of their recycled items.

- Tensorflow.js: In the project users can scan an item and the application will classify it into one of several recycling categories. Here, Tensorflow.js is used for object detection. Tensorflow provides several models to choose from and this project utilizes their COCO SSD model in order to detect objects from a video stream.

- Cohere-AI: Cohere provides several LLM models which can be used in a chat like context. This functionality is used to categorize a given object into one of several recycling categories: Paper, Glass, Metal, Organic, E-waste and Plastic. The suitable prompt is provided along with the object name and the model returns its correct classfication. 

## Features 

CyleIT incorporates a number of features designed to help users lead a greener and sustainable lifestyle and promote recycling in a fun, engaging manner.

- Awards and Badges: The most attractive feature of the application that sets it apart is its gamification features. Users can perform various activites in the application like completing challenges or scanning recycled items to rack up points. Once a user has earned enough points they can also earn amazing badges that add an extra shine to their profile section and motivates the user to continue with their achievements.

- Leaderboard: The application also features a Leaderboard that shows the top 10 users with the highest points earned so far, ranked in order. This will help motivate new users to recycle more thus ultimately promoting a more sustainable lifestyle.

- Challenges: The application has several bite-sized sustainablity challenges that a user can enroll in. The challenges range from beginner, intermediate to advanced with each level carrying certain amount of points. Upon successfully completing a challenge, the user can then earn points, thus boosting their rank. Users can also un-enroll from their challenges at any time

- Maps: For finding nearby recycling centres an interactive maps features is provided to the user. For the Geocoding and Places API, Geoapify is used along with React Leaflet for rendering the map, markers and popups. Using this feature the user can easily enter the city they are located in and view all the recycling centres in the city along with their address

- Scanning Recycled Items: Another fun way to earn points in the application is by scanning your recycled items. Users can scan an item they have recycled, and the application will detect the item using Tensorflow.js library with the pre-trained COCO-SSD model. Firstly the video stream is obtained by using ```react webcam``` and users are given the option to start and stop detection for detecting the object from the video stream. Once object is detected it is categorized into one of seven categories using the ```cohere-ai``` library. The history of scanned items can also be seen.

- Donation Campaigns: The application enables users to create their own donation campaigns as well as donate to campaigns created by other users. For creating a campaign the user can enter details like title, description and goal amount and manage their campaigns through their profile page. They can also donate to other campaigns by a secure payment gateway(currently only a sandbox account) 

- User Profile: The user profile serves as the central dashboard of the application where users can view the statistics of the items they have recycled with the data visualization being powered by the ```react-chartjs-2``` library. Additionally users can see points and badges earned, challenges currently enrolled in, donations done and manage campaigns created.

## How it works

1. User account creation is facilitated through the dedicated Registration page. The frontend sends user data to the backend API, where express router is used to attach handler functions i.e controllers to the specific API endpoint. A mongoose schema is created for saving user data to the database with basic details like name, email and password. The user password is hashed using the bcrypt library to ensure data protection.

![Registration Page](https://res.cloudinary.com/du9wkwhju/image/upload/v1704056650/Screenshot_2024-01-01_023051_b7znsk.png)

2. Upon successful completion of the registration process, the system seamlessly redirects users to the designated Login page, where they can authenticate using their registered email address and password. In the backend, the user entered password is hashed and compared with the hashed password stored in the database and then user is authenticated to access the application. A JSON Web Token is created for the authentication with the User ID which is then passed to the frontend.  Async-await along with try..catch is used to make code more readable and less error-prone along with handling promises gracefully. 

![Login Page](https://res.cloudinary.com/du9wkwhju/image/upload/v1704056677/Screenshot_2024-01-01_023106_dv6mth.png)

3. Once the backend API checks that the user credentials are correct, the frontend stores the user details in a global state variable using React Context API to keep track of the currently logged in user. This global 'user' object is also used in subsequent backend requests where the JWT token is passed in the 'Authorization' header and the backend authentication middleware ensures that the token is valid and the user making the request exists in the database.

4. The User is then redirected to their profile page. The profile page of the application serves as the central dashboard for the user. Here the user can view their recycled items in an interactive chart, keep track of their achievements including badges and points earned and view their enrolled challenges. Along with this users can also see their past donations and their own donation campaigns. The website also features a responsive navbar for easy navigation across various devices.

![Profile Page](https://res.cloudinary.com/du9wkwhju/image/upload/v1704056678/Screenshot_2024-01-01_023134_uzljj9.png)

![Profile Page Mobile View](https://res.cloudinary.com/du9wkwhju/image/upload/v1704056681/Screenshot_2024-01-01_023152_qqfaar.png)

5. The first major feature of the project is its gamification features provided through points and badges. Users can earn points mainly though two ways - completing a challenge and recycling an item. This is highlighted in further sections. Users can see the points they have earned in their profile page. Upon collecting a fixed set of points, users are also awarded badges. There are total 4 badges a user can earn depending upon the points they rack up. The points as well as badges feature is introduced to provide a more interactive experience to the users by serving as a motivating factor.

In the backend this is done by a function called ```incrementPointsAndBadge``` which is called by other controllers for user challenges and recycled items. It will take the points to be added as its argument and increment the ```totalPoints``` field in the user schema. Along with that a ```Badges``` schema is created that stores all the badges along with the minimum number of points required to earn it, with the data being prepopulated in the database. The function will then create an array storing all the badges the user has already earned which is reflected in the badges field in the user schema. Subsequently we execute the mongoose ```findOne()``` query to find a badge that can be awarded (if any) based on user points and that does not already exist in the user badges array. For this the ```$lte``` , ```$nin``` and ```$and``` operators are used. If such a badge exists it gets saved in the user badges array which references the ```Badges``` schema. 

![User Profile Points](https://res.cloudinary.com/du9wkwhju/image/upload/v1704177958/Screenshot_2024-01-02_121419_vpwyee.png)

![Total Badges](https://res.cloudinary.com/du9wkwhju/image/upload/v1704177958/Screenshot_2024-01-02_121428_byvveh.png)

6. The next feature of the website is interactive sustainability challenges. Users are prompted to choose from 15 different challenges ranging across three levels: basic, intermediate and advanced. Users can enroll and unenroll in these challenges and also mark them as complete. Each challenge caries a fixed number of points and upon successfully completing the challenges the points are awarded to the user which the user can see through their profile page. The users can also view their enrolled challenges and the status of these challenges : complete/incomplete in their profile page.

In the backend a Mongoose schema called ```Challenges``` stores all the challenges and is prepopulated in the database. Another schema called ```Enrolled Challenges``` is introduced to keep track of all the challenges a particular user has enrolled in. It also contains fields such as completed(true/false) along with completion date. Once user completes a challenge the ```completed``` field is set to true and points/badges are awarded to the user. The process of awarding points and badges is highlighted above.

![Challenges Page](https://res.cloudinary.com/du9wkwhju/image/upload/v1704178882/Screenshot_2024-01-02_122534_oulxff.png)

![Enrolled Challenges](https://res.cloudinary.com/du9wkwhju/image/upload/v1704178880/Screenshot_2024-01-02_122926_rupqau.png)

![Completing a Challenge](https://res.cloudinary.com/du9wkwhju/image/upload/v1704178881/Screenshot_2024-01-02_123006_illypw.png)

![Unenrolling from a Challenge](https://res.cloudinary.com/du9wkwhju/image/upload/v1704178480/Screenshot_2024-01-02_122340_qs7kar.png)

7. Users can find nearby recycling centres by leveraging the maps feature. The maps feature is powered by Open Street Maps and React Leaflet. React Leaflet is a React library that effortlessly incorporates the Leaflet mapping library, providing a user-friendly and declarative approach to crafting interactive maps within React applications. Firstly the user has to enter the city they are located in, where they want to browse the recycling centres. Then, using Geoapify's Geocoding services, the co-ordinates and placeID of the city is retrieved by making the requisite API call using axios. Once the placeID is retrieved, another API call is made to Geoapify's Places API to fetch the co-ordinates of all the recycling centres using the recycling services category. The co-ordinates state array is updated and mapped over to add markers over these points along with a popup indicating their address. 

![Recycle Page](https://res.cloudinary.com/du9wkwhju/image/upload/v1704192457/Screenshot_2024-01-02_140216_qufd1v.png)

![Recycling Centres](https://res.cloudinary.com/du9wkwhju/image/upload/v1704192458/Screenshot_2024-01-02_154816_ncle6z.png)

8. If a user wants to recycle an item, they can scan and add the item to the application to rack up points. Firstly, we use Tensorflow.js in our frontend for object detection, in particular the pre-trained COCO-SSD model. We utilize ```react-webcam``` library to fetch the live video stream of the user, we provide controls like stop and start detection to the user to allow them to capture the object. Once object is satisfactorily detected user can click on the add button to add the item. In the backend, the name of the object scanned is retreived from the request body. Subsequently ```cohere-ai``` library is used to categorize the object into one of seven categories namely : paper, glass, plastic, metal, organic and e-waste. After categorizing the item, it is added to the database in a ```recycled items``` collection. Each category carries certain points and these points are added to the user's account as highlighted above. Once the item is added to the database, user can also access all the previously scanned objects along wiht object name, category and points awarded in the History page. 

![Scan an item](https://res.cloudinary.com/du9wkwhju/image/upload/v1704195907/Screenshot_2024-01-02_081609_iymlgh.png)

![Item Detected](https://res.cloudinary.com/du9wkwhju/image/upload/v1704195907/Screenshot_2024-01-02_081645_rnuzov.png)

![Add the item](https://res.cloudinary.com/du9wkwhju/image/upload/v1704195907/Screenshot_2024-01-02_081716_dso4ce.png)

![Recyled Items history](https://res.cloudinary.com/du9wkwhju/image/upload/v1704195906/Screenshot_2024-01-02_170010_lcwn0g.png)

After adding a recycled item, user can also view the statistics of the items they have added so far and the points they have earned for it using an intuitive donut chart. In the frontend the ```react-chartjs-2``` library is used for data visualization which is a React wrapper for Chart.js, providing a simple and declarative way to integrate dynamic and responsive charts into React applications. To get these stats, the backend uses the aggregate method of mongoose to create an aggregation pipline. The aggregation pipeline has following steps: 

- Fetch all documents from ```recycled items``` collection where the user field matches the userID of the currently logged in user. This is done using the ```$match``` stage.
- Next, using the ```$lookup``` stage we perform a left outer join to fetch the category object whose _id is equal to the category _id of the recycled item document. We then save this field as the ```populatedCategory``` field.
- We then use ```$unwind``` stage to deconstruct the ```populatedCategory``` array field to output a document for each element. We do this since there will be only a single element in the array so it will make more sense to use the element directly without using an array to store it
- Finally we use the ```$group``` stage to group all the documents as per their category using the ```populatedCategory``` field. We also add two more fields namely ```totalItems``` that sums up all items belonging to a particular category and ```totalPoints``` that sums up all the points of a category

Once the stats are fetched user can see all the items they have recycled so far visualized as per the category they belong to with clear labels for each category. Additional they have the View Items and View Points tabs where they can toggle between the chart to visualize category wise items scanned and category wise points earned.

![Visualization 1](https://res.cloudinary.com/du9wkwhju/image/upload/v1704197314/Screenshot_2024-01-02_171915_qde7oh.png)

![Visualization 2](https://res.cloudinary.com/du9wkwhju/image/upload/v1704197314/Screenshot_2024-01-02_171922_i7i1bc.png)

9. To further enhance the gamification element a Leaderboard is added to the website where the top 10 users with the highest points can be seen. In the backend a mongoose aggregation pipeline is created that works on the user data in three stages : firstly it will sort all users in descending order as per their total points, next it will limit the number of results to the top 10 and finally it will project only the necessary fields like username and points. The data fetched from the backend API is shown in a leaderboard table on the frontend.

![Leaderboard](https://res.cloudinary.com/du9wkwhju/image/upload/v1704195907/Screenshot_2024-01-02_171342_e7hlvf.png)

10. Lastly, the application also serves as a crowdfunding platform allowing users to create their own donation campaign as well as donating to other campaigns. Firstly if a user wants to create their own campaign they can click on the create campaign button in their profile section or on the Donate page. The user has to fill a form with the basic details of their campaign like the name, detailed description along with the goal amount they want to raise. On submission this campaign gets added to the ```donations``` collection in the database. The user can also manage the campaigns they have created through their profile page and view and edit their details.

For donating to an existing campaign user can browse through all available campaigns in the donation page and view all their details along with the funds raised so far. Upon clicking on a particular campaign they can enter the amount they wish to donate and click on the donate button. The application uses PayPal Braintree sandbox payments for allowing the user to donate, since this is a demo donation platform and not built to handle real transactions. Once a user clicks on the donate button, a new document is created in the ```user donations``` collection with the user, donation and amount field along with an additional status field whose value is set to 'initialized'. The backend controller creates a new Braintree gateway object by specifying necessary API keys. Then a client token is generated using this gateway object and sent to the frontend. The frontend retrieves this client token along with the newly created document ID and redirects user to the Payments page passing these values via location state. Once on the payments gateway page, the client token is retrieved to display the Payments UI on the frontend created using Braintree. User can enter their card details and click on Submit which will set and confirm the payment method and upon confirmation send the payload to the backend which contains the nonce value of the transaction and the device data. The backend intercepts this information, completes the transaction on the Braintree side and changes document status to 'completed'. Along with this the amount donated gets added to the total amount raised for that particular campaign.

![Create a campaign](https://res.cloudinary.com/du9wkwhju/image/upload/v1704204024/Screenshot_2024-01-02_183744_ozyiyx.png)

![Manage campaigns](https://res.cloudinary.com/du9wkwhju/image/upload/v1704204049/Screenshot_2024-01-02_190117_ral7qo.png)

![View a campaign](https://res.cloudinary.com/du9wkwhju/image/upload/v1704204141/Screenshot_2024-01-02_190136_fxwafx.png)

![View Donations](https://res.cloudinary.com/du9wkwhju/image/upload/v1704204129/Screenshot_2024-01-02_190200_pprmsn.png)

![Donate amount](https://res.cloudinary.com/du9wkwhju/image/upload/v1704204130/Screenshot_2024-01-02_190222_vn7ajt.png)

![Enter card detais](https://res.cloudinary.com/du9wkwhju/image/upload/v1704204130/Screenshot_2024-01-02_190248_ilmeig.png)

![Confirm card details and submit](https://res.cloudinary.com/du9wkwhju/image/upload/v1704204130/Screenshot_2024-01-02_190308_vfrzlh.png)

![View past donations](https://res.cloudinary.com/du9wkwhju/image/upload/v1704204139/Screenshot_2024-01-02_190318_lamwzh.png)

## Local setup

### Prerequisites

#### Install Node.JS latest version: 

I recommend using NVM to manage your Node.Js versions. You can install NVM for windows from [here](https://github.com/coreybutler/nvm-windows). 

For installing the latest Node.Js version using nvm use command:

```nvm install latest``` and then type ```nvm use <version>```

Alternatively the link to install Node.js can be found [here](https://nodejs.org/en/download)

### Backend

1. Clone the repo:

```
git clone https://github.com/Nupoor10/cycleit-backend.git
```

2. Install all dependencies:

```
npm install
```

3. Copy the .env file

```
copy .env.example .env
```

4. Specify the .env variables like PORT, JWT_SECRET and MONGO_URI

5. For obtaining the API keys for the external APIs refer:

- [Cohere](https://www.nightfall.ai/ai-security-101/cohere-api-key#:~:text=To%20get%20a%20Cohere%20API%20key%2C%20developers%20need%20to%20sign,key%20from%20the%20Cohere%20dashboard.)

- [Braintree](https://developer.paypal.com/braintree/docs/start/overview)

6. Run the development server:

```
npm run dev
```

### Frontend

1. Clone the repo:

```
git clone https://github.com/Nupoor10/cycleit.git
```

2. Install all dependencies:

```
npm install
```

3. Copy the .env file

```
copy .env.example .env
```

4. Replace the VITE_BACKEND_URL by your backend url specifying the port. The default value is: 

```
http://localhost:8080/api/v1
```
5. Obtain the Geopaify API key and set it in the .env file.
Refer: [Geoapify](https://www.geoapify.com/get-started-with-maps-api)

6. Run the development server:

```
npm run dev
```