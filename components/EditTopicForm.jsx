// "use client";

// import React, { useState } from "react";

// const EditTopicForm = ({ title, description }) => {
//   const [newtitle, setNewTitle] = useState(title);
//   const [newdescription, setNewDescription] = useState(description);

//   return (
//     <div>
//       <form>
//         <input
//           value={newtitle}
//           onChange={(e) => setNewTitle(e.target.value)}
//           type="text"
//           placeholder="Title"
//           className="input input-bordered input-success w-full"
//         />
//         <br />
//         <br />
//         <input
//           value={newdescription}
//           onChange={(e) => setNewDescription(e.target.value)}
//           type="text"
//           placeholder="Description"
//           className="input input-bordered input-success w-full"
//         />
//         <button type="submit" className="btn bg-green-600 mt-4 text-white">
//           Update Topic
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditTopicForm;
