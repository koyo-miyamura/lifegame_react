import React, { FC } from "react";
import { Box, Typography, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const About: FC<{}> = () => {
  const GithubLink = () => (
    <Link href="https://github.com/koyo-miyamura">
      <GitHubIcon />
    </Link>
  );
  const TwitterLink = () => (
    <Link href="https://twitter.com/koyomiyamura">
      <TwitterIcon />
    </Link>
  );
  const JumbotronTitle = () => (
    <Typography component="h1">
      <Link href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0">
        Conway&apos;s Game of Life
      </Link>
    </Typography>
  );

  return (
    <Box className="jumbotron">
      <JumbotronTitle />
      <Typography component="p">by Koyo</Typography>
      <Typography component="p">
        <GithubLink />
        &nbsp;
        <TwitterLink />
      </Typography>
    </Box>
  );
};

export default About;
