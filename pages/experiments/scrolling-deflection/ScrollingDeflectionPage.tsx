import React from "react";

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

import { useDeflectorActivator } from "@/components/Deflector/hooks";
import { Deflector } from "@/components/Deflector";

import css from "./ScrollingDeflection.module.css";

export const ScrollingDeflectionPage = () => {
  return (
    <Deflector.Wrapper>
      <Deflector.Background
        perspectiveClassName={css.perspectveWrapper}
        backgroundClassName={css.backgroundWrapper}
      >
        <div className={css.wrapper}>
          <Deflector.Item>
            <Card>
              <div style={{ width: "400px" }}>
                <span>Some text inside the box</span>
              </div>
            </Card>

            <br />
            <br />

            <Card>
              <div style={{ width: "400px" }}>
                <span>Some text inside the box</span>
              </div>
            </Card>

            <br />
            <br />

            <Card>
              <div style={{ width: "400px" }}>
                <span>Some text inside the box</span>
              </div>
            </Card>
          </Deflector.Item>
          <br />
          <Deflector.Item>
            <Button>Test button</Button>
          </Deflector.Item>
          <br />
          <br />
          <br />
          <br />
          <br />

          <Deflector.Consumer>
            {({ toggleDeflector, isDeflectorActive }) => (
              <Button onClick={toggleDeflector}>
                Turn {isDeflectorActive ? "off" : "on"}
              </Button>
            )}
          </Deflector.Consumer>
        </div>
      </Deflector.Background>
    </Deflector.Wrapper>
  );
};
