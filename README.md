# react-starter

react-starter is a react project with the goal of easing the development process by including the frameworks needed for authentication, token management, routing, and styling.

## Installing and Running

```bash
npm install
npm run dev
```
Then browse to http://localhost:1234

## Additional Information

This project provides the following functionality:

* Project structure scalable for large applications
* Examples of using React hooks and context using React v16.8.2
* [bulma.io](https://bulma.io) - layout and css
* [parcel](https://parceljs.org/) - code bundling
* [react router](https://reacttraining.com/react-router/) - routing
* [react-spring](https://www.react-spring.io/) - animations and route transitions
* [json-server](https://github.com/typicode/json-server) - custom rest api with jwt token authorization and refreshes
* [emotion.sh](https://emotion.sh/docs/introduction) - styled components
* [react-loadable](https://github.com/jamiebuilds/react-loadable) - examples of route based code splitting
* [dotenv](https://github.com/motdotla/dotenv) - localized environment variables for development
* [axios](https://github.com/axios/axios) - HTTP client requests.  Middleware used for automatic token refreshes.

*Note that .env variables should be moved to constants file with the exception of any developer specific settings like API keys, etc.

## Getting Started

After getting the project installed and confirming the application is running correctly, begin adding routes/content to the PrivateContent component.
