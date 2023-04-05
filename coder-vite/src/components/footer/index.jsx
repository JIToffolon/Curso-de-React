
import { Box, Container, Grid, Typography } from "@mui/material";
import "./footer.css";

function Footer() {
  return (
    <div className="foot">
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#ffd600",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Proyecto Final
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | ProyectoFinal | Cooderhouse`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
};

export default Footer;