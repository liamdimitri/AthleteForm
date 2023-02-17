import React from 'react';

function Summary({ formData }) {
  return (
    <div className='summary-container'>
      <div>
      {formData.name}
      </div>
      <div>
      {formData.sport}
      </div>
      <div>
      {formData.gender}
      </div>
      <div>
      {formData.dob}
      </div>
      <div>
      {formData.description}  
      </div>
      <div>
      {formData.interests}
      </div>
      <div>
      {formData.location}
      </div>
      <div>
      {formData.team}
      </div>
    </div>
  );
}

export default Summary;
