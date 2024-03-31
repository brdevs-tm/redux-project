import React from "react";

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg mb-4">
              Are you sure you want to remove this item?
            </p>
            <div className="flex justify-end">
              <button
                className="mr-4 px-4 py-2 border border-gray-300 rounded-md"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={onConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
