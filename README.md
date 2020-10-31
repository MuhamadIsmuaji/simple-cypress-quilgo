# simple-cypress-quilgo

Some tests for https://quilgo.com/ with cypress. Tests on this repo is for open main page and login.

## Working Instructions:

Assumed you have nothing installed except for node & git.

### 1. Fork This Repo

You'll need to [fork](https://github.com/MuhamadIsmuaji/simple-cypress-quilgo) it first.

After forking this project in `Github`, run these commands:
```bash
## clone forked repo to a local directory
git clone https://github.com/<your-username>/simple-cypress-quilgo.git

## cd into the cloned repo
cd simple-cypress-quilgo

## install the node_modules
npm install
```

### 2. Run Tests

You can run tests in this repo with Chrome or Firefox browser
```bash
## run tests with Chrome browser
npm run cy:run:chrome

## run tests with Firefox browser
npm run cy:run:firefox
```

After run tests, you can see the results (screenshot/video) on `cypress/evidence` folder
