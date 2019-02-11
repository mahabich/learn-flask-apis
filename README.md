# learn-flask-apis

#### 1. Install Python:

https://www.python.org/downloads/


#### 2. Follow these introductory Flask tutorials:

https://blog.miguelgrinberg.com/post/the-Flask-mega-tutorial-part-i-hello-world
https://blog.miguelgrinberg.com/post/the-Flask-mega-tutorial-part-ii-templates

#### 3. Build a basic Flask API following this tutorial:

https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask

#### 4. Get React and Flask working together:

https://realpython.com/the-ultimate-Flask-front-end/
https://realpython.com/the-ultimate-Flask-front-end-part-2/

#### 5. Figure out how to make HTTP requests using React:

https://hackernoon.com/tutorial-how-to-make-http-requests-in-react-part-1-f7afa3cd0cc8

#### 6. Combine this by building a basic React frontend for the Flask API from Step 3

Start with the codebase from Step 3.

Implement a React frontend inside your Flask app using the code from Step 4.

Refer to Step 5 in order to figure out how to call your Flask API from React.

Build a basic React frontend that allows you to view and delete To-Do items (note that the DELETE request is not provided in the tutorial).

##### Useful Commands

python -m venv venv

pip install flask

python app.py

curl -i http://localhost:5000/todo/api/v1.0/tasks
curl -i http://localhost:5000/todo/api/v1.0/tasks/1
curl -i -H "Content-Type: application/json" -X POST -d "{\"title\":\"Read a book\"}" http://localhost:5000/todo/api/v1.0/tasks
curl -i -H "Content-Type: application/json" -X PUT -d "{\"done\":true}" http://localhost:5000/todo/api/v1.0/tasks/2