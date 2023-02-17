import React from 'react';

function BasicInfo({ formData, setFormData }) {
  return (
    <div className='basic-info-container'>
      <input type="text" 
      placeholder="Name" 
      value={formData.name}
      onChange={(event) =>
        setFormData({ ...formData, name: event.target.value })
      }/>
      <input type="text" 
      placeholder="Sport" 
      value={formData.sport}
      onChange={(event) =>
        setFormData({ ...formData, sport: event.target.value })
      }/>
      <input type="text" 
      placeholder="Gender"
      value={formData.gender}
      onChange={(event) =>
        setFormData({ ...formData, gender: event.target.value })
      } />
      <label for="dob">Date of Birth:</label>
      <input type="date" 
      id="dob"
      placeholder="Date of Birth" 
      value={formData.dob}
      onChange={(event) =>
        setFormData({ ...formData, dob: event.target.value })
      }/>
    </div>
  );
}

export default BasicInfo;
