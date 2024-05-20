Veckans teoretiska frågor – Jobchaser del 1


•	React är ett open-source JavaScript bibliotek som utvecklades av Facebook för att kunna förkorta/förenkla utvecklandet av onlineappar med mindre kod.
	Den gör det också möjligt för programmerare att skapa appar enbart med JavaScript.
•	JSX står för JavaScript XML och är därför en ”html-extension” (gör att man kan skriva html-liknande kod i JavaScript).
•	En komponent i React är helt enkelt en bit fristående samt återanvändbar kod som fyller samma funktionalitet som JavaScriptfunktioner/klasser men som kan returnera html.
•	Props i React är ett keyword som står för properties och är objekt. Detta keyword används för att ”skicka vidare” data från ”parent to child”, man kan annars säga att props representerar den faktiska datan.
•	Med one-way-dataflow (unidirectional) menar man att data endast kan skickas åt ett håll.
•	Conditionell rendering är processen som representeras av if-else satser, detta inkluderar även ramverk och bibiliotek där det inte behövs skrivas if-else så länge det kompileras.

-----

Veckans teoretiska frågor – Jobchaser del 2

•	Vad är state i React?
State är ett objekt som lagrar en komponents “property” värden.
•	Vad är det för skillnad mellan state och props?
State är real-time data som endast används för dens specifika komponent.
Props används för att skicka/passera data eller properties från en component till en annan komponent.
•	Vad menas med en kontrollerad komponent i React?
En kontrollerad komponent i React är när data hanteras av React och inte DOM:en. Exempelvis, input data.
•	Vad är en callback handler?
En callback handler i React är en funktion som skickas som en prop till en komponent för att hantera en specifik händelse. 
•	Vad menas med "lifting state up"?
När man vill att två komponenter ska dela “state” vid förändringar.
Man ersätter state med props.
•	Vad är syftet med useEffect-hook i React?
En hook som tillåtter en att synkronisera en component med ett externt system.
•	Vad är syftet kring den s.k dependency-arrayen i useEffect?
För att kolla om innehållet inom arrayen i fråga har förändrats mellan olika renderingar.

--------
Veckans teoretiska frågor – Jobchaser del 3

•	Vad menas med Reacts ekosystem? 
En samling av olika verktyg, bibliotek och dylikt som ägnas specifikt om biblioteket React.
•	Nämn några andra viktiga bibliotek i Reacts ekosystem förutom React Router och React Hook Form
Redux och Axios
•	Vad är fördelen med att använda React Hook Form?
React Hook Form lägger fokus på minimal omrendering vilket leder till en förbättring av prestanda speciellt eftersom det är byggt för att vara lättviktig. Den integrerar lätt tillsammans med andra bibliotek och komponenter tack vare Reacts ekosystem som den är en del av. En till fördel, kortare/mindre kodkrav gällande formulär.
•	Vad är syftet med useContext? Vilket problem med props löser den?
Med useContext tillåter man delning av states och värden mellan komponenter utan att behöva följa den specifika komponenthierarkin via props ("prop drilling").
•	Vilka fördelar finns det att använda Tailwind / nackdelar? 
Fördelar: Responsiv, ej behöva skriva anpassad CSS, fördefinierade klasser, konfigurbar.
Nackdelar: Info-overload för nybörjare, blandning av styles och innehåll vilket kan leda till svårläshet, många utility-klasser kan leda till svårheter gällande läsning av kod samt dess underhåll.

-------

Veckans teoretiska frågor – Jobchaser del 4

•	Vad är Redux Toolkit?
Redux toolkit är ett verktygssätt för att effektivisera arbetet med biblioteket Redux. 
•	När, i vilka situationer vill man använda Redux Toolkit?
När man vill reducera mängden boilerplate-kod som är vanligt med Redux.
Eller när globala tillstånd är komplexa i React. 
•	Beskriv typiska områden hur man använder Typescript i React? (ex props, event, useReducer, etc)
Props: För att definiera typerna på props som komponenter tar emot, vilket förbättrar kodens läsbarhet och minskar risken för buggar.
Event: För att typa olika händelser som exempelvis onClick, onChange, etc., vilket säkerställer korrekt hantering av event-objekt.
useReducer: För att typa state och actions i en reducer, vilket ger starkare typkontroll och säkerhet.

------------------------------------------------------------------------------

Veckans uppgift 
Fortsätta med Trello (eller liknande) för egen projektplanering
Fortsätta skissa wireframe/prototyp i Figma eller liknande
Implementera  navigering / routing  med React Router 6
Hantera formulär med validering med React Hook Form
Göra ett global state för om användaren är inloggad eller inte med useContext
Styling av nya komponenter med  Tailwind CSS
Frivilligt:  Funktionalitet för dark- och light-mode med hjälp av Tailwind och useContext