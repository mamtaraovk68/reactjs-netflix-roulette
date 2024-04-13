import React, { useState } from "react";
import CounterApp from "./counter";
import Dialog from "../Dialog/Dialog";
import './counter.css';

export const CounterDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <button className="counter-app-button" onClick={openDialog}>
        Counter App
      </button>
      {isDialogOpen && (
        <Dialog title="COUNTER APP" onClose={closeDialog}>
          <CounterApp initialValue={10} />
        </Dialog>
      )}
    </div>
  );
};
