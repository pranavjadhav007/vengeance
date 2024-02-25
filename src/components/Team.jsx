import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team box with-border-image" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="headingo"><b>OUR TEAM</b></h1>
          <p>(<i>Drop us a mail on below protonmail only if have some query.</i>)
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <h4>{element.skills}</h4>
                <p><a href="mailto:vengeancehckservice@proton.me?subject=Query for Vengeance Service">{element.designation}</a></p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
