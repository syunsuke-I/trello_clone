import React from "react"

export const Header = () =>{
  return(
    <>
      <div className="relative">
        <header className="text-center py-4 shadow-md">
            <div className="header-holder bg-blue-500 bg-opacity-50">
              <h1 className="header text-white text-3xl font-semibold">TODO</h1>
            </div>
        </header>
      </div>
    </>
  )
}

export default Header;
