import React, { Component } from "react";

class Question extends Component {
  render() {
    return this.props.question.map(question => (
      <div className="main-class">
        <div className="question-content">
          <a href={question.url}>
            {" "}
            <h2>{question.title}</h2>
          </a>
          <div className="address-submission">
            <address>|{question.by}</address>
            <p>|{question.submission_time}</p>
          <p onClick ={this.props.newPage.bind(this,question.item_id)}>|{question.descendants} comments|</p>
          </div>
        </div>
        <div className="btn-score">
          <button
            onClick={this.props.decCounter.bind(this, question.score)}
            class="btn"
          >
            -
          </button>
          <p>Score: {question.score}</p>
          <button
            onClick={this.props.incCounter.bind(this, question.score)}
            class="btn"
          >
            +
          </button>
        </div>
      </div>
    ));
  }
}

export default Question;
