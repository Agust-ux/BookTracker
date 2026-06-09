# Videre utvikling – BookTracker

## 1. Nåværende løsning

Prosjektet er i dag bygget som en tradisjonell fullstack applikasjon med:

- Frontend: HTML, CSS og JavaScript
- Backend: Node.js med Express
- Database: MariaDB (lokal database)

Løsningen kjører lokalt og er egnet for utvikling og testing.

---

## 2. Plan for videre utvikling

Målet videre er å gjøre prosjektet mer skalerbart, moderne og skybasert.

Dette innebærer å flytte løsningen til en skyarkitektur med hosting og ekstern database.

---

## 3. Hosting på Vercel

Frontend skal flyttes til Vercel.

Fordeler med Vercel:

- Enkel deploy fra GitHub
- Automatisk oppdatering ved push
- Global CDN for rask lasting
- Ingen behov for egen serverdrift

Frontend (HTML/CSS/JS) vil bli statisk og hostet direkte på Vercel.

---

## 4. Backend i sky

Backend vil fortsatt være Node.js + Express, men flyttes til en hosted løsning.

Mulige alternativer:

- Vercel Serverless Functions
- Render
- Railway

Backend vil fortsatt eksponere REST API-endepunkter som frontend bruker via fetch().

---

## 5. Migrering til Supabase

I stedet for MariaDB planlegges overgang til Supabase.

Supabase gir:

- PostgreSQL database i skyen
- Ferdig REST API
- Autentisering (brukere/login)
- Sanntidsdata (real-time updates)
- Automatisk hosting av database

---

## 6. Ny arkitektur (etter videre utvikling)

Frontend (Vercel)
        ↓ fetch()
Backend API (Vercel/Render/Serverless)
        ↓
Supabase (PostgreSQL cloud database)

---

## 7. Fordeler med ny løsning

- Ingen lokal server kreves
- Tilgang fra hvor som helst
- Bedre skalerbarhet
- Mer profesjonell arkitektur
- Enklere å dele prosjektet

---

## 8. Mulige videre forbedringer

- Brukerinnlogging via Supabase Auth
- Personlige boklister per bruker
- Cloud storage for brukerdata
- Bedre sikkerhet og tilgangskontroll
- Mobilapp (React Native eller lignende)

---

## 9. Konklusjon

Videre utvikling av BookTracker vil flytte prosjektet fra en lokal fullstack løsning til en moderne skybasert arkitektur med Vercel og Supabase. Dette vil gjøre applikasjonen mer skalerbar, tilgjengelig og profesjonell.