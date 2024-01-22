# Algoritmer

- [Hva er en algoritme?](#hva-er-en-algoritme)
- [Algoritme 1: høyeste tallet i en liste](#algoritme-1-høyeste-tallet-i-en-liste)
- [Algoritme 2: Gjennomsnitt av tallene i en liste](#algoritme-2-gjennomsnitt-av-tallene-i-en-liste)
- [Algoritme 3: Nest høyeste tallet i en liste](#algoritme-3-nest-høyeste-tallet-i-en-liste)
- [Algoritme 4: n-høyeste tall i en liste](#algoritme-4-n-høyeste-tall-i-en-liste)
- [Algoritme 5: Sortere en liste med ordbøker](#algoritme-5-sortere-en-liste-med-ordbøker)
- [Algoritme 6: Sortere en ordbok med verdier](#algoritme-6-sortere-en-ordbok-med-verdier)

## Hva er en algoritme?

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

### Algoritmen i bruk

- [Eksempel på bruk av algoritmen som finner høyeste tall i listen](./vedlegg/spotify.ipynb)

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
