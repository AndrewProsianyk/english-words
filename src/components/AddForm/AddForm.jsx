import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addWord} from '../../redux/actions'
import './AddForm.scss'


export default function AddForm() {
  const [engField, setEngField] = useState('')
  const [uaField, setUaField] = useState('')
  const [disableButton, setDisableButton] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    // eslint-disable-next-line no-mixed-operators
    if (engField === '' && uaField === '' || engField === ''||uaField === '') {
      setDisableButton(true)
    } else {
      setDisableButton(false)
    }
  }, [engField,uaField]);


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
    dispatch(addWord(engField, uaField))
    setEngField('');
    setUaField('');
  };
  

  return (
    <form
      onSubmit={onSubmitForm}
    >
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
      <button disabled={disableButton} type="submit" className="form-button">Add</button>
    </form>
  );
};