function Header() {
  return <h1>KL University</h1>;
}

function About() {
  return <p>Welcome to our college website.</p>;
}

function Courses() {
  return <p>Courses: CSE, ECE, EEE, MECH</p>;
}

function App() {
  return (
    <div>
      <Header />
      <About />
      <Courses />
    </div>
  );
}

export default App;