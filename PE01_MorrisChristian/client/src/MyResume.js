import './MyResume.css';

function MyResume() {
  return (
    <div className="Resume">
      <header className="header">
        <h1>Christian Morris</h1>
        <p>801 PINE ST, Seattle USA, 98101</p>
      </header>
      <section className='section'>
        <h2>Education</h2>
        <div className='education'>
          <h3>Bachelor of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle USA</p>
        </div>
      </section>
      <section className='section'>
        <h2>Skills</h2>
        <div>
          <p>Programming Languages: C#, Python, JavaScript</p>
          <p>Frameworks and libraries: Reat, Node.js, Express.js</p>
          <p>Database systems: MSSQL, MongoDB</p>
          <p>Operation systems: Windows</p>
          <p>Version control: Git</p>
        </div>
      </section>
      <section className='section'>
        <h2>Work Experience</h2>
        <div>
          <h3>Software developer/IT specialist</h3>
          <p>OCULUS INC., Seattle USA | April, 2024 - Present</p>
          <p>Lead in the development in the OCULUS SETUP application</p>
          <p>Provided IT support both on-site and through remote connection</p>
        </div>
      </section>
      <section className='section'>
        <h2>Projects</h2>
        <div className='projects'>
          <h3>Personal Website</h3>
          <p>
            Built a personal website using HTML CSS and JavaScript and deployed it on GitHub
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/ChrisMorr154/Personal-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ChrisMorr154/Personal-Website
            </a>
          </p>

          <h3>Online Shoe store</h3>
          <p>
            Developed a web application for an online shoe store using Mern stack (Mongo, Express, React, Node)
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/ChrisMorr154/NorthSide-E-commerce-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ChrisMorr154/NorthSide-E-commerce-website
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default MyResume;