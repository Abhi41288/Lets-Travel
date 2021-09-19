import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

function PlaceDetails({ place, selected, refProp }) {
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo ? place.photo.images.large.url : "no photo available"
        }
        title={place.name}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating size="small" value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">price</Typography>
          <Typography variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award, i) => (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            key={i}
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" className={classes.chip} label={name} />
        ))}

        {place?.address && (
          <Typography
            variant="subtitle2"
            gutterBottom
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography
            variant="subtitle2"
            gutterBottom
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails;
