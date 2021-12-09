function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
   
  }
  return <div className="todo" onClick={handle}>{todo.text} <h1 className="bi bi-trash"></h1></div>
}
