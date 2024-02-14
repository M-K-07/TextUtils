import React,{useState} from 'react';

export default function Text(props) {
    const [texts, setText] = useState("");
    
    const Change=(event)=>{
        setText(event.target.value);
    }
    const upperevent = () => {
        let newText = texts.toUpperCase();
        setText(newText);
    }
    
    const lowerevent = () => {
        let newText = texts.toLowerCase();
        setText(newText);
    }
    const clearevent = () => {
        let newText = '';
        setText(newText);
        
    }
    const capitalize=()=>{
        let lower=texts.toLowerCase()
       setText(lower.charAt(0).toUpperCase()+ lower.slice(1))
    }
    return (
        <>
       
        <div className='container' style={{color: props.mode=== 'light'?'black':'white'}}>
            <h2 > {props.textheading}</h2>
            <div className="form-group">
            <textarea className="form-control my-4" id="text" value={texts} placeholder='Enter Text' onChange={Change} rows="8" style={{backgroundColor:props.mode==='dark'?'#212537':'white',color: props.mode=== 'light'?'black':'white'}}></textarea>
            </div>
            <button disabled={texts.length===0} className={`btn btn-${props.btnCol} mx-1 mb-4`} onClick={upperevent} > Convert into Uppercase</button>
            <button disabled={texts.length===0} className={`btn btn-${props.btnCol} mx-1 mb-4`} onClick={lowerevent} > Convert into LowerCase</button>
            <button disabled={texts.length===0} className={`btn btn-${props.btnCol} mx-1 mb-4`} onClick={clearevent} > Clear Text </button>
            <button disabled={texts.length===0} className={`btn btn-${props.btnCol} mx-1 mb-4`} onClick={capitalize} > Capitalize </button>
        </div>
        <div className="container my-4" style={{color: props.mode=== 'light'?'black':'white'}}>
            <h2 className='mb-3'> Text Summary</h2>
            <p>{texts.split(/\s+/).length-1} Words and {texts.length} Letters</p>
            <p>{texts.split(/\s+/).length-1} Number of spaces</p>
            <p>{0.008*60*(texts.split(/\s+/).length-1)} Seconds to read</p>
            <h2 className='preview'>Preview</h2>
            <p>{texts.length>0?texts:"Enter text in the above box to preview"}</p>
        </div>
        </>
            )
}
        
