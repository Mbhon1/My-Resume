import './App.css';
import ContactInfo from './ContactInfo';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Footer from './Footer';
// ?import KeySummary from './KeySummary';

function App() {
  return (
    <main>
      <div className="row">
        <div className="left column">
          <ContactInfo 
            name="Mbhoni Baloyi"
            title="Jnr Network Admin"
            location="Soweto, RSA"
            email="Mbhonibaloyi@gmail.com"
            phone="(+27) 66-447-3351"
            image={require("../images/me.jpeg")}
          />
        </div>
        <div className="right column">
          {/* ? <KeySummary 
            title="Key Summary"
            description="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
          /> */}
          <WorkExperience 
            title="Work Experience"
            jobTitle1="Jnr Network Admin "
            company1="Z-Tech Group"
            duration1="June 2022 - Septemper 2022"
            description1="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
            jobTitle2="Help Desk Support"
            company2="Rosebank College"
            duration2="January 2017 - February 2018"
            description2="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
          />
          <div className="pad-top">
            <Education 
              title="Education"
              school="Rosebank College"
              date="2016 - 2022"
              certificate="Diploma"
              course="IT Network Management"
              hsTitle="Phefeni Senior Secondary"
              hsDate="2013 - 2015"
              hsCertificate="Bachelors"
            />
          </div>
        </div>
      </div>
      <Footer 
          twitter="https://www.twitter.com/print_whoami/"
          instagram="https://www.instagram.com/return.whoami/"
          github="https://github.com/mbhon1/"
        />
    </main>
  );
}

export default App;
