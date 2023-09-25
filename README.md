# Cv Sanny

Après avoir créer un nouveau repo sur Github

==> Dans un nouveau terminal

`npx create-react-app cv_sanny`

`git init`

`git add .`

`git commit -m "first commit"`

`git remote add origin https://github.com/sannydasilva/sannycv`

`git push -u origin main`

==> ajouter une dépendance :

`npm i -D gh-pages`

==> puis dans le package.json, ajouter le lien vers la homepage :

"homepage": "https://sannydasilva.github.io/sannycv",

==> dans les scripts, ajouter :

"deploy": "gh-pages -d build"

==> puis dans le terminal : `npm run build` et `npm run deploy`

Le site est en ligne via Github !
