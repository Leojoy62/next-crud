"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-cache",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const data = await res.json();
        setTopics(data.topics);
      } catch (error) {
        console.log("Error loading topics: ", error);
      }
    };

    fetchTopics();
  }, []);

  const deleteTopic = async (e, _id) => {
    e.preventDefault();
    const confirmed = confirm("Are you sure to delete?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics/${_id}`, {
        method: "DELETE",
      }).then(() => {
        let newTopics = topics.filter((topic) => topic._id !== _id);
        setTopics(newTopics);
      });
    }
  };

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={(e) => deleteTopic(e, t._id)}
              className="text-red-600"
            >
              <HiOutlineTrash size={30} />
            </button>
            <Link href={`/EditTopic/${t._id}`}>
              <HiPencilAlt size={30} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
