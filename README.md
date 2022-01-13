### steps:

```shell
cd ..
npx create-react-app goit-react-hw-01-components
cd !$

git init && git add . && git commit -m "initial project files"
git remote add origin https://github.com/KostiantynO/goit-react-hw-01-components.git
git remote -v && git status
git push -u origin HEAD

npm i -D prettier eslint prop-types gh-pages styled-components
npx mrm@2 lint-staged

curl --man | less +/-O
curl -O https://raw.githubusercontent.com/goitacademy/react-lint-staged-workshop/master/.prettierrc.json
```

### `package.json` - add to `package.json` two `scripts` and `homepage`:

```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-01-components",

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },

  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,scss,md}": "prettier --write"
  }
```

```shell
git add . && git commit -m "Updates"
git push
npm run deploy
```
