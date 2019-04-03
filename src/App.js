import React from 'react';
import Card from './Card'
import jardData from './jardData'
import Card2 from './Card2';
import Card3 from './Crad3';


// const App = () => {
//   const products = jardData.map((data) => {
//     return (
//       <Card key={data.id} stuff={data} />
//     )
//   })


//   return (
//     <div>
//       {products}
//     </div>
//   )
// }


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: jardData,
      count: 0,
      count2: 0,
      type: true,
      api: {},
      formStuff: {
        firstName: "",
        lastName: "",
        isTest: false,
        answer: "",
        favColor: "grey"
      }
    }
    this.countIt = this.countIt.bind(this)
    this.countIt2 = this.countIt2.bind(this)
    this.handelChange = this.handelChange.bind(this)
    this.handelChange = this.handelChange.bind(this)
    this.handelFormChange = this.handelFormChange.bind(this)
  }

  ///////////////////////////////////////
  //          ComponentDidMount
  ///////////////////////////////////////
  componentDidMount() {
    console.log(this.state.formStuff);
    setTimeout(() => {
      this.setState({
        type: false
      })
    }, 1000)
    fetch('https://swapi.co/api/people/2')
      .then(response => response.json())
      .then(data => {
        this.setState({
          api: data
        })
      })
  }

  ///////////////////////////////////////
  //          Card 1 Count It Method
  ///////////////////////////////////////

  countIt() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  ///////////////////////////////////////
  //          Card 2 count 2 It Method
  ///////////////////////////////////////
  countIt2() {
    this.setState(prevState => {
      return {
        count2: prevState.count2 + 1
      }
    })
  }
  ///////////////////////////////////////
  //          Method to return button
  ///////////////////////////////////////
  handelChange(id) {
    this.setState(prevState => {
      const updateTodo = prevState.todo.map(data => {
        if (data.id === id) {
          data.completed = !data.completed
        }
        return data
      })
      return {
        todo: updateTodo
      }
    })
    console.log("test", id)
  }
  ///////////////////////////////////////
  //          Method to handel form o button
  ///////////////////////////////////////

  handelFormChange(e) {
    // or  const {name,value,type,checked} = event.target
    e.target.type === "checkbox" ? this.setState({ formStuff: { ...this.state.formStuff, [e.target.name]: e.target.checked } }) :
      this.setState({ formStuff: { ...this.state.formStuff, [e.target.name]: e.target.value } })
  }

  ///////////////////////////////////////
  //          Render
  ///////////////////////////////////////
  render() {
    ///////////////////////////////////////
    //         First Crad/Component
    ///////////////////////////////////////
    const products = this.state.todo.map((data) =>
      <Card
        key={data.id}
        stuff={data}
        countIt={this.countIt}
        count={this.state.count} />)
    ///////////////////////////////////////
    //         Second Crad/Component
    ///////////////////////////////////////

    const card2 = this.state.todo.map((data) =>

      < Card2
        key={data.id}
        stuff={data}
        countIt2={this.countIt2}
        count={this.state.count2}
        is={this.state.type}
        handelChange={this.handelChange}
        api={this.state.api}
      />)
    ///////////////////////////////////////
    //         Third Crad/Component
    ///////////////////////////////////////
    const card3 =
      < Card3
        formChange={this.handelFormChange}
        test={this.state.formStuff}
      />;



    ///////////////////////////////////////
    //         Returns Crad/Component
    ///////////////////////////////////////
    return (
      <div>
        {products}
        {card2}
        {card3}
      </div>
    )
  }
}




export default App;
