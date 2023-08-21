import React, { useState } from "react";
import Projects from "./myProjects/Projects";

export default function index() {
  const [myProject, setMyProject] = useState(true);
  return (
    <div>
      {myProject && (
        <>
          <Projects />
        </>
      )}
    </div>
  );
}
