import React, { useState } from 'react';
import AboutInfo from './AboutInfo';
import BasicInfo from './BasicInfo';
import Summary from './Summary';

function Form() {
  const [page, setPage] = useState(0);

  const FormTitles = ["Basic Info", "About Info", "Summary"];
  const [formData, setFormData] = useState({
    name: "",
    sport: "",
    gender: "",
    dob: "",
    description: "",
    interests: "",
    location: "",
    team: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />
    } else if (page === 1) {
      return <AboutInfo formData={formData} setFormData={setFormData}  />
    } else {
      return <Summary formData={formData} setFormData={setFormData}  />
    }
  };

  return (
    <div className='form'>
      <div className='progressbar'>
        <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}>

        </div>
      </div>
      <div className='form-container'>
        <div className='header'>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'>{PageDisplay()}</div>
        <div className='footer'>
          <button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1)}}
          >Previous</button>
          <button
          onClick={() => {
            if (page === FormTitles.length - 1) {
              alert("FORM SUBMITTED");
              console.log(formData);
              setFormData('');
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
