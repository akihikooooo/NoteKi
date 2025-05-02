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
        (SidebarItems.map((item, index) => {
          return (
            <div
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
      <div
        id="sidebar-container"
        className="flex flex-col bg-sub text-black py-3 px-3 w-1/5 overflow-y-auto m-2 rounded-sm"
      >
        {renderItem()}
      </div>
    </>
  );
}
