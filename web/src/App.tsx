//Components
//Properties

interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="title1"/>
      <Button title="title2"/>
      <Button title="title3"/>
      <Button title="title4"/>
    </div>
  )
}

export default App
