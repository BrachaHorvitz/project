# HMO Members Management System
A server-side application for managing a corona database for a large health HMO. It includes input and retrieval of records and access to a MongoDB database through a REST API.

## APIs

### Members

- `GET /member` - get all members
![Screenshot of of get all members #1](https://github.com/BrachaHorvitz/project/blob/main/public/images/GETALL1.png)
![Screenshot of get all members #2](https://github.com/BrachaHorvitz/project/blob/main/public/images/GETALL2.png)
- `GET /member/:id` - get a member by id
![Screenshot of get member](https://github.com/BrachaHorvitz/project/blob/main/public/images/GETTMEMBER.png)
- `POST /member` - create a new member
![Screenshot of post member](https://github.com/BrachaHorvitz/project/blob/main/public/images/Post%20member.png)

### Corona
- `GET /corona` - get all corona cases
![Screenshot of get all coronas #1](https://github.com/BrachaHorvitz/project/blob/main/public/images/GETCORONAS1.png)
![Screenshot of get all coronas #2](https://github.com/BrachaHorvitz/project/blob/main/public/images/GETCORONAS2.png)
- `GET /corona/:id` - get a corona case by id
![Screenshot of get corona](https://github.com/BrachaHorvitz/project/blob/main/public/images/GETCORONA.png)
- `POST /corona` - create a new corona case
![Screenshot of post corona](https://github.com/BrachaHorvitz/project/blob/main/public/images/POSTCORONA.png)


## Built With

* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)

## Dependencies

- cors: ^2.8.5
- dotenv: ^16.0.3
- express: ^4.18.2
- mongodb: ^5.4.0
- mongoose: ^7.1.0


## Stats - How To Use
### Show Not Vaccinated Count
To view the total number of patients who are not vaccinated, click on the "Show Not Vaccinated Count" button. The count will be displayed below the button.

### View Active Patients Chart
To view a chart showing the number of active patients over time, click on the "view active patients chart" button. The chart will be displayed below the button.

![Screenshot of displaying not vaccinated count and active patients chart](https://github.com/BrachaHorvitz/project/blob/main/public/images/viewStats.png)


## Technologies Used

This project was built using the following technologies:

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML
- CSS
- JavaScript
- Chart.js


## Database Schema

![Screenshot of DB schema](https://github.com/BrachaHorvitz/project/blob/main/public/images/DBSchema.png)

