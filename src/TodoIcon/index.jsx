import React from "react";
import './TodoIcon.css';
import CheckSVG from '../Icons/check.svg?component';
import DeleteSVG from '../Icons/delete.svg?component';
import PlusSVG from '../Icons/plus.svg?component';
import CloseSVG from '../Icons/close.svg?component';
import TasksSVG from '../Icons/tasks.svg?component';

function TodoIcon({type, color, onClick}) {
  const iconTypes = {
    "check": color => (
      <CheckSVG
        className="Icon-svg Icon-svg--check"
        fill={color}
      />
    ),
    "delete": color => (
      <DeleteSVG
        className="Icon-svg Icon-svg--delete"
        fill={color}
      />
    ),
    "plus": color => (
      <PlusSVG
        className="Icon-svg Icon-svg--plus"
        fill={color}
      />
    ),
    "close": color => (
      <CloseSVG
        className="Icon-svg Icon-svg--close"
        fill={color}
      />
    ),
    "tasks": color => (
      <TasksSVG
        className="Icon-svg Icon-svg--tasks"
        fill={color}
      />
    ),
  };

  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };