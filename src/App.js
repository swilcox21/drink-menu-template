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
              <div className='description'>tequila, fresh squeeze lime juice, agave nectar & orange liqueur</div>
            <div className="drink">OLD FASHIONED</div>
              <div className='description'>bourbon, simple syrup, orange & angustora bitters</div>
            <div className="drink">MAI TAI</div>
              <div className='description'>light rum, orange juice, pineapple juice, a splash of citrus & grenadine, topped with a dark rum float</div>
            <div className="drink">MOJITO</div>
              <div className='description'>light rum, muddled limes, mint simple& splash of soda</div>
            <div className="drink">LEMON BASIL MARTINI</div>
              <div className='description'>vodka, muddled lemons & basil simple, topped with soda</div>
      </div>
    </div>
  </>
  );
}

export default App;
