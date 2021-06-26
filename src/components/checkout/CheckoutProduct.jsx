import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "../../store/StateProvider";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      minWidth: 200,
      width: 200,
      height: 160,
      objectFit: "contain",
      padding: "10px 0",
    },
    rating: {
      display: "flex",
    },
    removeButton: {
      backgroundColor: "#f0c14b",
      border: "1px solid",
      borderColor: "#a88734 #9c7e31 #846a29",
    },
  })
);

export default function CheckoutProduct({ product }) {
  const { id, image, title, price, rating } = product;
  const classes = useStyles();
  const [_, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: { id },
    });
  };

  return (
    <Card className={classes.root}>
      <img src={image} className={classes.cover} alt="" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <small>₹</small>
            <strong>{price}</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.rating}
            color="textSecondary"
          >
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </Typography>

          <button className={classes.removeButton} onClick={removeFromBasket}>
            Remove from basket
          </button>
        </CardContent>
      </div>
    </Card>
  );
}
