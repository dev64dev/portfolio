import { useState, useEffect } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  document.addEventListener("onclick", handleToggle);
};

export default useToggle;
