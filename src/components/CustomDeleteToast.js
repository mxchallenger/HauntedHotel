import React from 'react';

function ConfirmDeleteToast({ onConfirm, onCancel }) {
  return (
    <div>
      <p>Are you sure you want to delete this item?</p>
      <button type="button" onClick={onConfirm} style={{ marginRight: '10px' }}>
        Yes
      </button>
      <button type="button" onClick={onCancel}>
        No
      </button>
    </div>
  );
}

export default ConfirmDeleteToast;
