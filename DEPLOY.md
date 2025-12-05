# Guide de Déploiement pour CoolAtom

Votre projet est une application statique construite avec **Vite + React**. Elle est très facile à héberger gratuitement.

## Option 1 : Netlify (Recommandé - Le plus simple)

C'est la méthode la plus rapide (drag & drop).

1.  **Construire le projet** (Déjà fait, mais pour rappel) :
    Ouvrez un terminal dans le dossier du projet et lancez :
    ```bash
    npm run build
    ```
    Cela va créer un dossier `dist/` contenant votre site prêt pour la production.

2.  **Déployer** :
    *   Allez sur [netlify.com](https://www.netlify.com/) et connectez-vous (ou créez un compte).
    *   Allez dans l'onglet "Sites".
    *   **Glissez-déposez** simplement le dossier `dist` (qui se trouve dans `CoolAtom/dist`) directement dans la zone de drop sur la page Netlify.
    *   C'est en ligne ! Vous aurez une URL du type `cool-atom-xyz.netlify.app`.

---

## Option 2 : Vercel (Excellent pour React)

Si vous avez le CLI Vercel installé ou si vous préférez connecter votre GitHub.

1.  **Via le Web (GitHub)** :
    *   Poussez votre code sur un dépôt GitHub.
    *   Allez sur [vercel.com](https://vercel.com/), connectez-vous avec GitHub.
    *   Cliquez sur "Add New..." > "Project".
    *   Importez votre dépôt `CoolAtom`.
    *   Vercel détectera automatiquement que c'est du Vite. Cliquez sur **Deploy**.

2.  **Via le Terminal (CLI)** :
    *   Installez Vercel : `npm i -g vercel`
    *   Lancez la commande : `vercel`
    *   Répondez aux questions (laissez les valeurs par défaut).
    *   Votre site sera déployé en quelques secondes.

---

## Option 3 : GitHub Pages

Si vous voulez héberger directement sur GitHub.

1.  Ouvrez `vite.config.js` et ajoutez la base URL (remplacez `votre-repo` par le nom de votre dépôt) :
    ```javascript
    export default defineConfig({
      base: '/nom-du-repo/',
      plugins: [react()],
    })
    ```
2.  Installez `gh-pages` :
    ```bash
    npm install gh-pages --save-dev
    ```
3.  Ajoutez ces scripts dans `package.json` :
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
4.  Lancez : `npm run deploy`
