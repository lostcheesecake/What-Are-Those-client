#What Are Those

# FRONT END
# Capstone Project
![screenshot](https://i.imgur.com/8V8c3c5.png)

Backend repo: https://github.com/lostcheesecake/What-Are-Those-api
Website: https://lostcheesecake.github.io/What-Are-Those-client/#/
Heroku Backend: https://what-are-those-api.herokuapp.com/


## Project Idea

I created an app using Ruby on Rails for my backend, and React.js for my frontend
 which allows users to upload a sneaker/shoe with details of the
sneaker's brand, style, and color. Then they are able to see a list of other
sneakers that they created, along with sneakers created by other users.



## How to use app on your computer

- Fork and clone the repo to your computer
- `bin/rails server` to start backend server
- `npm run server` to start the frontend server


## Write between 3-5 user stories


- User will be able to sign up
- User will be able to sign in
- User will be able to sign out
- User will be able to change password
- User will be able to create a sneaker resource
- User will be able to delete a sneaker resource
- User will be able to update a sneaker resource
- User will be able to see a list of the sneakers resource


## Technologies

- bootstrap
- html
- scss
- css
- javascript
- rails
- ruby
- react


## Plan your tables and columns

A one-to-many table with user having many sneakers,
and sneakers will have brand, style, color



## Create an ERD (entity relationship diagram)

Erd link: https://imgur.com/ULQfFhK


## Routing

What routes will you need to make the proper request to your API?

| Verb    | URI Pattern            | Controller#Action             |
|---------|------------------------|-------------------------------|
| POST    | `/sign-up`             | `users.post/sign-up`          |
| POST    | `/sign-in`             | `users.post/sign-in`          |
| PATCH   | `/change-password`     | `users.patch/change-password` |
| DELETE  | `/sign-out`            | `users.delete/sign-out`       |
| POST    | `/sneakers`           | `create`                      |
| GET     | `/sneakers`           | `sneakers#index`             |
| GET     | `/sneakers/:id`       | `sneakers#show`              |
| PATCH   | `/sneakers/:id`       | `sneakers#update`            |
| DELETE  | `/sneakers/:id`       | `sneakers#destroy`           |


## Wireframes

Wireframe link: https://imgur.com/G8nrLsR


## Problems I had

I had many problems that I ran into while creating this project, the hardest one
was getting the backend to work, I had to redo the entire back end because the
problem wouldn't dissapear, with the problem being a constant 500 error.


## Timetable

- Work methodically
- Create wireframe and ERD
- Get both repos setup
- get heroku setup
- Get backend api ready with curlscripts
- check for errors, fix them
- console log when needed
- Get frontend client ready
