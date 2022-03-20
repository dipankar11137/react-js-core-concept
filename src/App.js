import logo from './logo.svg';
import './App.css';

const number = 6666;
const singers = [
  { name: 'Dr. Mahfuz', songs: 'Pakhi ura' },
  { name: 'Eva rahman', songs: 'Tumi sona' },
  { name: 'Agun', songs: 'Shopno' },
  { name: 'Shuvro', songs: 'Pathor' }
]

function App() {
  // array declare
  const nayoks = ['Rubel', 'Bappraj', 'Kuber', 'Jashim', 'Sallu', 'Anwar'];

  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name : {nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Singer name={singer.name} songs={singer.songs}></Singer>)
      }

      {/* <Person name={nayoks[0]} nayika="mousumi"></Person>
      <Person name={nayoks[1]} nayika="popy"></Person>
      <Person name={nayoks[2]}></Person>
      <Person></Person> */}
      <h1>Khala dakco</h1>
      <Friend phone="017FukFuk"></Friend>
      <Friend phone="019TutTut"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props)
  return (
    <div className='person'>
      <h1>Nayok : {props.name}</h1>
      <h1>Nayika : {props.nayika}</h1>
      {/* <h1>Sakib Bal Hasan</h1> */}
      <p>Profession : Crickter</p>
    </div>
  );
}

function Friend(props) {
  return (
    <div className='container'>
      <h1>Jaydev Gan</h1>
      <p>Job : Maramare</p>
      <h2>Phone: {props.phone}</h2>
    </div>
  )
}

function Singer(props) {
  return (
    <div className="person">
      <h1>Singer Name : {props.name}</h1>
      <h3>Songs : {props.songs}</h3>
    </div>
  )
}

export default App;
