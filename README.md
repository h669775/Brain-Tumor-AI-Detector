Brain Tumor AI Detector

Dette prosjektet er en enkel webapplikasjon som bruker en maskinlæringsmodell til å klassifisere MR-bilder av hjernen. Målet er å kunne laste opp et bilde og få en prediksjon av hvilken type svulst det kan være (eller om det ikke er svulst).

Hva prosjektet består av

Prosjektet er delt i to deler:
	•	Frontend: Nettsiden brukeren ser og laster opp bilder i
	•	Backend: Server som tar imot bildet og sender det gjennom modellen

Selve modellen er trent i Google Colab og lagret som en .keras-fil.

Hvordan det fungerer
	1.	Brukeren laster opp et MR-bilde i nettsiden
	2.	Bildet sendes til backend
	3.	Backend forbehandler bildet (resize, normalisering osv.)
	4.	Modellen kjører en prediksjon
	5.	Resultatet sendes tilbake og vises i frontend

Modellen gjør kun prediksjoner og lærer ikke under bruk.

Teknologi brukt
	•	React + TypeScript (frontend)
	•	Flask (backend)
	•	TensorFlow / Keras (modell)
	•	Python

  Hvordan kjøre prosjektet

Backend

1. Gå til backend-mappen:
       cd backend
2. Aktiver virtual environment:
       source venv/bin/activate
3. Start serveren:
       python app.py

Frontend

1. Gå til frontend-mappen:
       cd frontend
2. Start prosjektet:
       npm run install
       npm run dev
3. Åpne nettleseren på adressen som vises (som regel http://localhost:5173).

Viktig

Dette er kun et demonstrasjonsprosjekt.
Resultatene fra modellen er ikke medisinsk pålitelige og skal ikke brukes til diagnose.

Videre arbeid

Mulige forbedringer:
	•	teste flere modeller og sammenligne resultater
	•	forbedre brukergrensesnitt
	•	legge til flere evalueringsmetoder
	•	bruke større og mer variert datasett




