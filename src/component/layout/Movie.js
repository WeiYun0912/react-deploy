import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getMoives } from "../../redux/actions/movie";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px 0",
  },
  media: {
    height: "50vh",
  },
});
const Movie = ({ movielist, getMoives }) => {
  const classes = useStyles();

  useEffect(() => {
    getMoives();
  }, []);

  return (
    <>
      {movielist.loading
        ? "Loading..."
        : movielist.movielist.results.map((movie) => (
            <Card key={movie.id} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://image.tmdb.org/t/p/original/" + movie.poster_path
                  }
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolore assumenda quis porro!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  movielist: state.movie,
});

export default connect(mapStateToProps, { getMoives })(Movie);
