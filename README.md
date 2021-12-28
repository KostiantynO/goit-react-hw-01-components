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

<!-- curl -OL https://raw.githubusercontent.com/<username>/<repo-name>/<branch-name>/path/to/file -->

```shell
curl --man | less +/-O
curl --man | less +/-L
curl -O https://raw.githubusercontent.com/goitacademy/react-lint-staged-workshop/master/.prettierrc.json
```
