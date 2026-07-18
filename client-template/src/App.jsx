import { useEffect } from "react";
import { staggerReveal, clearScrollTriggers } from "../foundry/src/motion/scrollReveal";
import { Grid, GridItem } from "../foundry/src/primitives/Grid";
import "../foundry/src/tokens/tokens.css";
import "./index.css";

/*
  Starting point only. Read DESIGN.md, then let the frontend-design skill
  replace this with something that actually commits to that client's
  aesthetic direction — this file should not survive first contact with a
  real build session.
*/
export default function App() {
  useEffect(() => {
    staggerReveal(".reveal");
    return () => clearScrollTriggers();
  }, []);

  return (
    <main className="bg-bg text-text-primary font-body min-h-screen">
      <Grid columns={12} className="px-6 py-24">
        <GridItem span={12} className="reveal">
          <h1 className="font-display text-5xl">
            Read DESIGN.md before touching this.
          </h1>
        </GridItem>
      </Grid>
    </main>
  );
}
