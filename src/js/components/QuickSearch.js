import React, { Component } from 'react';

const rootClassName = 'quickSearch';

class QuickSearch extends Component {
  constructor() {
    super()

    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this);
  }

  findAnswer(value) {
    const answers = {
      location: 'San Francisco Bay Area',
      title: 'Front-End Software Engineer',
      origin: 'Honolulu, HI',
      education: 'Carnegie Mellon University',
      major: 'Cognitive Neuroscience',
      interests: ['Coding', 'Baking', 'Gardening', 'Pets'],
      learning: ['iOS', 'Android', 'Farming', 'KonMari', 'South Indian Food'],
      favorite: {
        tools: ['React', 'Lerna', 'Ava', 'Google Cloud'],
        foods: ['Hawaiian', 'Poke', 'Green Tea Ice Cream', 'Grapes'],
        shopping: ['Zara', 'Everlane', 'ASOS', 'Chewy', 'Amazon']
      },
      experience: {
        intuit: {
          years: 2,
          currentTitle: 'Software Engineer 2'
        }
      }
    };

    this.setState({
      input: (answers[value] ? this.answerToString(answers[value]) : 'Not a valid command')
    });
  }

  answerToString(answer) {
    switch(typeof answer) {
      default:
      case 'object':
        return JSON.stringify(answer);
      case 'string':
        return answer;
      case 'number':
        return answer;
    }
  }

  getHelpCommandList(value) {
    const helpCommand = ['help'];
    return helpCommand.indexOf(value) > -1;
  }
  
  showCommandList() {
    this.setState({
      input: 'You may type in one of the following: location, title, origin, education, major, interests, learning, favorite, experience'
    });
  }

  handleChange(event) {
    console.log('event')
  }

  handleEnterKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (this.getHelpCommandList(event.target.value)) {
        this.showCommandList();
        event.target.value = '';
      } else {
        this.findAnswer(event.target.value);
        event.target.value = '';
      }
    }
  }

  render() {
    return (
      <div className={rootClassName}>
        <input className={`${rootClassName}__input`}
               onChange={this.handleChange}
               onKeyPress={this.handleEnterKeyDown}
               placeholder="Type 'help' to get started" />
        <div className={`${rootClassName}__answerContainer`}>
          <p className={`${rootClassName}__answer`}>
            {this.state.input}
          </p>
        </div>
      </div>
    );
  }
}

export default QuickSearch;
