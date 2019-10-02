import React, { Component } from "react";
import "./App.css";
import Header from "./component/layout/Header";
import Question from "./component/Question";
import Comments from "./component/Comment";
import stories from "./hn_data/stories";
import comments from "./hn_data/comments";
var val = true;
var newStory = stories.sort((a,b)=>{
  return b.score-a.score
})
class App extends Component {
  state = {
    //All Questions
    question: [...newStory.map(story => story)],
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


  displayComments = itemId => {
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
//back to Question Page
  qstnPage = (e) =>{
    val =true;
    this.setState({question: [...newStory.map(story => story)]})
  }


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
              displayComments={this.displayComments}
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
              displayComments={this.displayComments}
            />
            <Comments
              comments={this.state.comments}
              qstnPage={this.qstnPage}
              addComment={this.addComment}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
