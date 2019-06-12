## So cabbage, here's what you do first
- Make sure you have node.js installed
- npm install
- node server.js

Api is being hosted on http://localhost:3000

Debug webpage is being hosted on http://localhost (http defaults to port 80, you should know that :P)

### Steps to do
- With the server running in the background, visit the localhost webpage
- Open up the console and click on the post debug button for a post request and the get debug button for a get request

#### So what does this mean for you
Congrats, you can send information across localhost, woo!

My thoughts, given the nature of this entire task, it doesn't make sense to use get requests at all.
Firstly you need to specify what you want to do, I suggest you structure your api like so

baseUrl = 'localhost:3000/'

/add
/delete
/Update

use post requests to handle sending across the right information from the client side

your 'Store' would look like so

const store = [
    {
        name: 'pen',
        price: 5,
        Category: 'school appliances',
        msc: '...'
    }
]
SqlLite is said to be easy to set up as opposed to a mySql server, it's essentially a file from my understanding.
Use my example above as a last resort, it's very easy to keep track of 200 items.

System requirements from the spec..
IMO it screams sql, this guy wants sql. But if that can't happen, make sure your post api can dynamically handle the right information givena and
dish back the right information. The hosted webpage that I made is only for debugging I imagine, you could protentially style it if you want. (triage your
requirements, time management).

SRC control- Github
AS FOR CODE COVERAGE, LOOK INTO JEST, LOOK HOW COVERAGE IS MANAGED.


Run tests - npm run test
This gives good output, make use of it

When you run this command, it literally recursively searches every directory for a directory called __tests__
When it finds it, it searches for files with 'unit' inside of them (it's a regex).
Look at the examples I made, I left an intentional error in one, try fix it and run the test command again

For testing conventions, it's best you use the describe to name out the file you're testing, then you into sub-modular details like functions etc.

Last but not least, the further comments for adding to your own readme.

The act of not including tokens and user/password is very destructive and susceptible to attacks since anyone with knowledge to the api can access/destroy
information. You could potentially even make a small checker for a password or token like (12312kjlknkjkj12gjdh123d), it's plaintext but better than nothing.

These are all ideas, make sure you get the implementation worked out, testing is vital, look into mocking the functions. A very good le of thumb is if your
code is hard to test, you need to re-write your code.

Best of luck

and yes, this is all JS (and node, can't forget that..)