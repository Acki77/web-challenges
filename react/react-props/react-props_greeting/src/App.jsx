export default function App() {
  const names = ["Falk", "Ralf", "Felix", "Klaus"];
  return (
    <>
      {names.map((singleName) => (
        <Greeting key={singleName} name={singleName} />
      ))}
    </>
  );
}
function Greeting({ name }) {
  const coaches = ["Felix", "Roland", "Klaus"];
  if (coaches.includes(name)) {
    return <h1>Hello, Coach {name}!</h1>;
  }
  return <h1>Hello, {name}!</h1>;
}
