import React from 'react';

function AboutInfo({ formData, setFormData }) {
  return (
    <div className='about-info-container'>
      <input type="text" 
      placeholder="Description"
      value={formData.description}
      onChange={(event) =>
        setFormData({ ...formData, description: event.target.value })
      } />
      <input type="text" 
      placeholder="Interests"
      value={formData.interests}
      onChange={(event) =>
        setFormData({ ...formData, interests: event.target.value })
      }  /> 
      <input type="text" 
      placeholder="Location"
      value={formData.location}
      onChange={(event) =>
        setFormData({ ...formData, location: event.target.value })
      }  />
      <input type="text" 
      placeholder="Team" 
      value={formData.team}
      onChange={(event) =>
        setFormData({ ...formData, team: event.target.value })
      } />
    </div>
  );
}

export default AboutInfo;
