import React from 'react';
import { useSelector } from 'react-redux';
import TeamCard from './TeamCard';
import '../../assets/styles/team.css';
import Navbar from '../navbar/Navbar';

const Teams = () => {
  const { teams } = useSelector((state) => state.teams);
  return (
    <>
      <Navbar />
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">OUR TEAM 👨🏻‍💻 👩🏻‍💻 👨🏻‍💻</h5>
          <div className="row">
            {teams.map((team) => (
              <div key={team.id} className="col-xs-12 col-sm-6 col-md-4">
                <TeamCard
                  key={team.id}
                  id={team.id}
                  name={team.name}
                  bio={team.bio}
                  backbio={team.backbio}
                  image={team.image}
                  github={team.github}
                  twitter={team.twitter}
                  linkedin={team.linkedin}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
