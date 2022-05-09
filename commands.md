# Instructions
1. Use cmnds.md file
2. Use previous projects for auth and database setup
3. Set up database
4. Add seed data
5. Set up user auth
6. Set up demo user button (with hidden form)
7. Work on features (together or separately)
8. For merge conflicts:
    - Pause
    - Get together
    - Figure out conflict
9. If you split up, work on different sections to prevent merge conflicts.

# Github Workflow
Make new branch
Work on new branch
git add .
git commit -m ""
git push
Make a pull request
Someone will approve pull request, LOOK AT CODE, then merge to main
Check out back to main, git pull
Update your working branch by switching to that branch and using 'git merge main'

# Git Stash
1.	Git stash to pick up all the changes
2.	Git checkout the current local branch
3.	Git stash apply to move all the changes to current local branch
4.	Git stash drop – delete all the changes

# Steps to follow for the practice assessment

1. check package json, especially for the pg package
2. npm install
3. npm test

## To initialize sequelize run:

- npx sequelize init
- in config/config.json, replace with this:

```
{
    "development": {
      "username": "express_practice_app",
      "password": "EzB5Dxo2dabnQBF8",
      "database": "express_practice_development",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "seederStorage": "sequelize"
    }
}
```

## Create the user in psql using the following command:

- CREATE USER express_practice_app WITH PASSWORD 'EzB5Dxo2dabnQBF8' CREATEDB;

## To create the database type in the terminal:

- npx sequelize db:create

## To generate the models use:

- npx sequelize-cli model:generate --name User --attributes fullName:string,username:string,email:string,hashedPassword:string

- npx sequelize-cli model:generate --name Story --attributes title:string,content:text,userId:integer

- npx sequelize-cli model:generate --name Comment --attributes content:string,userId:integer,storyId:integer

- npx sequelize-cli model:generate --name Like --attributes userId:integer,storyId:integer



## To generate the seed files use:

- npx dotenv sequelize seed:generate --name

## Sequelize commands for *initial creation*:

- npx sequelize db:create
- npx sequelize db:migrate
- npx sequelize db:seed:all

## Sequelize commands for *resetting the database*:

- npx sequelize db:drop
- npx sequelize db:create
- npx sequelize db:migrate
- npx sequelize db:seed:all

## Sequelize commands for *unseeding and reseeding*:

- npx sequelize db:seed:undo:all
- npx sequelize db:migrate:undo
- npx sequelize db:migrate
- npx sequelize db:seed:all

## Database's custom scripts for the database:

- "reseed": "npx sequelize db:seed:undo:all && npx sequelize db:migrate:undo && npx sequelize db:
  migrate && npx sequelize db:seed:all",\
- "reset": "npx sequelize db:drop && npx sequelize db:create && npx sequelize db:migrate && npx
  sequelize db:seed:all",
- "create": "npx sequelize db:create && npx sequelize db:migrate && npx sequelize db:seed:all"

## Associations:

- **Person** belongsTo **HairColor**
- **HairColor** hasMany **Person**

***For a one to many relationship***:
- The side with the ***foreignKey*** should use **belongsTo**
- The other side should use **hasMany**

## express app.js forms:

- **csrf**: Generates and checks csrf token, csrf package has the middleware csrfProtection that
  will attach the csrfToken method to the request object to allow you to generate a csrf token, the
  token is stored in a cookie
- **cookie-parser**: Grabs token from cookies urlencoded: one parses form data to make it readable,
  and it attaches form data to the req.body (object)

*Since we are accessing the database, we use ***async*** functions and this generates a promise:
We need an ***asyncHandler*** to process promise rejection errors if the data you send violates a
constraint and the database throws a promise rejection error port 8081*

## route 1:

- Method: GET
- Path: '/new-person'
- Because we use a form we need ***csrfProtection***,
- Because we access database we need ***asyncHandler***
- form: a **method** of "post" **action** of "/new-person"

## route 2:

- Method: POST
- Path : '/new-person'
- Destructure data from **req.body** because we are accepting form data
- We need ***csrfProtection*** because we are accessing database to create user
- We need ***asyncHandler***
- res.redirect('/')

## route 3:

- Method: GET
- Path: '/'
- Because we are accessing database to get users, we need ***asyncHandler*** render a table with
  person data but include the ***'hairColor'*** color as a string
