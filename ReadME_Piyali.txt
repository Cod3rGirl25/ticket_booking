This is a movie ticket booking application.
1) First page is Home page containing nav bar, Slider and Recomemnded movies.
2) To access Nav bar items click on this menu bar at the top right corner.
3) Latest Movie links contains list of movies which can be booked.
4) Click on details or Book to get redirected to movie description page.
5) In movie description page movie related details are displayed.
6) Click on book to the get redirected to ticket booking page.
7) Fill the form, all are mandetory then click on bokk for ticket booking.
8) Click on show details for ticket details.
9) Scan the QR code from mobile for mobile details.
10)Upcoming movie details page contains upcoming movie list.
11) Events page contains images for nearby events.
12) ** Search bar is dumy bar.

--------------------------------------------------------------------------
Run the project:
node modules are removes before making zip.
Unzip and run npm install.
then npm start.
3 local json files are there for fetching and adding data.
Run JSON files into local json server before running the project otherwise pictures and data won't be loaded.
1)
npx json-server movie.json --watch --port 6700
2)npx json-server data.json --watch --port 5000 
3)npx json-server event.json --watch --port 8000

**** movie.json contains all movies related data,event.json contains event related data, data.json contains data after booking the tickets.