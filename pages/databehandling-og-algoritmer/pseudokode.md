# Pseudokode

Pseudokode er en måte å beskrive en algoritme eller et program på ved hjelp av naturlig språk.
Det brukes ofte som et verktøy for å planlegge og designe algoritmer før de faktisk blir kodet i et bestemt programmeringsspråk.
De gjør det lettere å kommunisere og samarbeide med andre programmerere, samt å teste og feilsøke algoritmer før de blir kodet.
Og de er en god måte å lære grunnleggende programmeringskonsepter på, da det kan hjelpe deg med å forstå hvordan ulike instruksjoner og logiske uttrykk fungerer sammen for å løse et bestemt problem.

## Eksempel: utregning av utbetaling per avspilling på Spotify

### Med pseudokode

```pseudo
SET land TO READ "Hvilket land er du fra?"
IF land EQUAL TO Norge
    THEN DISPLAY "$0.44 per sang"
ELSE IF land EQUAL TO "Sverige"
    THEN DISPLAY "$0.34 per sang"
ELSE
    THEN DISPLAY "$0.22 per sang"
ENDIF
```

### Med python-kode

```python
land = input("Hvilket land kommer du fra? ")
if land.lower() == "norge":
    print("$0.44 per sang")
elif land.lower() == "sverige":
    print("$0.34 per sang")
else:
    print("$0.22 per sang")
```

## Standard for pseudokode på eksamen

På eksamen forventes det at kandidaten behersker å lese pseudokode skrevet etter denne standarden. Alle nøkkelord skrives med store bokstaver og på engelsk, mens pseudokoden ellers skrives på norsk i oppgavene. Kandidatene har metodefrihet i sitt valg av standard for pseudokode, men det forventes konsekvens. Det forventes også at pseudokode kandidatene leverer oppfyller formålet med pseudokode, bruker naturlig språk og ikke ligger tett opptil syntaks for programkode, men likevel er presis nok til å komplett beskrive logikken i programmet. Alle strukturblokker skal være indentert i pseudokode.

Kandidatene står også fritt til å bruke norsk eller engelsk i sin kode, men det forventes konsekvens.

## Udirs ordliste

Følgende nøkkelord benyttes for å representere struktur (flytkontroll) i pseudokode på eksamen

| nøkkelord                   | beskrivelse                                                                                         |
| --------------------------- | --------------------------------------------------------------------------------------------------- |
| SEQUENCE                    | representerer lineære operasjoner som utføres sekvensielt etter hverandre.                          |
| FUNCTION-RETURN-ENDFUNCTION | representerer en kallbar subrutine med eller uten returverdi.                                       |
| WHILE-ENDWHILE              | er en løkke med en betingelse for å kjøres i begynnelsen av løkken.                                 |
| REPEAT-UNTIL                | er en løkke som kjøres minst en gang, med en betingelse for gjentakelse til slutt.                  |
| FOR-ENDFOR                  | er en løkke som kjøres et visst antall ganger eller over elementer i en variabel eller tilsvarende. |
| IF-THEN-ELSE-ENDIF          | er en valgsetning som endrer flyten i algoritmen.                                                   |
| CASE-OF-OTHERS-ENDCASE      | er en flerveis forgrening av flyten basert på verdien av et uttrykk.                                |
| BEGIN-EXCEPTION-WHEN-END    | er håndtering av unntak i kjøretid.                                                                 |

Følgende nøkkelord benyttes for å representere operasjoner i pseudokode på eksamen

| nøkkelord      | beskrivelse                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| SET TO         | er deklarering eller initialisering av en variabel.                                                                   |
| CALL-RETURNING | er kall til en funksjon eller metode hvor RETURNING er returverdi dersom rutinen, funksjonen eller metoden gir dette. |
| READ           | er lesing eller mottak av input.                                                                                      |
| DISPLAY        | er visning av output til bruker.                                                                                      |
| COMPUTE        | er beregning eller avgjøring av resultat.                                                                             |
| INCREMENT      | er å legge til 1 til en tallvariabel.                                                                                 |
| DECREMENT      | er å trekke fra 1 fra en tallvariabel.                                                                                |

Følgende nøkkelord benyttes for å representere logiske operatorer i pseudokode på eksamen
| nøkkelord | beskrivelse |
| ------------ | ----------------------------------------------------------- |
| EQUAL TO | er evaluering om to uttrykk har lik verdi |
| LESSER THAN | er evaluering om et uttrykk har lavere verdi enn et annet |
| GREATER THAN | er evaluering om et uttrykk har høyere verdi enn et annet |
| NOT | er negering av et logisk uttrykk |
| OR | er en evaluering av minst ett at to logiske sannhetsverdier |
| AND | er en evaluering av to sannhetsverdier |

## Oppgaver

> Oppgavene skal besvares i en fil med navn `oppgaver-pseudokode.md`

### Oppgave 2.1

> Oppgave 1 fra eksamen H23

Hvilket av følgende er ikke et typisk kjennetegn på pseudokode? Velg riktig alternativ.

- [ ] den har uformell syntaks.
- [ ] den ligner på vanlig menneskespråk.
- [ ] den kan kjøres direkte på en datamaskin.
- [ ] den brukes ofte i planleggingsfasen av programmering.

### Oppgave 2.2

> Oppgave 2 fra eksamen V23

Ta utgangspunkt i følgende pseudokode:

```pseudo
SET m TO 3
SET i TO 1
WHILE i GREATER THAN m
  DISPLAY "Lykkelig dag!"
  INCREMENT i
ENDWHILE
```

Hvor mange ganger blir teksten "Lykkelig dag!" skrevet ut?

- [ ] tre ganger
- [ ] to ganger
- [ ] én gang
- [ ] ingen ganger

### Oppgave 2.3

> Oppgave 4 fra eksamen H23

Hvilke av de følgende sekvensene med pseudokode skriver ut tallene fra og med 1 til og med 5? Flere alternativer kan være riktige. Velg riktige svar.

```pseudo
1.
SET i TO 1
FOR hver i LESSER OR EQUAL 5
  PRINT i
ENDFOR

2.
SET i TO 1
WHILE i < 5
  PRINT i
  INCREMENT i
ENDWHILE

3.
SET i TO 0
FOR hver i LESSER OR EQUAL 4
  PRINT i+1
ENDFOR

4.
SET i TO 1
WHILE i <= 5
  PRINT i
  INCREMENT i BY 2
ENDWHILE
```

- [ ] 1
- [ ] 2
- [ ] 3
- [ ] 4

### Oppgave 2.4

> Oppgave 3 fra eksamen V23

Tallene 1, 3, 6, 10, 15, 21 og så videre kalles for trekanttall. De tilsvarer antallet prikker som vil vises i en likesidet trekant når man bruker et grunnleggende trekantmønster for å bygge trekanten. Se illustrasjonen nedenfor:

![v23-3](./bilder/v23-3.png)

Den følgende pseudokoden beskriver en funksjon som regner ut og returner trekanttallet nummer n:

```pseudo
FUNCTION trekanttall (n)
  SET tn TO n * (n+1)/2
  RETURN tn
ENDFUNCTION
```

Bruk funksjonen som er beskrevet ovenfor, og skriv pseudokoden til et program som regner sammen og skriver ut totalsummen av de ti første trekanttallene. Bruk dobbelt mellomrom for innrykk i koden der det er aktuelt. Skriv svaret ditt nedenfor.

> Du kan bruke din egen standard for pseudokode, bare den er hensiktsmessig.
