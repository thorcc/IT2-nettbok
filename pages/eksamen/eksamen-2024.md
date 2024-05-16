# Forberedelse til eksamen vår 2024

For flere detaljer om eksamen, se [eksamensveiledningen vår 2024](https://eksamen.udir.no/epsmateriell/2024/v/rea3049-py/nb-no). Denne inkluderer informasjon om karakterer, eksempelbesvarelser og annet vi ikke går inn på her.

## Antydet videreutvikling av eksamen

Dette er hva Utdanningsdirektoratet skriver om eksamen vår 2024, sammenlignet med eksamen vår 2023:

> Det er naturlig at utforming av oppgaver som oppgave 1-6 dreies mer i **objektorientert retning**. Spesielt kan man merke seg at strategier for **feilsøking og testing vil prøves i en objektorientert kontekst** i fremtidige eksamener. Det kan da blant annet være aktuelt **å skrive og bruke testklasser og testmetoder**. Det kan også være naturlig at oppgaver med **informasjon fra datasett knyttes sammen med objektorientert utvikling** og programmering samt **utvikling av dynamiske løsninger med brukergrensesnitt**. Oppgave 10 vil kunne variere i tema, men bestå som en **større objektorientert utviklings- og implementasjonsoppgave**. Det bør også forventes tiltakende **økende kompleksitet i objektorientert modellering** på eksamen.

Kilde: [eksamensveiledning vår 2024](https://eksamen.udir.no/epsmateriell/2024/v/rea3049-py/nb-no).

Denne siden baserer seg blant annet på denne vurderingen fra Udir.

## Oversikt over repetisjon

### Objektorientert programmering

- Repeter [UML-diagrammer](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/)
  - Egenskaper og metoder
  - [Assosiasjoner](../apputvikling/assosiasjon.mdx) av ulike slag

- Repeter klasser og objekter
  - [Pokemon-oppgavene](https://it2.thorcc.no/apputvikling/oppgaver) er relevante

### Feilsøking

- Repeter oppgave [3.16](../apputvikling/testing.mdx#316---oppgave-6-v23), fyll ut testskjemaet

### Testing

- Repeter [håndtering av feil og testing](../apputvikling/testing.mdx)
  - Forstå `try` og `except`
  - Forstå `assert`
- Lær testklasser
  - Anbefaling: Prøv ut [pytest](https://docs.pytest.org/en/8.2.x/getting-started.html)
  - Lag en simpel test for å sjekke om du får riktig resultat av en kodebit
  - Lag en test som sjekker en funksjon
  - Lag en testklasse (scroll lengre ned på Getting Started-sida) og test noen funksjoner
  - Lag en test som sjekker om en funksjon feiler (se `pytest.raises` på nettsida)

## Gjøremål før eksamen

### Programvare

- Last ned [draw.io](https://www.drawio.com/) lokalt og bli kjent med programmet. draw.io brukes til å lage UML-diagrammer, flytdiagram, osv.

### Kode-eksempler

- Ha template kode (skallet) klart for ulike verktøy som kan bli nødvendig på eksamen:
  - [Pygame](../spillutvikling/pygame.md)
  - [Matplotlib](../databehandling-og-algoritmer/plotting.mdx) (for plotting)
  - [Brukergrensesnitt](../apputvikling/brukergrensesnitt.mdx)
- Du må også forsikre deg om at bibliotekene fungerer - kjør eksempler på egen maskin!

### Annet

- Det kan være lurt å forberede en fil `til-sensor.md` eller `til-sensor.txt` på forhånd.
  - Denne bør inneholde:
    - Informasjon om programvare du har brukt (inkluder versjonnummer på Python, ulike biblioteker, osv)
    - Instruksjoner til sensor om hvordan man kjører løsningen din
    - Eventuelle kommentarer til løsningen din
  - For å finne versjonen til for eks. pygame, kjør dette i terminalen: `pip show pygame`
  - Du kan erstatte pygame med et annet biblotek du har installert

## Typer eksamensoppgaver

Oppgavene på eksamen vil være i fire kategorier.

- Kategori 0 er oppgaver der kandidatene på bakgrunn av kildemateriale i forberedelsesdelen skal vise at de kan vurdere muligheter, utfordringer og konsekvenser samt drøfte **etiske dilemmaer** som oppstår som en konsekvens av informasjonsteknologi.

Se [tidligere eksamensoppgaver](https://sokeresultat.udir.no/eksamensoppgaver.html?query=informasjonsteknologi%202&ExKL=Kunnskapsl%C3%B8ftet%202020&ExCatalogTypeName=Eksamensoppgaver) for eksempler på kildemateriale.

- Kategori 1 er oppgaver der kandidatene skal kunne demonstrere forståelse gjennom **anvendelse av metoder, teknikker, verktøy** og faglige standarder og konvensjoner.

Se gjennom [databehandling og algoritmer](../databehandling-og-algoritmer/oversikt.md) og [apputvikling](../apputvikling/stortinget-fantasy.mdx).

- Kategori 2 er oppgaver som krever at kandidatene **setter seg inn i andres løsninger på problemer**, kan vurdere dem, implementere dem og/eller foreslå forbedringer.

Øv på å lese kode. Se om du forstår kode skrevet tidligere av deg selv, vennene dine eller kode du finner på internett.

- Kategori 3 er oppgaver der kandidatene må anvende strategier for å løse problemstillinger gitt i case på varierte måter og i ulike situasjoner. Dette er oppgaver der kandidatene må **produsere mer sammensatte objektorienterte programmer**.

Ha kontroll på [objektorientert programmering (OOP)](../apputvikling/assosiasjon.mdx). Her er hele apputvikling-kapittelet aktuelt.

## Vurderingskriterier

[Vurderingskriteriene](../vurderingskriterier.md) på eksamen er samme som i faget ellers.
