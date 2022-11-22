import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css';

// import axios from 'axios'
// import { useState, useEffect } from 'react'

// //////////Axios call to get ETA for 65 bus INbound from Brighton Center to Library////////////
// //useState is a hook that's tracking changes in the component
// //ibuses is my current state (where I'm storing my property value)
// //setInbound is the function to update ibuses
// //useEffect is another hook that's performing a side effect AKA another job/task
// //we've created the function getInbound to make the axios call, then running the state updater function setInbound, to give a new value to ibuses.
// //then ibuses is passed down as a prop to my component .jsx file through routes
// const [ibuses, setInbound] = useState([])
// useEffect(() => {
//     const getInbound = async () => {
//     const response = await axios.get(`https://api-v3.mbta.com/predictions?filter[stop]=1026`)
//     // console.log(response.data.data)
//     setInbound(response.data.data)
//     }
// getInbound()}, [])


function App() {
  return (
    <div className="App">

      <div className = "header">
        <Header />
      </div>

      <div className = "main">
        <Main />
      </div>

      <div className = "footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
