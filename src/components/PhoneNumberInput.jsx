import React, { useState } from 'react'
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const PhoneNumberInput = () => {
    const [value, setValue] = useState();
    const handleOnChange = () => {
        setValue(value)
    }
  return (
    <div>
        <ReactPhoneInput
          inputStyle={{}}
          inputExtraProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
          country={"in"}
          value={value}
          placeholder="Enter your phone"
          onChange={handleOnChange}
          isValid={(value, country) => {
            if (value.match(/12345/)) {
              return 'Invalid value: '+value+', '+country.name;
            } else if (value.match(/1234/)) {
              return false;
            } else {
              return true;
            }
          }}
        /> 
    </div>
  )
}

export default PhoneNumberInput