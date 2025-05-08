import Scrollbar from "react-scrollbars-custom";

function renderItem(props) {
  return (
    <div id="sidebar-items" className="flex flex-col gap-1">
      {SidebarItems.length == 0 ? (
        <p
          className="text-center text-red-600 font-montserrat 
                font-extrabold uppercase"
        >
          No notes found.
        </p>
      ) : SidebarItems.length < 5 ? (
        SidebarItems.map((item, index) => {
          return (
            <div
              id={item.name.toLowerCase()}
              key={index}
              className="flex items-center gap-2 p-2 hover:bg-sub rounded-md cursor-pointer 
              hover:shadow-lg hover:bg-gray-200 transition duration-200 ease-in-out"
            >
              <p>{item.icon}</p>
              <p className="font-montserrat">{item.name}</p>
            </div>
          );
        })
      ) : 
        (SidebarItems.slice(0,6).map((item, index) => {
          return (
            <div
              id={item.name.toLowerCase()}
              key={index}
              className="flex items-center gap-2 p-2 hover:bg-sub rounded-md cursor-pointer 
              hover:shadow-lg hover:bg-gray-200 transition duration-200 ease-in-out"
            >
              {index < 5 ? (
                <>
                <p className="text-gray-400">{item.icon}</p>
                <p className="font-montserrat">{item.name}</p>
                </>
              ) : (
                <>
                <p className="text-black">•••</p>
                <p className="font-montserrat">See more</p>
                </>
              )}
            </div>
            );
        }))}
        
    </div>
  );
}

const SidebarItems = [
  {
      name: "All Notes",
      icon: "😀",
  },
  {
      name: "Favorites",
      icon: "⭐",
  },
  {
      name: "Trash",
      icon: "🗑️",
  },
  {
      name: "Settings",
      icon: "⚙️",
  },
  {
      name: "Help",
      icon: "❓",
  },
  {
      name: "About",
      icon: "ℹ️",
  },
  {
      name: "Logout",
      icon: "🚪",
  },
];

export default function Sidebar(props) {
  return (
    <>
      <div id="container" className="flex flex-col justify-between bg-sub w-1/5 rounded-sm mr-2">
        <div
          id="pages-container"
          className="flex flex-col text-black pt-1 overflow-y-auto m-2 rounded-sm"
        >
          <Scrollbar style={{height:400} } noScrollX={true}>
            {renderItem()}
          </Scrollbar>
        </div>
        <div id="profile-container">
          <div className="flex flex-col gap-2 bg-gray-400 text-black rounded-sm m-2">
            <div className="flex items-center gap-2 p-2 hover:bg-sub rounded-md cursor-pointer 
              hover:shadow-lg hover:bg-gray-200 transition duration-200 ease-in-out">
              <p className="text-gray-400">👤</p>
              <p className="font-montserrat">Profile</p>
              </div>
              </div>
            </div>
      </div>
      
    </>
  );
}
