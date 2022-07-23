import React,{useState,useEffect,useRef} from 'react'

function Form(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef =useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })
    
    const handleChange = e => {
    setInput(e.target.value);
    };

    const handleSubmit = e => {
    e.preventDefault();

        props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
    });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
        {props.edit ? (
          <>
            <input
              placeholder='Update your task'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='input edit'
            />
            <button onClick={handleSubmit} className='button edit'>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Enter the task'
              value={input}
              onChange={handleChange}
              name='text'
              className='input'
              ref={inputRef}
            />
            <button onClick={handleSubmit} className='button'>
              Add
            </button>
          </>
        )}
      </form>
    );
}

export default Form