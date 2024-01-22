# Algoritmer

- Hvis du gir en _presis_ beskrivelse for hvordan man skal løse et _problem_, så har du
  beskrevet det vi kaller en algoritme
- En algoritme består av en serie med små og entydige steg
- En algoritme må
  - stoppe etter et endelig antall steg
  - ta null eller flere input
  - produsere et output som står i forhold til input
  - være helt presist definert for hvert enkelt steg
- En algoritme _bør_ være effektiv

## Algoritme 1: høyeste tallet i en liste

```pseudo
FUNCTION høyeste (liste)
  SET høyest TO første tall i liste
  FOR hvert tall i liste
    IF tall GREATER THAN høyest
      SET høyest TO tall
    END IF
  END FOR
  RETURN høyest
END FUNCTION
```

```python
def høyeste(liste: list[int]):
    høyest = liste[0]
    for tall in liste:
        if tall > høyest:
            høyest = tall
    return høyest

print(høyeste([2, -4, 5, 1])) # -> 5
```

### Innebygde funksjoner i Python

Python har en del innebygde funksjoner som løser en _vanlige_ programmeringsproblemer.
For eksempel er det å finne det høyeste tallet i en liste med tall et ganske vanlig problem, og i Python kan vi ganske enkelt bruke den innebygde funksjonen `max` for å finne det høyeste tallet i en liste.

```python
print(max([2, -4, 5, 1])) # -> 5
```

## Algoritme 2: Gjennomsnitt av tallene i en liste

```pseudo
FUNCTION gjennomsnitt (liste)
  SET total TO 0
  SET antall to 0
  FOR hvert tall i liste
    SET total TO total + tall
    SET antall TO antall + 1
  END FOR
  RETURN total / antall
END FUNCTION
```

```python
def gjennomsnitt(liste: list[int]):
  total = 0
  antall = 0
  for tall in liste:
    total += tall
    antall += 1
  return total / antall
print(gjennomsnitt([2, -4, 5, 1])) # -> 1.0
```

### Alternative Python-løsninger

```python
def gjennomsnitt(liste: list[int]):
   return sum(liste) / len(liste)
print(gjennomsnitt([2, -4, 5, 1])) # -> 1.0

```

```python
from statistics import mean
print(mean([2, -4, 5, 1])) # -> 1.0
```

## Algoritme 3: Nest høyeste tallet i en liste

```pseudo
FUNCTION nest_høyest (liste)
  SET høyest TO uendelig negativt tall
  SET nest_høyest TO uendelig negativt tall
  FOR hvert tall i liste
    IF tall GREATER THAN høyest
      SET nest_høyest TO høyest
      SET høyest TO tall
    ELSE IF tall GREATER THAN nest_høyest
      SET nest_høyest TO tall
    END IF
  END FOR
  RETURN nest_høyest
END FUNCTION
```

```python
def nest_høyest(liste: list[int]):
  høyest = float('-inf')
  nest_høyest = float('-inf')
  for tall in liste:
    if tall > høyest:
      nest_høyest = høyest
      høyest = tall
    elif tall > nest_høyest:
      nest_høyest = tall
  return nest_høyest

print(nest_høyest([2, -4, 5, 1])) # -> 2
```

## Algoritme 4: n-høyeste tall i en liste

### Alternativ 1

> Algoritmen under bruker funksjonen `høyeste` som er definert i [Algoritme 1](#algoritme-1-høyeste-tallet-i-en-liste)

```pseudo
FUNCTION n_høyeste (liste, n)
  SET høyeste_n TO en tom liste
  FOR EACH i FROM 0 TO n
    SET høyest TO høyeste(liste)
    REMOVE høyest FROM liste
    ADD høyest TO høyeste_n
  END FOR
  RETURN høyeste_n
END FUNCTION
```

```python
def n_høyeste(liste: list[int], n: int):
  høyeste_n = []
  for _ in range(n):
    høyest = høyeste(liste)
    liste.remove(høyest)
    høyeste_n.append(høyest)
  return høyeste_n
```

### Alternativ 2

```pseudo
FUNCTION n_høyeste (liste, n)
  Sorter liste i synkende rekkefølge
  RETURN n siste elemenetene i liste
END FUNCTION
```

```python
def n_høyeste(liste: list[int], n: int):
  sortert_liste = sorted(liste, reverse=True)
  return sortert_liste[:n]

print(n_høyeste([2, -4, 5, 1, 6], 3))
```

## Algoritme 5: Sortere en liste med ordbøker

```python
personer = [
   {
      "navn": "Thor",
      "alder": 33
   },
   {
      "navn": "Ravi",
      "alder": 39
   }
]

personer_sortert = sorted(personer, key=lambda person: person['alder'], reverse=True)
print(personer_sortert) # -> [{'navn': 'Ravi', 'alder': 39}, {'navn': 'Thor', 'alder': 33}]
```

## Algoritme 6: Sortere en ordbok med verdier

```python
personer = {
   "Thor": 33,
   "Ravi": 39
}
personer_sortert = sorted(personer.items(), key=lambda person: person[1], reverse=True)
print(personer_sortert) # -> [('Ravi', 39), ('Thor', 33)]
print(personer_sortert[0][0]) # -> 'Ravi'
```

## Oppgaver

### Oppgave 2.10

> Oppgave 5 fra eksamen V23

Nedenfor finner du flere linjer med pseudokode. Sorter linjene i riktig rekkefølge, slik at det blir pseudokoden til et program som skal finne det største tallet av tre tall. Tips: Linjene med pseudokode har ikke innrykk/indentering.

![v23-5](./bilder/v23-5.png)

Eksempel på svar:

```pseudo
1-G
2-A
3-D
...
```

### Oppgave 2.11

> Oppgave 6 fra eksamen H23

a) Du får i oppgave å finne det nest største tallet i en liste (array) med tall. Dersom det finnes flere like tall som er størst, skal ingen av disse regnes som nest størst. Under finner du fire alternative løsninger for denne oppgaven skrevet i pseudokode. Hvilke to løsninger er riktige?

