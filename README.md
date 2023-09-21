Deployment-Link :- https://crypto-tracker-one-opal.vercel.app/

create react app using npm (create-react-app . using dir and cd in terminal)

Initial Setup - 

 Made Root Variables and added fonts using Google fonts.
 Custom scroll Bar
 Custom selection.
 Disabling Image dragging + Folder Structure and code organisation.

Landing page - 
before using i installed npm install @mui/material @emotion/react @emotion/styled
 Header - Mui Drawer.
 Text Stroke Hover animation - landing page.
 Framer Motion - The animation for phone and entrance animation for text.

Dashboard page - 

 Mui Tab component - for dashboard tabs (custom themed)
 Get data from Coingecko api - using axios.
 ToLocaleString() - adds commas to numbers and ToFixed(2) - adds 2 decimal places
 Converting numbers to K,M,B - custom function
 Search functionality - accomplished using .filter()
 Added a delay in the animations for our Grid and List component.
 Pagination Mui - slicing the data in correspondence to the page number(adding first and last pages)
 Wrote a js function to take us to the top of the page.

Coin page - 

 Used router params to get the id of the bitcoin
 Used bitcoin id - to get the coins data, and prices for x number of days.
 Used react-chartjs-2 to make the graphs.
 Made a function to get the array of dates in x number of days.
 Used Mui Select to get the number of days, and had a function to get prices accordingly.
 Mui Toggle buttons for getting prices,mkt_cap,volume values.
 Used dangerouslySetInnerHTML attribute to render a string having html tags in it.
 Made a Loading component to make sure all the data was there, before rendering the components.
 Made a custom styled object to style Mui Components + Read More or Read Less functionality.


Compare Page - 

 For the 2 simultaneous graphs, we made 2 y-axis and 2 datasets.
 Select component mui, having the list of 150 coins.
 Also since comparison of the same coin makes no sense, we made sure that both selects have every coin other than the coin selected.


Watchlist- 
 localstorage - adding coins in an array
 localstorage - removing as well.
 useEffect -> watchlist page

Other features - 

  npm packages, react toast, all the redirected pages are directed by Link tags of react-router-dom to avoid rendering
33. Custom Mouse - 2 divs that follow the mouse (with delay)
34. Mui icons
35. Seo + Code modularity and reusability.
36. Hosted using netlify, netlify.toml file.
37. Gradient footer - gradient animation
38. Added toasts - react-toastify for every action.
