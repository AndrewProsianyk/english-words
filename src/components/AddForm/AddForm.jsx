import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {addWord} from '../../redux/actions'
import './AddForm.scss'


function AddForm({ onAddWord }) {
  const [engField, setEngField] = useState('')
  const [uaField, setUaField] = useState('')
  const [disableButton, setDisableButton] = useState(false)

  useEffect(() => {
    if (engField === '' && uaField === '' || engField === ''||uaField === '') {
      setDisableButton(true)
    } else {
      setDisableButton(false)
    }
  }, [engField,uaField]);

  // const [wordList, setWordList] = useState(
  //   () => JSON.parse(window.localStorage.getItem('wordList')));

  // useEffect(() => {
  //   window.localStorage.setItem('wordList',JSON.stringify(wordList))
  // }, [wordList])

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
            <button disabled={disableButton} onClick={()=>onAddWord(engField, uaField)} type="submit" className="form-button">Add</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
  onAddWord: (engField, uaField) => dispatch(addWord(engField, uaField))
})

export default connect(null ,mapDispatchToProps)(AddForm)
