const Header=(props)=>{
  console.log(props)
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Content=(props)=>{
  console.log(props)
  return(
    <div>
      <p>the number of {props.name} is {props.number}</p>
    </div>
  )
}

const Total=(props)=>{
  console.log(props)
 return (
  <div>
    <p>total number: {props.total}</p>
  </div>
 )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course}/>
      <Content name={part1} number={exercises1}/>
      <Content name={part2} number={exercises2}/>
      <Content name={part3} number={exercises3}/>
      <Total total={exercises1+exercises2+exercises3}/>



    </div>
  )
}

export default App
   
