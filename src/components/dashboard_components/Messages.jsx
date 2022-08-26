import React from "react";

const Messages = () => {
  return (
    <div class="grid grid-cols-2 gap-4">
      <div className="">
        <a
          href="#"
          class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-6 my-4"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Notification 1
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Hello from CWC. Your District comes under flood zonation areas. Be
            Careful. Please do care to get real time crowd updates from
            flocast.vercel.app/inundations Also contribute to CWC giving your
            real time flood situations by visiting flocast.vercel.app/imgUpload
            <br />
            <p>Sent by: Ministry of Disaster Management</p>
            <p>Time: 17:00 PM IST</p>
          </p>
        </a>
      </div>
      <div className="">
        <a
          href="#"
          class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-6 my-4"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Notification 2
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Hello from CWC. Your District comes under flood zonation areas. Be
            Careful. Please do care to get real time crowd updates from
            flocast.vercel.app/inundations Also contribute to CWC giving your
            real time flood situations by visiting flocast.vercel.app/imgUpload
            <br />
            <p>Sent by: Ministry of Disaster Management</p>
            <p>Time: 17:00 PM IST</p>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Messages;
