import React, { useState } from "react";

const AddHouse = () => {
  const [desc, setDesc] = useState("");
  const [postUrl, setPostUrl] = useState(null);

  const sendPostData = async (e) => {
    e.preventDefault();
    console.log("first");
    const data = new FormData();

    data.append("image", postUrl);

    data.append("content", desc);

    const fetchReq = await fetch("api/house/create-house", {
      method: "POST",
      headers: {},
      body: data,
    });

    if (fetchReq.status === 200) {
      const fetchReqJson = await fetchReq.json();
    } else {
      console.log(fetchReq);
    }
  };
  return (
    <div>
      <form onSubmit={sendPostData}>
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input type="file" onChange={(e) => setPostUrl(e.target.files[0])} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddHouse;
