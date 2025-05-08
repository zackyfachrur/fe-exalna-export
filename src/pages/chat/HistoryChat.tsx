const HistoryChat = () => { 
    return (
        <nav className="bg-white w-[280px] flex flex-col justify-between z-50 mx-6 my-6 rounded-2xl drop-shadow-xl">
          <>
            <ul className="py-12 flex flex-col">
           
            </ul>
            <ul className="px-8 py-6 flex gap-4 flex-col">
              <li>
                <button className="bg-gray-600 text-white font-bold px-4 py-2 w-full rounded-2xl cursor-pointer flex gap-2 justify-center items-center hover:bg-gray-700">
                  <i className="ri-add-line text-xl"></i>
                  <span>New Chat</span>
                </button>
              </li>
              {/* <SidebarList
                              logo={<i className="ri-settings-3-line text-xl"></i>}
                              text="Settings"
                              className="text-gray-600 cursor-pointer hover:text-gray-900 flex gap-2 text-lg font-medium"
                          />
                          <SidebarList
                              logo={<i className="ri-logout-box-line text-xl"></i>}
                              text="Log Out"
                              className="text-gray-600 cursor-pointer hover:text-gray-900 flex gap-2 text-lg font-medium"
                          /> */}
            </ul>
          </>
      </nav>
    )
}

export default HistoryChat;