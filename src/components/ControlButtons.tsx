import React, { FC } from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";

type ControlButtonsProps = {
  onClickFavorite?: () => void;
  onClickShare?: () => void;
};

const ControlButtons: FC<ControlButtonsProps> = ({
  onClickFavorite = () => undefined,
  onClickShare = () => undefined,
}) => (
  <Grid container alignItems="center" justify="center">
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button onClick={onClickFavorite}>
        <FavoriteIcon />
        <Typography variant="button" style={{ textTransform: "none" }}>
          Favorite
        </Typography>
      </Button>
      <Button onClick={onClickShare}>
        <ShareIcon />
        <Typography variant="button" style={{ textTransform: "none" }}>
          Share
        </Typography>
      </Button>
    </ButtonGroup>
  </Grid>
);

export default ControlButtons;
