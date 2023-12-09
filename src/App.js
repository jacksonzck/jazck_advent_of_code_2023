import './App.css';
import Day1 from './Day1/Day1';
import Day2 from './Day2/Day2';
import Day3 from './Day3/Day3';
import Day4 from './Day4/Day4';
import Day5 from './Day5/Day5.js'
import Day6 from './Day6/Day6'
import Day7 from './Day7/Day7'
import neco from './neco_arc.png'
import love_live from './idkineverwatchedit.gif'
import knives from './knives.webp'
import Day9 from './Day9/Day9';

function App() {
  return (
    <div className="App" onKeyDown={(e) => document.getElementById("jeff").play()}>
      <header>
        <div className="row-flexer">
          <img src={neco} alt="Neco Arc"></img>
          <img src={love_live} alt="I never watched that show..."></img>
          <img src={knives} alt="I never watched that show..."></img>
          <img src={neco} alt="Neco Arc"></img>
          <img src={love_live} alt="I never watched that show..."></img>
          <img src={knives} alt="I never watched that show..."></img>
          <img src={neco} alt="Neco Arc"></img>
          <img src={love_live} alt="I never watched that show..."></img>
          <img src={knives} alt="I never watched that show..."></img>
          <div>
            <p> Howdy there, welcome to my advent of code page!!! </p>
            <p> All of the stars I've done so far are below! </p>
            <p> Source code is at <a href="https://github.com/jacksonzck/jazck_advent_of_code_2023">https://github.com/jacksonzck/jazck_advent_of_code_2023</a>.</p>
            <p> Come back soon!~~</p>
          </div>
          <img src={neco} alt="Neco Arc"></img>
          <img src={love_live} alt="I never watched that show..."></img>
          <img src={knives} alt="I never watched that show..."></img>
          <img src={neco} alt="Neco Arc"></img>
          <img src={love_live} alt="I never watched that show..."></img>
          <img src={knives} alt="I never watched that show..."></img>
          <img src={neco} alt="Neco Arc"></img>
          <img src={love_live} alt="I never watched that show..."></img>
          <img src={knives} alt="I never watched that show..."></img>
        </div>
      </header>
      <div className="row-flexer">
        <Day1 />
        <Day7 />
        <Day2 />
      </div>
      <div className="row-flexer">
      <Day3 />
      <Day4 />
      <Day9 />
      </div>
      <Day5 />
      <Day6 />
    </div>
  );
}

export default App;
