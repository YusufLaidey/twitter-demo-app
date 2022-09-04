import React from "react";

import "./TweetListModule.css";
import Card from "../UI/Card";

const Like = "Like";
const Dislike = "Disliked";
const Liked = "Liked";

const likeButtonColorMap = {
  Liked: "liked",
  Disliked: "disliked",
  Like: "normal",
};

const TweetList = (props) => {
  // const [like, setLike] = useState('');

  const deleteHandler = (tweetId) => {
    return props.onDeleteItem(tweetId);
    //console.log({props})
  };

  const updateHandler = (tweetId, likeState) => {
    return props.onUpdate(tweetId, likeState);
  };

  // const likeHandler = () => {
  //     if (like === 'Like'){
  //         setLike('Liked');
  //     }if(like === 'Liked'){
  //         setLike('DisLike');
  //     }if(like === 'DisLike'){
  //         setLike('Like');
  //     }
  // };

  return (
    <Card className="tweets">
      <ul>
        {props.tweets.map((tweet) => (
          <li key={tweet.id}>
            {tweet.text}
            <br />
            <button
              className={`
              ${
                tweet.state === "liked"
                  ? "liked"
                  : tweet.state === "disliked"
                  ? "disliked"
                  : "normal"
              }
              `}
              onClick={() => updateHandler(tweet.id, getNextState(tweet.state))}
            >
              {tweet.state}
            </button>
            <button
              className={`active button`}
              onClick={() => deleteHandler(tweet.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TweetList;

const getNextState = (currentState) => {
  if (currentState === "Like") {
    return Liked;
  }
  if (currentState === "Liked") {
    return Dislike;
  }
  return Like;
};
