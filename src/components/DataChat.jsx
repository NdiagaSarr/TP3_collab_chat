import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Peer } from 'peer';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

let peer = null;
let connexion = null;

const initpeer = (localID) => {
  console.log('start');

  peer = new Peer(localID, {
    host: 'localhost',
    port: 3000,
    path: '/myapp',
  });

  peer.on('open', (id) => {
    console.log('Mon identifiant est: ', id);
  });
};

const initconn = function initconn(id) {
  connexion = peer.connect(id);
};

function DataChat() {
  const [startAvailable, setStart] = useState(true);
  const [sendAvailable, setSend] = useState(false);
  const [hangupAvailable, setHangup] = useState(false);
  const [callAvailable, setCall] = useState(false);

  const classes = useStyles();

  const onStart = function Start(id) {
    setCall(true);
    setStart(false);
    initpeer(id);
  };

  const onCall = function Call(id) {
    setSend(true);
    setHangup(true);
    setCall(false);
    initconn(id);
  };

  const onSend = function Send(message) {
    connexion.send(message);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">

        <TextField id="standard-basic" label="Identifiant" />
        <TextField id="standard-basic" label="Destinataire" />
        <Button onClick={onStart} disabled={!startAvailable}>
          Démarrer
        </Button>

        <TextField id="standard-basic" label="Message" />
        <Button onClick={onSend} disabled={!callAvailable}>
          Envoyer
        </Button>

        <div />

        <Button onClick={onCall} disabled={!hangupAvailable}>
          Hang Up
        </Button>
      </form>
    </div>
  );
}

export default DataChat;
