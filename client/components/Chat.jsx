import React from "react";

const Chat = () => {
  return (
    <>
      <div>
        <div>
          <h1>Chat Setting</h1>
        </div>
        <div>
          <h1>Enable Chat</h1>
        </div>
        <div>
          <h1>Deplay Chat</h1>
        </div>
        <div>
          <h1>Must be following in chat</h1>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
            />
            <div
              className="w-14 h-8 bg-gray-300 peer-focus:outline-none 
                        peer-focus:ring-4 peer-focus:ring-blue-300 
                        rounded-full peer dark:bg-gray-600 
                        peer-checked:after:translate-x-6 
                        peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-1 
                        after:left-1 after:bg-white after:border-gray-300 
                        after:border after:rounded-full after:h-6 
                        after:w-6 after:transition-all 
                        peer-checked:bg-blue-600"
            ></div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              {enabled ? "ON" : "OFF"}
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Chat;
