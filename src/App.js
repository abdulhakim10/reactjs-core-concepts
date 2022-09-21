import logo from './logo.svg';
import './App.css';

const singers = [
  {name:'Atif Aslam', song:'Pehli Nazar'},
  {name:'Arigit Singh', song:'Tum Hi Ho'},
  {name:'Sonu Nigam', song:'Ye Dil'},
  {name:'Adnan Sami', song:'Sun Zara'},
  {name:'Sukhwinder Singh', song:'Chal Chaiya'},
  {name:'KK', song:'Dil Ibadat'}
]

function App() {
  return (
    <div className="App">
      {
        singers.map(singer =><Person name={singer.name} profession={singer.song}></Person>)
      }
     {/* <Person name="Ashraful Islam" profession="Batter"></Person>
     <Person name='Mashrafee' profession='Bowler'></Person>
     <Person name='Sakib Al Hasan' profession='Allrounder'></Person> */}
     <Friend name='Shahalam' profession='Developer'></Friend>     
     <Friend name='Rayhan' profession='Jr.Developer'></Friend>     
     <Friend name='Nesar' profession='Jr.Developer'></Friend>     

    </div>
  );
}
function Person(props){
  console.log(props);
  return(
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.profession}</p>
    </div>
  )
}

function Friend(props){
  return(
    <div className="friend">
      <h1>{props.name}</h1>
      <p>{props.profession}</p>
    </div>
  )
}

export default App;
