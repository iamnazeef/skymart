const CloseIcon = ({ handleClose }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-x text-gray-600 cursor-pointer hover:bg-gray-200 rounded-full p-1"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={handleClose}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export default CloseIcon;
