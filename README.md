# HPDF-task1
Task 1 - Building a simple app using NodeJS Express
The app operates at Port 3000.
The app has the following routes:
1.  http://localhost:3000/ - "Hello world- Akanksha" is displayed.
2.  http://localhost:3000/setcookie - sets a cookie with the following values- name: Akanksha age: 20 , if it doesn't exist already.
3.  http://localhost:3000/getcookies - obtains the cookies that were already set / displays 'No cookie set' if no cookie has been set
4.  http://localhost:3000/robots.txt - the app denies the requests to this page
5.  http://localhost:3000/html - renders a html page
6.  http://localhost:3000/img - renders an image
7.  http://localhost:3000/input - Displays a textbox and a submit button. The text typed is logged onto the console

Steps for installation:
1. Install node.js https://nodejs.org/en/
2. Create a directory for the app, say 'myapp'
3. Save the finalapp.js and the 'public' folder into that directory
4. Open the command prompt and navigate to the newly created directory
5. In that directory, do the following:

a. npm init
   Press enter to set the default values to create the package.json file
b. npm install express --save
   This is done to install the express package.
c. npm install cookie-parser --save
d. npm install path --save
e. npm install body-parser --save
        
Steps for usage:
1. Open the command prompt, navigate to the app directory
2. Execute the following command: node finalapp.js
3. Open the routes specified(eg. http://localhost:3000/ ) in a browser (eg. Chrome)
