# Prosjektbeskrivelse – BookTracker

## 1. Introduksjon

BookTracker er en webapplikasjon som lar brukere registrere, organisere og følge med på bøker de har lest, leser, eller ønsker å lese. Systemet gir oversikt over lesestatistikk som antall bøker, gjennomsnittlig vurdering og nylig registrerte bøker.

Målet med prosjektet er å lage en fullstack-løsning som kombinerer frontend, backend og database i en enkel og funksjonell applikasjon.

---

## 2. Problemstilling

Mange som leser bøker mister oversikt over hva de har lest og hva de ønsker å lese videre. Det finnes mange apper for dette, men de kan være kompliserte eller overfylte med funksjoner.

Problemstillingen i dette prosjektet er:

Hvordan kan man lage en enkel og brukervennlig webapplikasjon som gir oversikt over personlige lesevaner?

---

## 3. Mål

Hovedmålene for prosjektet er:

- Lage en fungerende fullstack webapplikasjon
- Implementere CRUD-funksjonalitet (Create, Read, Update, Delete)
- Koble frontend til en backend API
- Lagre og hente data fra en database
- Presentere data på en oversiktlig måte i brukergrensesnittet

---

## 4. Løsning

Løsningen består av tre hoveddeler:

### Frontend
- Bygget med HTML, CSS og JavaScript
- Viser bøker i et grid-layout
- Har modal for å legge til og redigere bøker
- Henter data fra backend via fetch()

### Backend
- Bygget med Node.js og Express
- Håndterer API-endepunkter for bøker
- Kommuniserer med database
- Returnerer data i JSON-format

### Database
- MariaDB brukes som datalagring
- Inneholder tabeller for brukere og bøker
- Lagrer informasjon som tittel, forfatter, status, rating og review

---

## 5. Teknologier

- HTML
- CSS
- JavaScript
- Node.js
- Express
- MariaDB
- REST API

---

## 6. Funksjonalitet

Applikasjonen støtter følgende funksjoner:

- Legge til nye bøker
- Vise alle bøker i et grid
- Oppdatere eksisterende bøker
- Slette bøker
- Vise statistikk som:
  - Totalt antall bøker
  - Gjennomsnittlig rating
  - Antall bøker som leses nå
- Vise de tre siste registrerte bøkene

---

## 7. Arkitektur

Systemet følger en enkel klient-server-arkitektur:

Frontend (HTML/CSS/JS)
        ↓
Backend (Node.js + Express API)
        ↓
Database (MariaDB)

Frontend sender HTTP-forespørsler til backend, som igjen kommuniserer med databasen og returnerer data i JSON-format.

---

## 8. Videre utvikling

Mulige forbedringer i fremtiden:

- Brukerinnlogging og autentisering
- Personlige boklister per bruker
- Bedre filtrering og søk
- Mer avansert statistikk
- Mobilvennlig designforbedringer

---

## 9. Konklusjon

Prosjektet viser hvordan en fullstack webapplikasjon kan bygges med en enkel teknologi-stack. BookTracker gir brukeren en oversiktlig og funksjonell løsning for å holde styr på lesevaner, samtidig som det demonstrerer grunnleggende prinsipper innen frontend, backend og databaser.