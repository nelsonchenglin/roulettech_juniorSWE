This is a basic app mocking a drinks menu.
Made with Vite React frontend, Django backend.

I have provided some initial data in the form of a Django fixture.

To view the data on startup:
- clone the repository
- open the repository in your IDE
- in your terminal, navigate to /repository/backend
- start the virtual environment
  - windows: `.\.venv\Scripts\activate`
  - macOS: `source .venv/bin/activate`
- run commands in your virtual environment:
  - `python manage.py loaddata fixtures/products.json`
  - `python manage.py runserver`
- open a separate terminal, navigate to /repository/frontend, and run:
  - `npm run dev`
- open browser and navigate to localhost:5173/

Application uses GET Requests to load alcoholic and non-alcoholic drinks.
POST and DELETE Requests to add/remove drinks.
