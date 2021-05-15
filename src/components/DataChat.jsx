import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import Peer from 'peerjs';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(),
  },
}));

let peer = null;

const debut = (monid, sonid) => {
  console.log('En attente ...');
  peer = new Peer(monid, {
    host: 'localhost',
    port: 3000,
    path: '/mypeer',
  });

  peer.connect(sonid);

  peer.on('connection', (conn) => {
    console.log('Connection établie');
    conn.on('Message', (msg) => {
      console.log('message', msg);
    });
  });
};

const envoie = (msg) => {
  peer.on('connection', (conn) => {
    conn.send(msg);
  });
  console.log(msg);
};

function DataChat() {
  const classes = useStyles();

  const [startAvailable, setStart] = useState(true);
  const [sendAvailable, setSend] = useState(false);
  const [hangupAvailable, setHangup] = useState(false);

  const [monid, setmonid] = useState(null);
  const [sonid, setsonid] = useState(null);
  const [msg, setmsg] = useState(null);

  const start = () => {
    setStart(false);
    setSend(true);
    setHangup(true);
    debut(monid, sonid);
  };

  const hangup = () => {
    setStart(true);
    setSend(false);
    setHangup(false);
  };

  const send = () => {
    envoie(msg);
  };

  return (
    <div className={classes.root}>

      <h1 className={classes.root}> Chat PeerJS by Papa Ndiaga SARR</h1>
      <TextField
        label="Identifiant"
        className={classes.root}
        onChange={(e) => setmonid(e.target.value)}
        disabled={!startAvailable}
      />
      <br />
      <TextField
        label="Destinataire"
        className={classes.root}
        onChange={(e) => setsonid(e.target.value)}
        disabled={!startAvailable}
      />
      <br />
      <Button
        onClick={start}
        variant="contained"
        className={classes.root}
        disabled={!startAvailable}
      >
        Démarrer
      </Button>
      <br />
      <TextField
        label="Message"
        className={classes.root}
        onChange={(e) => setmsg(e.target.value)}
        disabled={!sendAvailable}
      />
      <br />
      <Button
        onClick={send}
        variant="contained"
        color="primary"
        className={classes.root}
        disabled={!sendAvailable}
      >
        Envoyer
      </Button>
      <br />
      <h2 className={classes.root}> Details des messages</h2>
      <div className={classes.root} />
      <br />
      <Button
        onClick={hangup}
        variant="contained"
        color="secondary"
        className={classes.root}
        disabled={!hangupAvailable}
      >
        Hang Up
      </Button>
    </div>
  );
}

export default DataChat;
