# Feladatok

(Tetszőleges sorrendben megoldhatóak)

## 1. feladat

Legyenek törölhetőek az elemek.

Egy lehetséges megoldás, ha EventEmitter-t és Output dekorátor függvényt használunk:

https://angular.io/guide/event-binding#custom-events-with-eventemitter

## 2. feladat

Lehessen átnevezni elemet:
- Ceruza ikonra kattintva a sor végén a label helyett egy input mező jelenjen meg
- Ha kívül kattintunk az input mezőn, akkor elmentjük az értékét, és visszaváltunk szöveges label-re

## 3. feladat

Ha rákattintunk egy fájlra, akkor a tree mellett jobb oldalon jelenjen meg egy Detail nézet, ami az alábbi adatokat jelenítse meg szövegesen:
- Fájl neve*
- Fájl létrehozási dátuma*
- Fájl utolsó módosításának dátuma*
- Fájl mérete*
- Tulajdonos neve
- Tulajdonos email címe

A DataService-ben a kiinduló adatot töltsd fel dummy adatokkal, úgy, hogy minden fájlnak legyen minden tulajdonsága!

## 3.1 feladat

- A Detail nézetben legyen egy Edit gomb.
- Ha az Edit gombra kattintunk, akkor a szöveges kiírás helyett egy Űrlap jelenjen meg
    - Elegendő Template Driven Form-ot használni, amit tanultatok, de ha valaki akarja, megnézheti a Reactive Formokat is
- Az űrlapon keresztül lehessen szerkeszteni a fájl tulajdonságait
- A csillaggal jelölt mezők kitöltése kötelező legyen
- Próbálj minél pontosabban validálni:
    - https://angular.io/guide/form-validation

## 3.2 feladat

Ha a Tree-ben nevezünk át egy fájlt, miközben a fájl tulajdonságai látszanak a Detail nézetben, akkor frissüljön a fájl neve a Detail nézetben is

## 3.3 feladat

Ha a Detailben nevezünk át egy fájlt, akkor frissüljön a fájl neve a Tree nézetben is.

