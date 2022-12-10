import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/team.css';

const TeamCard = (props) => {
  const {
    name, bio, backBio, image, github, twitter, linkedin,
  } = props;

  return (
    <div className="image-flip">
      <div className="mainflip flip-0">
        <div className="frontside">
          <div className="card">
            <div className="card-body text-center">
              <p><img className="img-fluid w-50" src={image} alt={name} /></p>
              <h4 className="card-title">{name}</h4>
              <p className="card-text">
                {bio}
              </p>
              <button type="submit" className="btn btn-success btn-sm">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="backside">
          <div className="card">
            <div className="card-body text-center mt-4">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">{backBio}</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="social-icon text-xs-center" href={github} rel="noreferrer">
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-icon text-xs-center" href={twitter} rel="noreferrer">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-icon text-xs-center" href={linkedin} rel="noreferrer">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  backBio: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};
