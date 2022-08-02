import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <img className="background" src="https://www.aspicyperspective.com/wp-content/uploads/2016/04/Drunken-monkey-rum-cocktail-11.jpg" alt=""/>
      <div className="drinkList">
            <br/>
            <br/>

            <h1 className="title">Cocktails</h1>
            <div className="drink">MARGARITA</div>
            <ul className="drinkDescription">
              <li className='topIngredient'>- tequila</li>
              <li>- fresh squeeze lime juice</li>
              <li>- agave nectar</li>
              <li>- orange liqueur</li>
            </ul>
            <div className="drink">OLD FASHIONED</div>
            <ul className="drinkDescription">
              <li className='topIngredient'>- bourbon</li>
              <li>- simple syrup</li>
              <li>- orange / angustora bitters</li>
            </ul>
            <div className="drink">MAI TAI</div>
            <ul className="drinkDescription">
              <li className='topIngredient'>- light rum</li>
              <li>- orange juice</li>
              <li>- pineapple juice</li>
              <li>- citrus splash</li>
              <li>- grenadine</li>
              <li>- dark rum float</li>
            </ul>
            <div className="drink">MOJITO</div>
            <ul className="drinkDescription">
              <li className='topIngredient'>- light rum</li>
              <li>- muddled limes</li>
              <li>- mint simple</li>
              <li>- splash of soda </li>
            </ul>
            <div className="drink">LEMON BASIL MARTINI</div>
            <ul className="drinkDescription">
              <li className='topIngredient'>- vodka</li>
              <li>- muddled lemons</li>
              <li>- basil simple</li>
            </ul>
      </div>
    </div>
  </>
  );
}

export default App;
