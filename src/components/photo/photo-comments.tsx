"use client";

import React from "react";
import PhotoCommentsForm from "./photo-comments-form";
import { useUser } from "@/context/user-context";
import { Comment } from "@/actions/photo-get";

export default function PhotoComments(props: {
  single: boolean;
  id: number;
  comments: Comment[];
}) {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);
  const { user } = useUser();

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`overflow-y-auto break-normal px-8 ${
          props.single ? "p-0" : ""
        }`}
      >
        {comments.map((comment) => (
          <li className="mb-2 leading-5" key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
}
