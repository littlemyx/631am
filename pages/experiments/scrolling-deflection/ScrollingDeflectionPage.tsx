import React from "react";

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

import { useDeflectorActivator } from "@/components/Deflector/hooks";
import { Deflector } from "@/components/Deflector";

import css from "./ScrollingDeflection.module.css";

export const ScrollingDeflectionPage = () => {
  return (
    <Deflector.Wrapper>
      <Deflector.Background>
        <div className={css.wrapper}>
          <Deflector.Item>
            <Card>
              <div style={{ width: "400px" }}>
                <span>Some text inside the box</span>
              </div>
            </Card>
          </Deflector.Item>

          <br />
          <Deflector.Item>
            <Card>
              <div style={{ width: "400px" }}>
                <span>Some text inside the box</span>
              </div>
            </Card>
          </Deflector.Item>
          <br />
          <Deflector.Item>
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
                Turn {isDeflectorActive ? "on" : "off"}
              </Button>
            )}
          </Deflector.Consumer>
        </div>
      </Deflector.Background>
    </Deflector.Wrapper>
  );
};
