import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function DataChat() {
  const [startAvailable, setStart] = useState(true);
  const [sendAvailable, setSend] = useState(false);
  const [hangupAvailable, setHangup] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">

        <TextField id="standard-basic" label="Identifiant" />
        <TextField id="standard-basic" label="Destinataire" />
        <Button onClick={start} disabled={!startAvailable}>
          Démarrer
        </Button>

        <TextField id="standard-basic" label="Message" />
        <Button onClick={send} disabled={!callAvailable}>
          Envoyer
        </Button>

        <div />

        <Button onClick={hangUp} disabled={!hangupAvailable}>
          Hang Up
        </Button>
      </form>
    </div>
  );
}

export default DataChat;
