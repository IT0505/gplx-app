This is a starter template for [Learn Next.js](https://nextjs.org/learn).  

---

## About our website 👋
This website contains 200 multiple choice questions about traffic laws to help you practice, do sample test to prepare for your A1 driver license.  
The website currently only have questions for A1 driver license, we will update more questions for A2, B1, B2 license.  

## This repository is just Frontend of our website.
You need our [Backend](https://github.com/IT0505/gplx-app-be) repository to run full website on localhost.

## How to run this repository on localhost
- After download and extract, you need to open `gplx-app/api/axiosClient.js` file and change value of `PORT` to match with the `PORT` you run our Backend on if it isn't match. Our Backend will run on `PORT`:8080 on default.

- Then you just need to type in the terminal _(navigate terminal to the folder contains README.md file)_ following command:  
  - `npm install` and wait for the library installed then type following command:  
  - `npm run dev` and the project will run on `http://localhost:3000` _(on default setting)_  
