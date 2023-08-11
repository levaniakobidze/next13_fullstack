import React from "react";

const AddTopic = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Topic title"
        className="border border-slate-500 py-2"
      />
      <input
        type="text"
        placeholder="Topic description"
        className="border border-slate-500 py-2"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
