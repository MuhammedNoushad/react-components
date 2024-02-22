import "./App.css";
import ProfileCard from "./Components/ProfileCard";

const data = [
  { id: 1, name: "Muhammed Noushad", email: "muhammed@test.com" },
  { id: 2, name: "Aslah", email: "aslah@test.com" },
  { id: 3, name: "Jasir", email: "jasir@test.com" },
];

function App() {
  return (
    <div className="App">
      {data.map((data) => (
        <ProfileCard key={data.id} name={data.name} email={data.email} />
      ))}
    </div>
  );
}

export default App;
