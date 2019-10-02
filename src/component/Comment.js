import React, { Component } from "react";
class Comments extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addComment(this.state.title,this.props.comments[0].id)
        this.setState({title:''})
    }
    onChange = (e) =>{
        this.setState({title: e.target.value})
    }
    render(){
        return(

        <div>
            <form onSubmit = {this.onSubmit}>
            <textarea type = "textarea" rows="10" columns ="50" value = {this.state.title} onChange = {this.onChange} placeholder="add comment..."></textarea><br/>
            <input type="submit"  value="submit"/>
            </form>
            {this.props.comments[0].comments.map(comment=>(  
            <div className = "main-class">
                <h2 class ="comments">{comment}</h2>

            </div>
        ))}
         <button onClick={this.props.qstnPage}>Go back</button>
        </div>
        )
    }
}

export default Comments;