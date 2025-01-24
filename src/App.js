import './App.css';
import UserProfile from './UserProfile';

function App() {

  const details = {
    name : "Rahul Soni",
    age : 20,
    location : "Surat",
    bio : "Har Har Mahadev❤️"
  }

  return(
    <UserProfile  name={details.name} age={details.age} loc={details.location} bio={details.bio}/>
  )
}

export default App;