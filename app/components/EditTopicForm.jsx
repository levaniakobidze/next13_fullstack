import React from "react";

const EditTopicForm = () => {
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
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
