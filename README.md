### steps:

```shell
cd ..
npx create-react-app goit-react-hw-01-components
cd !$

  git init && git add. && git commit -m "initial project files"
  git remote add origin https://github.com/KostiantynO/goit-react-hw-01-components.git
  git remote -v && git status
  git push -u origin HEAD

  npm i -D prettier eslint
  npx mrm@2 lint-staged

  npm i -D modern-normalize

  npm i -D gh-pages
  npm run deploy

npm install --save-dev prop-types
```

### package.json - `add to package.json two scripts:`

```json
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```
