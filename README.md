
# 🧪 Express + TypeScript Assignment — Test-Driven Project Structure

## 📋 Objective

Your task is to **build a fully structured Express.js app using TypeScript** that passes a series of pre-written Jest test cases. This assignment mimics real-world backend setup and enforces best practices including:

-   API versioning
    
-   Environment variable centralization
    
-   Separation of concerns (config, routing, controllers)
    
-   Test-driven development and folder validation
    

> ⚠️ You are not provided with any implementation files. Your job is to create the correct files and structure so that **all tests pass**.

----------

## 🚀 Getting Started

### 📥 Step 1: Clone the Test Repository

```bash
git clone https://github.com/singhsanket143/LambdaAssignment1.git
cd LambdaAssignment1

```


----------

### 📦 Step 2: Install Dependencies

```bash
npm install

```

----------

### 🧪 Step 3: Run the Tests

```bash
npm test

```

If everything is implemented correctly, you will see:

```
PASS  tests/app.test.ts
PASS  tests/config.test.ts
PASS  tests/structure.test.ts

🎉 All tests passed! Your assignment is completed ✅

```

Ideally when you setup the code for the first time, you will se failures while running the `npm test ` command because the tests will try to validate the expectaions but as you have not written any code as of now so it's expected to fail. Once you start writing the implementation by reading the error logs coming then you will be able to see a lot of green ✅ while running the tests, if that's the case then you are going in a good direction. 

Ideally after your complete implementation, all the tests should be running with success. 

----------

## 🧠 What You Need to Build

Your implementation must meet the following expectations:

----------

### 1. `app.ts` File

-   This file already includes an **export of the `app` object**
    
-   **Do not delete or modify the export statement** — only add your implementation above it
    
-   Initialize the Express app
    
-   Add JSON body middleware
    
-   Mount routes under a versioned path (e.g., `/api/v1`)
    
-   Use the version value from a centralized config
    
-   **You must not call `app.listen(...)` anywhere** in this project
    

✅ This file serves as the main entry point for the test runner.

----------

### 2. Config File: `config/server.config.ts`

-   Use `dotenv` to load environment variables
    
-   Export a `config` object containing:
    
    -   `PORT`
        
    -   `NODE_ENV`
        
-   These values must be accessed from `process.env` **only in this file**
    
-   All other files must import values from this config object
    

----------

### 3. Controllers: `controllers/`

-   Create a `controllers/` folder
    
-   Create at least one file ending in `.controller.ts`
    
-   That file must export a function (e.g., `getUser`) that handles a request
    
-   This controller must:
    
    -   Respond to the route `/api/v1/user`
        
    -   Return a **200 status code**
        
    -   Return a **JSON body** exactly as follows:
        
        ```json
        { "message": "User route works!" }
        
        ```
        

✅ The test checks both file naming and this exact response signature.

----------

### 4. Routes: `routes/v1/v1Routes.ts`

-   Create a folder structure like `routes/v1/`
    
-   Inside it, create a router file that handles at least one route (`/user`)
    
-   Use a controller from the `controllers/` folder to handle this route
    
-   Mount this router inside `app.ts` using the version from the `config` object
    

✅ The test verifies that the versioned folder exists and the router is correctly mounted under `/api/v1`.

----------

## 📁 Required Folder Structure

```

your-project/
├── src/
│   ├── app.ts
│   ├── config/
│   │   └── server.config.ts
│   ├── controllers/
│   │   └── *.controller.ts
│   ├── routes/
│   │   └── v1/
│   │       └── v1Routes.ts
├── tests/
│   ├── app.test.ts
│   ├── config.test.ts
│   └── structure.test.ts
├── tests.hash
├── verify-tests.js
├── generate-tests-hash.js
├── package.json
├── tsconfig.json
└── ...


```

----------

## ✅ Tests Will Validate That...

Category

Expectation

🔧 App Initialization

`app.ts` initializes Express app, uses middleware, mounts versioned routes

🛑 No `app.listen`

No `app.listen(...)` call in any file

📤 App Export

`app.ts` exports the app object — export must not be removed

🧪 Versioned Routing

Routes are mounted under `/api/v1` using the config

📂 Controller Structure

`controllers/` folder exists with files ending in `.controller.ts`

📣 Controller Output

`/api/v1/user` returns **200** with JSON `{ "message": "User route works!" }`

📁 Route Folder Structure

`routes/v1/` folder exists and contains a router file

🔗 Router Mounting

Router is correctly mounted in `app.ts` using the config version

⚙️ Config Usage

Env variables are used only inside `server.config.ts`, exported as `config`

----------

## 🏁 Submission Guidelines
    
-   Ensure that **all tests pass**
    
-   To check if the tests are passing then run the `npm test` command and you should see an output similar to the below image.

![image](/snaps/1.png)
    

----------

## 💡 Tips

-   The tests are strict — follow folder structure and naming exactly

-   Make sure you read the logs coming while running the `npm test` command, they are going to guide you on what to do next in your implementation.
    
-   Use TypeScript best practices (`Request`, `Response` types, etc.)
    
-   Let the failing tests guide your implementation
    
-   Only access `process.env` inside the config file — nowhere else

-   There is no strict timeline for the assignment attemp, as this is a self evaluation based assignment so you can do it at your own pace. Attempting it asap will help you to revise concepts easily. 

-   You can try to read the `/tests/app.test.ts` for the details on the expectations from the test cases.

-   If you are stuck somewhere, or find a concept new, then try to google it and read about it. Avoid usage of any AI tool like chat gpt, as the assignment is only for learning purpose and if you will not solve it yourself then this assignment is of no use to you.
    
-   Keep the `app` export in `app.ts` **exactly as it is** — only add your implementation above it
    
