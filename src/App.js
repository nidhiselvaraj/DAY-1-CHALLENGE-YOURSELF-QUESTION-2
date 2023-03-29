import logo from './logo.svg';

import './App.css';

function App() {
  
      // Define the initial array
      let myArray = ["North", "South", "East", "West"];

      // Function to concatenate the elements with "News"
      function addNews() {
        myArray = myArray.map(element => element + " News");
        //document.getElementById("array").innerHTML=myArray;
        document.write(myArray);
      }
  
      // Function to refresh the array using join method
      function refreshArray() {
       var res=myArray.join('<br>');
       document.getElementById("array").innerHTML = myArray.join('<br>');
       document.write(res);
      }
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Refreshing Array Function
        </p>
       
      
	
	
	<p id="array">
    <li>
      North
    </li>
    <li>
     South
    </li>
    <li>
      East
    </li>
    <li>
      West
    </li>
  </p>
  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Javascript
        </a>
	
	
	<button onClick={addNews}>Array button</button><br></br>
	<button onClick={refreshArray}>Refresh Array button</button>

      </header>
    </div>
  );
}

export default App;