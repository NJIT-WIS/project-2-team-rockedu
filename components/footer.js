import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const AuthorNames = ["Varshit", "Nandini", "Ramya"]

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#f5f5f5",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              MyWebClass.org
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
            <Typography color="textSecondary" variant="subtitle1">
              {`Made with ❤️ by `}{AuthorNames.map((name, index) => {
                return <span key={index}>{name}{index < AuthorNames.length - 1 ? ", " : ""}</span>
              })}
            </Typography>
            <Typography color="textSecondary" variant="subtitle1" sx={{
              textAlign: "center"
            }}>
              <Link href={"/posts/privacy_policy"}>
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;