import './App.css';
import Day1 from './Day1/Day1';
import Day2 from './Day2/Day2';
import Day3 from './Day3/Day3';

function App() {
  return (
    <div className="App" onKeyDown={(e) => document.getElementById("jeff").play()}>
      <header>
        <p> Howdy there! </p>
        <p> Welcome to my Advent of Code Page! </p>
        <p> Day 1 is online and below! </p>
        <p> I'm gonna pretty this up later. Make it look like an advent calendar and somesuch... </p>
        <p> Source code is at <a href="https://github.com/jacksonzck/jazck_advent_of_code_2023">https://github.com/jacksonzck/jazck_advent_of_code_2023</a>.</p>
        <p> Come back soon!~~</p>
      </header>
      <Day1/>
      <Day2/>
      <Day3/>
    </div>
  );
}

export default App;
