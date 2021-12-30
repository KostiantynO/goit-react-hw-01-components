### steps:

```shell
cd ..
npx create-react-app goit-react-hw-01-components
cd !$

git init && git add . && git commit -m "initial project files"
git remote add origin https://github.com/KostiantynO/goit-react-hw-01-components.git
git remote -v && git status
git push -u origin HEAD

npm i -D prettier eslint modern-normalize prop-types gh-pages styled-components
npx mrm@2 lint-staged

npm run deploy
```

### package.json - `add to package.json two scripts:`

```json
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```

```shell
curl --man | less +/-L
curl -O https://raw.githubusercontent.com/goitacademy/react-lint-staged-workshop/master/.prettierrc.json
```
