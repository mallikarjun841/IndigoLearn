import {useState} from 'react'
import './index.css'

const Form = () => {
  const [Name, setName] = useState({
    phno: '',
    email: '',
    qualification: '',
    interest: '',
  })

  const [error, setError] = useState({phnoerror: '', emailerror: ''})

  const formsubmit = event => {
    event.preventDefault()
    const {phno, email} = Name
    console.log(Name)
    if (phno === '') {
      setError(existingValues => ({
        ...existingValues,
        phnoerror: 'Enter phone nubmer*',
      }))
    }
    if (email === '') {
      setError(existingValues => ({
        ...existingValues,
        emailerror: 'Enter valid email*',
      }))
    }
    setName({phno: '', email: '', qualification: '', interest: ''})
  }

  const phonenumber = event => {
    setName(existingValues => ({
      ...existingValues,

      phno: event.target.value,
    }))
  }

  const emailchange = event => {
    setName(existingValues => ({
      ...existingValues,

      email: event.target.value,
    }))
  }

  const qualificationchange = event => {
    setName(existingValues => ({
      ...existingValues,

      qualification: event.target.value,
    }))
  }

  const interestchange = event => {
    setName(existingValues => ({
      ...existingValues,

      interest: event.target.value,
    }))
  }
  console.log(error.emailerror, error.phnoerror)
  return (
    <div className="formcontainer">
      <p className="cardtag">Aspiring to be an ACCA? Get in touch with us!</p>
      <form className="form" onSubmit={formsubmit}>
        <input
          value={Name.phno}
          onChange={phonenumber}
          className="input"
          type="tel"
          placeholder="Phone Number*"
        />
        {error.phnoerror !== '' ? (
          <p className="error">{error.phnoerror}</p>
        ) : (
          ''
        )}
        <input
          value={Name.email}
          onChange={emailchange}
          className="input"
          typte="text"
          placeholder="Email ID"
        />
        {error.emailerror !== '' ? (
          <p className="error">{error.emailerror}</p>
        ) : (
          ''
        )}
        <select
          value={Name.qualification}
          onChange={qualificationchange}
          className="input"
        >
          <option value="" disabled selected>
            Current Qualification
          </option>
          <option value="CA">CA</option>
          <option value="Bcom">Bcom</option>
          <option value="CMA">CMA</option>
          <option value="CS">CS</option>
          <option value="Other">Other</option>
        </select>
        <select
          value={Name.interest}
          onChange={interestchange}
          className="input"
        >
          <option value="" disabled selected>
            Interest In
          </option>
          <option value="ACCA Level I" className="option">
            ACCA Level I
          </option>
          <option value="ACCA Level II">ACCA Level II</option>
          <option value="ACCA Level III">ACCA Level III</option>
        </select>
        <button className="requestbutton" type="submit">
          Request call back
        </button>
      </form>
    </div>
  )
}

export default Form
