import {useState} from 'react';
import './AddForm.scss'

export default function AddForm() {
    const [engField, setEngField]= useState('')
    const [uaField, setUaField] = useState('')
    
 const inputChange = e => {
    switch (e.currentTarget.name) {
      case 'eng':
        setEngField(e.currentTarget.value);
        break;
      case 'ua':
        setUaField(e.currentTarget.value);
        break;
      default:
        return
    }
    };
    
    const onSubmitForm = e => {
    e.preventDefault();
    
      setEngField('');
      setUaField('');
    }
  

    return (
        <form onSubmit={onSubmitForm}>
            <div className="form-box">
                <label className="form-label" htmlFor=""><span className="label-span">English</span>
                    <input
                        type="text" 
                        name="eng" 
                        className="form-input"
                        value={engField}
                        onChange={inputChange}
                        />
                </label>
                <label className="form-label" htmlFor=""><span className="label-span">Ukrainian</span>
                    <input
                        type="text" 
                        name="ua" 
                        className="form-input"
                        value={uaField}
                        onChange={inputChange}
                        />
                </label>
            </div>
            <button type="submit" className="form-button">Add</button>
        </form>
    )
}