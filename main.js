class App extends React.Component{
  constructor(props) {
    super(props)
    let ppl = [
        {hugged: false, name: "Zachary", isSelected:false}
      , {hugged: false, name: "Jacob",   isSelected:false}
      , {hugged: false, name: "Vienna",  isSelected:false}
      , {hugged: false, name: "Jupiter", isSelected:false}
    ]
    this.state={ppl:ppl}
  }

  onCheck (name) {
    const newPpl = this.state.ppl.map(
      (e) => {
        if (e.name === name)
          e.isSelected=!e.isSelected
        return e
      }
    );
    console.log('newPpl', newPpl);
    this.setState({ppl: newPpl})
  }

  addNewHandler() {
    console.log('value', this._addNew.value);
  }

  componentDidMount() {
    this._addNew;
  }

  render() {
    return (
      <div>
        <input type="text" ref={(c) => {this._addNew= c}  }/>
        <button onClick={() => this.addNewHandler()}> Add New </button>
        <ul>
          {this.state.ppl.map(
            (e, index) => {  return <Person key={index} {...e}
              onCheck={(name) => this.onCheck(name)}/> }) }
          </ul>
          <input type="button" value="HUG!"
            onClick={ () => {
              console.log("HUGZZZZ")

              const newPpl = this.state.ppl.map(
                (e) => {
                  if (e.isSelected) {
                    e.hugged = true;
                    e.isSelected = false;
                  }
                  return e
                }
              );
              this.setState({ppl: newPpl})
            }
           } />
        </div>
    )
  }
}


class Person extends React.Component{
  constructor (props ) {
    super(props )
    // this.state = {isSelected: false}
  }

  render () {
    return (
      <li onClick={ () => { this.props.onCheck (this.props.name)}  }
      style={ {cursor:"pointer", backgroundColor: this.props.isSelected ? "lightblue" : ""} }>
        <input type="checkbox" checked={this.props.isSelected} />
        {this.props.name}
        &nbsp;
        {this.props.hugged ? 'HUGGED!!!' : ''}
      </li>)
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
