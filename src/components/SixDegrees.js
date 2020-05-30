import React from "react";

function Instructions() {
  return (
    <p className="header">
      Enter two actors to find out how many movies separate them!
    </p>
  );
}

class ActorInput extends React.Component {
  state = {
    actor: null,
  };

  render() {
    return (
      <form>
        <input
          type="search"
          id="actorName"
          placeholder="Enter an actor"
          autoComplete="off"
        />
      </form>
    );
  }
}

export default class SixDegrees extends React.Component {
  render() {
    return (
      <>
        <Instructions />
        <div className="actor-input">
          <ActorInput />
          <ActorInput />
        </div>
      </>
    );
  }
}
