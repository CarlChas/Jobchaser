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

