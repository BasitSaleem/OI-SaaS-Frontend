const Copyright = () => {
  const year = new Date().getFullYear();
  
  return (
    
        <p className="text-xs lg:text-base font-normal font-['Onest'] text-[var(--text-dark)]">
      © {year} Owners Inventory LLC. All rights reserved.
      </p>
  );
};

export default Copyright;