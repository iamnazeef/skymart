const MenuIcon = ({ handleNavbar }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu-2 text-white min-w-[30px] mr-2 cursor-pointer laptop:hidden"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={handleNavbar}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  );
};

export default MenuIcon;
