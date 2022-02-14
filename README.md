# Express Crash

> Simple project for learning how to make REST APIs with express js using a mongodb database.

## Prerequisites

- [Node js](https://nodejs.org/en/)

## Get started

1. clone the repo

2. Set up `.env` file, all the necessary environment variables can be found in `.env.example`

3. Install the dependencies using the command:
     ```sh
    $ npm install
    ```

4. Run the server locally:
    ```sh
    $ npm run devStart
    ```

## Routes

1. Home page 

    - Method: GET

    - Endpoint: http://localhost:3000/


2. Create user

    - Method: POST

    - Endpoint: http://localhost:3000/users

    - Request Body format:
        ```json
            {
            "name": "John Doe", // required
            "has_a_job": true, // optional
            "date_employed": "2022-02-15" // optional
            }
        ```

    
3. Get list of user

    - Method: GET

    - Endpoint: http://localhost:3000/users


4. Get User details

    - Method: GET

    - Endpoint: http://localhost:3000/users/:userId


5. Delete User

    - Method: DELETE

    - Endpoint: http://localhost:3000/users/:userId


6. Update User details

    - Method: PATCH

    - Request Body format:

        ```json
            {
            "name": "John Doe", // optional
            "has_a_job": true, // optional
            "date_employed": "2022-02-15" // optional
            }
        ```

    - Endpoint: http://localhost:3000/users/:userId

    
