
# Dynamisk React-app för en webbutik

### Detta projekt kräver att jag bygger en webbutik med Create React App.

### Visa en lista över alla produkter, hämtade via ett API. Varje produkt ska visa följande:

*   Bild på produkten
*   Titel
*   Pris 
*   En länk till produktsidan för den specifika produkten 
*   Se till att JSX-koden skiljer produkterna åt i listan.

### Bygg vidare på alla produkter i listan med en "Lägg till i varukorg"-knapp, för att möjliggöra att produkterna läggs till i varukorgen.

### pages/Product.js

### Visar specifik data för den valda produkten, hämtad via ett API. Följande ska visas för den enskilda produktsidan:

*   Bild på produkten 
*   Titel 
*   Pris 
*   Beskrivning 
*   Lagersaldo

### Bygg vidare på denna sida med en "Lägg till i varukorg"-knapp, för att möjliggöra att produkten läggs till i varukorgen (pågående).

### pages/Checkout.js

- Listar alla produkter som är placerade i varukorgen i en HTML-tabell.

### Varje produkt i tabellen ska visa:

*  Bild på produkten
*   Titel
*   Pris

### Totalkostnaden för alla produkter i varukorgen ska beräknas och visas.

### Om ingen produkt finns i varukorgen ska en beskrivning om att varukorgen är tom visas tillsammans med en knapp som tar användaren till produktlistan.
components/Cart.js

### Cart.js är inte en enskild sida, utan en del av en sida. Detta innebär att den ska vara tillgänglig hela tiden, precis som footer och header.

### Listar alla produkter som är placerade i varukorgen.

### Varje produkt ska visa:

*   Bild på produkten
*   Titel
*   Pris
  
### Totalkostnaden för alla produkter i varukorgen ska beräknas och visas.

### En knapp som tar användaren till kassan.
