# Dynamisk React App

This project requires me to build a web shop according to a flowchart and is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Bygg appen, dess sidor och under komponenter efter flödesschemat

### pages/Products.js

○ Visa en lista på alla produkter, hämtat via ett API. Varje produkt skall visa följande

    ■ Bild på produkten
    ■ Titel
    ■ Pris
    ■ En länk till Produkt-sida, för den specifika produkten
    ■ Se till att JSX-koden enskilda produkter i listan, är omskriven till en under komponent “components/Product.js”. 
    
○ Bygg vidare på alla produkter i listan, med en “Add to Cart”-knapp, som skall möjliggöra att produkter läggs till i varukorgen


### pages/Product.js

○ Visar specifik data av den valda produkten, hämtat via ett API. Följande skall visas för den enskilda produkt-sidan:

    ■ Bild på produkten
    ■ Titel
    ■ Pris
    ■ Beskrivning
    ■ Lagersaldo

○ Bygg vidare på denna sida med en “Add to Cart”-knapp, som skall möjliggöra att produkten läggs till i varukorgen (In progress)


### pages/Checkout.js

○ Listar alla produkter som är placerade i varukorgen, i en HTML <table>

○ Varje produkt i tabellen skall visa:
  
    ■ Bild på produkten
    ■ Titel
    ■ Pris

○ Total priset för alla produkter i varukorgen, skall kalkyleras och visas.
  
○ Om inga produkter finns i varukorgen, då skall det visas en beskrivning på att varukorgen är tom, tillsammans med en knapp som tar användaren till produktlista-sidan

### components/Cart.js

○ Cart.js är inte en enskild sida, utan en del av en sida. Betyder att den skall vara tillgänglig hela tiden, precis som footer och header
  
○ Listar alla produkter som är placerade i varukorgen
  
○ Varje produkt skall visa:
  
    ■ Bild på produkten
    ■ Titel
    ■ Pris
  
○ Totalpriset för alla produkter i varukorgen, skall kalkyleras och visas.
  
○ En knapp som tar användaren till kassa-sidan
