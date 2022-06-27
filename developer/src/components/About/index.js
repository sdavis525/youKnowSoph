import React from 'react';
import coverImage from '../../assets/cover/Animation.PNG';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Graphic Designer | Freelance Marketer | Masters of Science in Marketing and Communications | Bachelors in Child and Family Development | Class A CDL Holder | Current Student at The Ohio State University | Emerging Software Developer.
        </p>
      </div>
    </section>
  );
}

export default About;
