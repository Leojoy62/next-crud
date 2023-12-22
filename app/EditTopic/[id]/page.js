"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditTopic = ({ params }) => {
  const [newtitle, setNewTitle] = useState("");
  const [newdescription, setNewDescription] = useState("");
  const { id } = params;
  console.log(newtitle, newdescription);

  const router = useRouter();

  const getTopicById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        cache: "no-cache",
      });
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      if (data.success) {
        setNewTitle(data.result.title);
        setNewDescription(data.result.description);
      }
      console.log(data.result.title);
      return { topic: data };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopicById(id);
  }, [id]);

  const handleUpdateTopic = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newtitle, newdescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleUpdateTopic}>
        <input
          value={newtitle}
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="input input-bordered input-success w-full"
        />
        <br />
        <br />
        <input
          value={newdescription}
          onChange={(e) => setNewDescription(e.target.value)}
          type="text"
          placeholder="Description"
          className="input input-bordered input-success w-full"
        />
        <button type="submit" className="btn bg-green-600 mt-4 text-white">
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopic;
