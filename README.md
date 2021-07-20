<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- ABOUT THE PROJECT -->
## About The Project

System to send and receive compliments.

* Implemented user authentication with JWT
* Managed SQLite database with TypeORM
* Managed admin and non-admin users
* Added new typecript @type for Express.js

## <p align="center">NLW Valoriza</p>

### Built With

* [Node.js](https://reactjs.org/)
* [Express.js](https://expressjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [SQLite](https://www.sqlite.org/)
* [TypeORM](https://typeorm.io/#/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [npm](https://nodejs.org/en/) / [yarn](https://yarnpkg.com/)
  

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:augustoyuudi/nlw-06-trilha-nodejs.git
   ```
2. Install NPM packages
   ```sh
   yarn
   ```
3. Configure databse
   ```JS
   yarn typeorm migration:run 
   ```
4. Run development server
   ```JS
   yarn dev
   ```

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/augustoyuudi/
