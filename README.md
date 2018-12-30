# Member Directory
Simple membership directory to keep records of enrolled members.


## Installation
Clone from repository:
```
$ git clone https://github.com/nsiebenaller/MemberDirectory.git
```
Install dependencies:
```js
$ npm install
```

## Import CSV
```
\copy "Members"(id, first_name, last_name, address, city, state, zip, home_phone, cell_phone, email, membership_date, status, birth_date, birth_year) from './frcc2.csv' csv header;
```

## Running
Build files and start local server in watch mode:
```js
$ npm run dev
```
Open the web browser to `http://localhost:8000/`

## Help

It has bare minimum to start development:
* React
* Redux
* Webpack
* Babel and css loaders
