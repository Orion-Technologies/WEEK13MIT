'use strict';

function ManagedForm() {
  const [name, setName] = React.useState('');
  function updateName(event) {
    console.log(name);
    console.log(event.target.value);
    setName(event.target.value);
    console.log(name);
  }

  function handleSubmit(event) {
    alert('A name was submitted: ' + name);
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button>Submit</button>
      </form>
      <p>My name is {name}</p>
    </>
  );
}

ReactDOM.render(<ManagedForm />, document.getElementById('ManagedForm'));
