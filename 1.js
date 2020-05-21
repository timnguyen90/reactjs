function logRandom(){
    console.log(Math.random());
  }
  
  // Function useState  sẽ trả về 2 loại đối tượng 
  // - State object (getter)
  // - Updater function(setter)
  
  // Bởi vì object trả về của function useState có 2 đối tượng do vậy ta cần một array hứng giá trị đó
  // và array đó gọi là Array Destructuring.
  function Button() {
    const [counter, setCounter] = useState(5);
      return <button onClick = {
        ()=>setCounter(counter*2)
      }>{counter}</button>;
  }
  
  ReactDOM.render(
    <Button />, 
    document.getElementById('mountNode'),
  );