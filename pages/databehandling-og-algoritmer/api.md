# API-er

## Installere requests biblioteket

```bash
pip install requests # windows
pip3 install requests # mac
```

## Liste med API-er

- [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)

## Eksempel - Pokerhånd

- [deckofcardsapi.com](https://deckofcardsapi.com)

```python
import requests

respons = requests.get("https://deckofcardsapi.com/api/deck/new/draw/?count=2")
data = respons.json()
hånd = data["cards"]
for kort in hånd:
    print(kort["value"], kort["suit"])
```

## Eksempel - Værdata

- Værmelding fra metrologisk institutt: [https://api.met.no/weatherapi/locationforecast/2.0/documentation](https://api.met.no/weatherapi/locationforecast/2.0/documentation)

Noen API-er innheholder veldig mye data.
Da kan det være lurt å *dumpe* all dataen i en JSON-fil, for så og studere hva og hvordan vi kan hente ut dataen vi ønsker.

```python
import requests
import json
# dumper dataen i en json-fil
respons = requests.get("https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.10&lon=10" , headers={ 'User-Agent': 'Python'})
data = respons.json()
with open("met.json", "w", encoding="utf-8") as fil:
    json.dump(data, fil, indent=2, ensure_ascii=False)
```

```python
# dumper dataen i en json-fil
respons = requests.get("https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.10&lon=10" , headers={ 'User-Agent': 'Python'})
data = respons.json()
#with open("met.json", "w", encoding="utf-8") as fil:
#    json.dump(data, fil, indent=2, ensure_ascii=False)
værtype = data["properties"]["timeseries"][0]["data"]["next_1_hours"]["summary"]["symbol_code"]
temperatur = data["properties"]["timeseries"][0]["data"]["instant"]["details"]["air_temperature"]
print(f"I Sandvika er det {temperatur} grader og {værtype}")
```

## Oppgaver

### Oppgave 2.18

Lag et værprogram der brukeren kan skrive inn koordinater og få ut hvordan været på det aktuelle stedet.

### Oppgave 2.19

- [https://developer.entur.org/](https://developer.entur.org/)

Bruk Enturs API og lag et program der brukeren kan skrive inn et busstopp, og få ut hvor lenge det er til neste buss/tog/trikk kommer.
