import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(),
  },
}));

function DataChat() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form className={classes.root}>
        <h1 className={classes.root}> Espace de communication </h1>
        <TextField label="Identifiant" className={classes.root} />
        <TextField label="Destinataire" className={classes.root} />
        <br />
        <Button variant="contained" className={classes.root}>
          Démarrer
        </Button>
        <br />
        <TextField label="Message" className={classes.root} />
        <br />
        <Button variant="contained" color="primary" className={classes.root}>
          Envoyer
        </Button>
        <Button variant="contained" color="secondary" className={classes.root}>
          Hang Up
        </Button>
      </form>
    </div>
  );
}

export default DataChat;