```pseudo
1
SET størst TO negativt uendelig tall
FOR hvert tall i listen
  IF tall GREATER THAN størst
    SET størst TO tall
  ENDIF
ENDFOR
Fjern størst fra listen
SET nestStørst TO negativt uendelig tall
FOR hvert tall i listen
  IF tall GREATER THAN nestStørst 
    SET nestStørst TO tall
  ENDIF
ENDFOR
DISPLAY nestStørst

2
SET størst TO første tall i listen
SET nestStørst TO andre tall i listen
IF nestStørst GREATER THAN størst
  Bytt størst og nestStørst
ENDIF
FOR hvert tall i listen med start fra tredje tall
  IF tall GREATER THAN størst
    SET nestStørst TO størst
    SET størst TO tall
  ELSEIF tall GREATER THAN nestStørst AND tall NOT EQUAL TO størst
  SET nestStørst TO tall
  ENDIF
ENDFOR
DISPLAY nestStørst

3
SET størst TO negativt uendelig tall
SET nestStørst TO negativt uendelig tall
FOR hvert tall i listen
  IF tall GREATER THAN størst
    SET nestStørst TO størst
    SET størst TO tall
  ELSEIF tall GREATER THAN nestStørst
    SET nestStørst TO tall
  ENDIF
ENDFOR
DISPLAY nestStørst

4
Sorter listen i synkende rekkefølge
FOR hvert tall i listen
    IF tall NOT EQUAL TO neste tall i listen
        DISPLAY neste tall i listen
        avbryt for-løkken
    ENDIF
ENDFOR
```

Velg de to riktige løsningene.

- [ ] 1
- [ ] 2
- [ ] 3
- [ ] 4

b) Skriv en kort tekst der du vurderer og sammenligner de to løsningene du valgte i punkt a.

### Oppgave 2.12

> Oppgave 7 fra eksamen H23

Elementene i en indeksert variabel (liste/array) skal sorteres i stigende rekkefølge etter følgende algoritme: Man sammenligner hvert element fra venstre til høyre i listen med neste element, og hvis elementet er større enn neste element, bytter de plass. Deretter går man videre til neste element og sammenligner på nytt frem til hele listen er gjennomgått. Dette gjentas til hele listen gjennomgås uten at det forekommer noen ombyttinger.

Under finner du deler av pseudokoden for denne algoritmen. Her er a en liste med n elementer, og a[ i ] er elementet på plass i i listen.

```pseudo
SET i TO 0
FOR hver i LESSER THAN n - 1
  IF a[i] GREATER THAN a[i+1]    
    CALL byttPlass()
  ENDIF
ENDFOR
```

> Presisering: byttPlass() er en funksjon som bytter plass på to naboelementer i listen.

a) Hva blir innholdet i listen etter at vi har kjørt programmet representert ved pseudokoden over for listen a = [8, 5, 2, 6, 12], som har n = 5 elementer?
Velg riktig svar.

- [ ] `[ 5, 8, 2, 6, 12 ]`
- [ ] `[ 5, 2, 8, 6, 12 ]`
- [ ] `[ 5, 2, 6, 8, 12 ]`
- [ ] `[ 2, 5, 6, 8, 12 ]`

b) Utvid pseudokoden slik at programmet den representerer, sorterer ferdig listen a i stigende rekkefølge etter altgoritmen som er vist øverst. Forklar endringene du gjør. Obs! Du må også lage pseudokode for funksjonen byttPlass().

c) Implementer pseudokoden fra punkt b i ditt programmeringsspråk. Listen skal leses inn automatisk, og den ferdig sorterte listen skal skrives til konsollet eller vises i programmet.
