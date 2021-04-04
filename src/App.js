import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Menu/>
                <List/>
            </div>
        )
    }
}

class Menu extends Component{
    render() {
        const type = this.props.type;
        const id = this.props.id;
        const title = this.props.title;
        const note = this.props.note;
        return (
            <div>
                {type}
            </div>
        )
    }
}

class List extends Component{
    render(){
        const type = this.props.type;
        const board = this.props.board;
        const title = this.props.title;
        const text = this.props.text;
        const visible = this.props.visible;
        const color = this.props.color;
        return (
        <div>
            Coucou
        </div>
        )
    }
}

const Affiche = [
    {
      type: "board",
      id: "1",
      title: "TIW 8",
      notes: "",
      postits:[
        {
          type: "postit",
          board: "1",
          title: "TP 1",
          text: "Le TP porte sur des rappels de developpement Web",
          visible: false,
          color: "#CCC",
        },
        {
          type: "postit",
          board: "1",
          title: "TP 2",
          text: "Le TP porte sur la creation d'un outil de presentation HTML",
          visible: true,
          color: "#00E",
        },
        {
          type: "postit",
          board: "1",
          title: "TP 3",
          text: "Le TP 3",
          visible: true,
          color: "#00E",
        },
        {
          type: "postit",
          board: "1",
          title: "TP 4",
          text: "Le TP 4",
          visible: true,
          color: "#0E0",
        },
      ]},
    {
      type: "board",
      board: "2",
      title: "Courses",
      notes: "",
      postits: [],
    },
  ]

export default App
