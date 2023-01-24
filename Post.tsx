import * as React from 'react';
import './style.css';

import Comment from './Comment';
import Author from './Author';

export default function Post(params) {
  const [body, setBody] = React.useState(params.post.body);
  return (
    <div>
      <h1>{params.post.title}</h1>
      {params.post.allAuthors.map((allAuthors) => (
        <Author name={allAuthors} />
      ))}
      <p>{body}</p>
      <h3>Comments:</h3>
      {params.post.comments.map((comment) => (
        <Comment body={comment} />
      ))}
      <input
        type="text"
        placeholder="Update post body here"
        onChange={(textboxInput) => setBody(textboxInput.target.value)}
      ></input>
    </div>
  );
}
