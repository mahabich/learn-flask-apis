'use strict';

const e = React.createElement;

var todos = null;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (todos !== null) {
      return JSON.stringify(todos);
    }

    return e(
      'button',
      { onClick: () =>
        {
          this.setState({ liked: true })
          axios.get('http://localhost:5000/todo/api/v1.0/tasks')
            .then(response => todos = response.data.tasks)
        }
      },
      'Show To Do Items'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);