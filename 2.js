function logRandom(){
    console.log(Math.random());
  }
  
  function Button(props) {
  // Ta nên cần tách riêng các function ra không nên viết vào trong các sự kiện để cho clean code.
  // const handleClick = ()=>setCounter(counter+1);
      return (
      <button onClick = {
        props.onClickFunction
      }>+1</button>
    );
  }
  
  // Display
  function Display(props){
    return (
    <div>{props.message}</div>
    );
  }
  
  // Nếu ta viết như cách bên dưới sẽ báo lỗi, react không thể combine được.
      // <Button /><Display/>, 
    
  // Thay vào đó ta có thể làm như sau:
      // [<Button/>, <Display/>],
    
  // Một cách khác là ta có thể bỏ nó vào trong một element khác như sau:
      //   <div>
      //     <Button />
      //     <Display />
      //   </div>
    
  // Nếu ta không muốn dùng div ta có thể dùng <React.Fragment> thì sẽ không có New Dom Parent được tạo ra.
      //   <React.Fragment>
      //     <Button />
      //     <Display />
      //   </React.Fragment>
  // Ta còn có có thể sử dụng <></> thì nó sẽ tự động tạo ra <React.FFragment>
      // <>
      //   <Button/>
      //   <Display/>
      // </>,
  // Ngoài ra ta còn có thể làm như sau:
  // Viết một function chứa các component của ta vào đó
  // Sau đó gọi nó trong React.render là xong
    function App(){
      const [counter, setCounter] = useState(5);
      const incrementCounter = ()=>setCounter(counter+1);
      return (
        <div>
          <Button onClickFunction ={incrementCounter}/>
          <Display message={counter}/>
        </div>
      );
    }
  
    ReactDOM.render(
      <App/>,
      document.getElementById('mountNode'),
    );
    
    
    
    
    
    
    
    
    