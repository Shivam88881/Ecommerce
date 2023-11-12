import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";


const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/sshivam88881";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dre2ungrh/image/upload/v1699733108/ykqniktze6mqhsvforas.jpg"
              alt="Founder"
            />
            <Typography>Shivam Saurabh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            This is a sample website created by @Shivam_Saurabh, solely for the purpose of gaining hands-on experience with the MERN stack.
              </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social Media Accounts</Typography>
            <a
              href="https://www.linkedin.com/in/shivam-saurabh-36760b1aa"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://instagram.com/sshivam88881" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
