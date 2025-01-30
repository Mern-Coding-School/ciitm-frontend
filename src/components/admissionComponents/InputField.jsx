import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdmission  , Admission , setOneAdmission} from '../../store/AdmissionSlice';


const InputField = ({
  placeholder,
  type,
  required,
}) => {


let admission = useSelector(state => state.admission.admission);

let find_index = admission.findIndex((item) => item.name === placeholder.replace(/\s+/g, '').toLowerCase());




let array = [];

  let dispatch = useDispatch();

  const [value, setValue] =
    useState('');
  const [isError, setIsError] =
    useState(false);

  const nameAndId = placeholder
    .replace(/\s+/g, '')
    .toLowerCase();

 



  const handleChange = e => {
    setValue(e.target.value);

  };

  const handleBlur = e => {
 
    let data = {
      name: nameAndId,
      value: e.target.value,
    };

  
    if(find_index === -1){
      
      array.push(data);

      array.forEach(element => {
        dispatch(setAdmission(data));
      })

     


      
    }else{

      array[find_index] = data;
      dispatch(setOneAdmission(data));
    

   
    }


    if (!value.trim()) {
      setIsError(true);
    }
  };

  // console.log(Array);

  return (
    <div className='max-[600px]:max-w-[248px] w-full relative'>
      <input
        id={nameAndId}
        name={nameAndId}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`border rounded-[8px] min-[800px]:max-w-[248px] max-w-[100%] w-full px-4 py-3 text-xs text-[#333333] placeholder:text-[#333333] ${
          isError
            ? 'border-[#FF0000]'
            : 'border-[#A0A0A080]'
        }`}
      />

      {isError && (
        <p className='text-[#FF0000] absolute -bottom-5 text-xs mt-1'>{`${placeholder} is required.`}</p>
      )}
    </div>
  );
};

export default InputField;
