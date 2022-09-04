import React, { useState } from "react";

import "./TweetFormModule.css";
import Button from "../UI/Button";

const TweetForm = (props) => {
  const [enteredTweet, setEnteredTweet] = useState("");

  const addTweetHandler = (event) => {
    event.preventDefault();
    if (enteredTweet.trim().length === 0) {
      return;
    }
    props.onAddTweet(enteredTweet);
    console.log("entered data", enteredTweet);
    setEnteredTweet("");
  };

  const tweetChangeHandler = (event) => {
    setEnteredTweet(event.target.value);
  };

  return (
    // <Card className='input'>
    <div className={`input card `}>
      <form onSubmit={addTweetHandler}>
        <input
          placeholder="Type a Tweet..."
          value={enteredTweet}
          onChange={tweetChangeHandler}
          className="input"
        ></input>
        <Button type="submit" className="button">Add tweet</Button>
      </form>
    </div>
    // </Card>
  );
};

export default TweetForm;
