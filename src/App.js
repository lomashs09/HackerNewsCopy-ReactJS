import React, { Component } from "react";
import "./App.css";
import Header from "./component/layout/Header";
import Question from "./component/Question";
import Comments from "./component/Comment";
import stories from "./hn_data/stories";
import comments from "./hn_data/comments";
var val = true;

class App extends Component {
  state = {
    //All Questions
    question: [...stories.map(story => story)],
    //All Comments
    comments: [...comments.map(comment => comment)]
  };


  decCounter = score => {
    this.setState({
      question: this.state.question.map(question => {
        if (question.score === score) {
          question.score -= 1;
        }
        return question;
      })
    });
  };

  incCounter = score => {
    this.setState({
      question: this.state.question.map(question => {
        if (question.score === score) {
          question.score += 1;
        }
        return question;
      })
    });
  };


  newPage = itemId => {
    this.setState({
      question: [
        ...this.state.question.filter(question => {
          return question.item_id === itemId;
        })
      ],
      comments: [...comments.filter(comment => comment.id === itemId)]
    });
  };

  //Add Comment
  addComment = (title, id) => {
    comments.map(element => {
      if (element.id === id) {
        element.comments.push(title);
      }
      return element;
    });
    this.setState({
      comments: [...comments.filter(comment => comment.id === id)]
    });
  };


  render() {
    if (val === true) {
      return (
        <div className="App">
          <Header />
          <div className="App-header">
            <Question
              question={this.state.question}
              decCounter={this.decCounter}
              incCounter={this.incCounter}
              newPage={this.newPage}
            />
            {(val = !val)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <div className="App-header">
            <Question
              question={this.state.question}
              decCounter={this.decCounter}
              incCounter={this.incCounter}
              newPage={this.newPage}
            />
            <Comments
              comments={this.state.comments}
              changeState={this.changeState}
              addComment={this.addComment}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
