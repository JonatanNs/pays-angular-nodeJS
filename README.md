# 🌍 World Countries App

Application web permettant de gérer les pays visités 
Tu peux ajouter, modifier, supprimer et consulter les pays que tu as visités.

---

## 🚀 Stack technique

### Frontend

* Angular
* TailwindCSS + DaisyUI
* Signals (Angular)
* Reactive Forms

### Backend

* Node.js
* Express
* Nodemon
* Mongoose
* API REST
* Validation (express-validator ou DTO class-validator)

---

## 📂 Fonctionnalités

✔ Ajouter un pays
✔ Modifier un pays
✔ Supprimer un pays
✔ Voir la liste des pays
✔ Voir le détail d’un pays
✔ Messages de succès / erreur (UI state)

---

## 🧱 Structure du projet

### Frontend (Angular)

```
feature/
  pays/
    components/
    page/
    model/
core/
  api/
```

---

### Backend (Node.js)

```
routes/
controllers/
services/
dtos/ (si DTO utilisé)
middlewares/
```

---

## API Endpoints

### 📍 Pays

| Méthode | URL                  | Description             |
| ------- | -------------------- | ----------------------- |
| GET     | `/api/pays`          | Récupérer tous les pays |
| GET     | `/api/pays/:uuid`    | Récupérer un pays       |
| POST    | `/api/pays/ajouter`  | Ajouter un pays         |
| PUT     | `/api/pays/modifier` | Modifier un pays        |
| DELETE  | `/api/pays/:uuid`    | Supprimer un pays       |

---

## Installation

### 1. Cloner le projet

```
git clone <repo-url>
cd project
```

---

### 2. Backend

```
cd backend
npm install
npm run dev
```

---

### 3. Frontend

```
cd frontend
npm install
ng serve
```

---

## ⚙️ Configuration

Créer un fichier environnement Angular :

```
src/environments/environment.ts
```

```ts
export const environment = {
  apiUrl: 'http://localhost:3000'
};
```

---

## Exemple de requête

```http
POST http://localhost:3000/api/pays/ajouter
Content-Type: application/json

{
  "name": "France",
  "code": "FR"
}
```

---

## Validation

### Backend

* Validation des champs (name, code)
* Code en majuscules automatiquement
* Vérification des doublons

---

## UI

* Design avec DaisyUI
* Cartes pour afficher les pays
* Modales et pages pour CRUD
* Feedback utilisateur (success / error)

---

##  Bonnes pratiques utilisées

✔ Architecture propre (Controller / Service)
✔ Validation centralisée
✔ API REST
✔ Gestion des erreurs
✔ Signals Angular (state management léger)

---

## Améliorations possibles

* Authentification utilisateur
* Ajout de photos de voyage
* Filtrage / recherche
* Pagination
* Déploiement (Docker / AWS)

---

## Auteur

Projet réalisé par **JonatanNs** 

---

## 📄 Licence

MIT
