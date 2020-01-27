import React from 'react';
import './App.css';
import Footer from './Footer';

function App() {
  const studentName = 'Sally Student';
  return (
    <div className="App">
    <header>
  <h1>{studentName} Resume</h1>
    </header>
        <section>
        <header>
          <h2>Education</h2>
        </header>
        <p><strong>B.A. Fine Arts / Humanities</strong><br />
        San Diego State University<br />
        San Diego, CA / 2015
        </p>
      </section>

    <section>
      <header>
        <h2>Experience</h2>
      </header>
      <p><strong>Artist (Freelance)</strong><br />
      <i>Self-employed, New York, NY / March 2018-Present</i>
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
      </ul>

      <p><strong>Collections Cataloguer</strong><br />
      <i>Mexic-Arte Museum, Austin, TX / June 2015-March 2018</i>
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
      </ul>
    </section>


    <section>
      <header>
        <h2>Exhibitions</h2>
      </header>
      <ul>
        <li>Two-Person Exhibition: Moore Contemporary<br />
        (with Industrial artist Charlie Martin)<br />
        New York, NY / August 2019</li>
        <li>Solo Exhibition: Azeroth Contemporary<br />
        Lahdeda Gallery<br />
        Austin, TX / June 2017</li>
        <li>Solo Exhibition: Thesis Exhibition<br />
        Juan Diego Fine Art Gallery<br />
        San Diego, CA / May 2015</li>
      </ul>
    </section>

    <Footer />

  </div>
  );
}

export default App;
