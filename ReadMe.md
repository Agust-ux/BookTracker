# BookTracker
<!-- DENNE README ER LAGD I SAMARBEID MED KI -->
BookTracker er en enkel webapplikasjon for å holde oversikt over bøker du ønsker å lese, leser nå eller har lest. Prosjektet er utviklet som et CRUD-prosjekt med frontend, backend og database.

## Funksjoner

* Legge til nye bøker
* Se alle registrerte bøker
* Redigere eksisterende bøker
* Slette bøker
* Se statistikk over lesingen
* Se de siste registrerte bøkene på forsiden
* Organisere bøker etter status:

  * Vil lese
  * Leser
  * Har lest

## Teknologier

### Frontend

* HTML5
* CSS
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express.js

### Database

* MariaDB

## Databasestruktur

Tabellen `books` inneholder:

| Felt       | Type      |
| ---------- | --------- |
| id         | INT       |
| user_id    | INT       |
| title      | VARCHAR   |
| author     | VARCHAR   |
| status     | ENUM      |
| rating     | INT       |
| review     | TEXT      |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

## API Endepunkter

### Hent alle bøker

GET /books

### Opprett bok

POST /books

### Oppdater bok

PATCH /books/:id

### Slett bok

DELETE /books/:id

### Hent statistikk

GET /stats

### Hent siste registrerte bøker

GET /recent-books

## Installasjon

### 1. Klon prosjektet

```bash
git clone <repository-url>
```

### 2. Installer avhengigheter

```bash
npm install
```

### 3. Opprett .env-fil

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=ditt_passord
DB_DATABASE=booktracker
```

### 4. Start serveren

```bash
node server.js
```

Serveren starter på:

```text
http://localhost:3007
```

## Mappestruktur

```text
.
├── backend
│   ├── bookTracer.sql
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── frontend
│   ├── css
│   │   ├── faq.css
│   │   ├── hjelp.css
│   │   ├── index.css
│   │   ├── mine_boker.css
│   │   ├── personvern.css
│   │   └── style.css
│   ├── faq.html
│   ├── hjelp.html
│   ├── img
│   │   └── Logo.png
│   ├── index.html
│   ├── js
│   │   ├── index.js
│   │   ├── mineBoker.js
│   │   └── script.js
│   ├── mine_boker.html
│   ├── personvern.html
│   ├── system flow
│   │   └── ER diagram.pdf
│   └── techdocs
│       ├── API.md
│       ├── Oppsett.md
│       ├── Prosjektbeskrivelse.md
│       └── Videre utvikling.md
└── ReadMe.md

8 directories, 25 files
```

## Videre utvikling

Planlagte forbedringer:

* Brukersystem med innlogging
* Hosting med Vercel
* Database hosting med Supabase
* Søke- og filtreringsfunksjon
* Bedre statistikk og visualisering
* Mobiloptimalisering
* Toast-varsler og forbedret brukeropplevelse

## Kilder

Prosjektet er utviklet med utgangspunkt i egen kode, dokumentasjon og veiledning fra:

* MDN Web Docs
* Express.js dokumentasjon
* MariaDB dokumentasjon
* Node.js dokumentasjon

Det er også brukt kunstig intelligens som støtteverktøy til feilsøking, designforslag, dokumentasjon og kodeforklaringer.

## Lisens

Dette prosjektet er utviklet som et skoleprosjekt og er ikke ment for produksjonsbruk.
