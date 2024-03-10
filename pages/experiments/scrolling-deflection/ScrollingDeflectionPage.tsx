import dynamic, { LoaderComponent } from "next/dynamic";

import React, { useEffect, useCallback, useRef, useState } from "react";

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

import { useDeflectorActivator } from "@/components/Deflector/hooks";
import { Deflector } from "@/components/Deflector";

import { RangeDeflectionControl } from "./RangeDeflectionControl";

import css from "./ScrollingDeflection.module.css";

const ScrollingDeflectionPage = () => {
  const [isDeflectorActive, setIsDeflectorActive] = useState(false);
  const [deflectionX, setDeflectionX] = useState(0);
  const [deflectionY, setDeflectionY] = useState(0);
  const initialOffset = useRef(0);

  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;

    setDeflectionX(clientX - window.innerWidth / 2);
    setDeflectionY(clientY - window.innerHeight / 2);
  }, []);

  useEffect(() => {
    if (isDeflectorActive) {
      // window.addEventListener("mousemove", mouseMoveHandler);
    } else {
      setDeflectionX(0);
      setDeflectionY(0);
    }

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [isDeflectorActive, mouseMoveHandler]);

  return (
    <>
      <Deflector.Wrapper xProp={deflectionX} yProp={deflectionY}>
        <Deflector.Background
          perspectiveClassName={css.perspectveWrapper}
          backgroundClassName={css.backgroundWrapper}
        >
          <div className={css.wrapper}>
            <Deflector.Item>
              <Card>
                <div style={{ width: "100px" }}>
                  <span>Some text inside the box</span>
                </div>
              </Card>

              <br />
              <br />

              <div
                style={{
                  display: "flex",
                  width: "800px",
                  justifyContent: "space-around"
                }}
              >
                <Card>
                  <div style={{ width: "100px" }}>
                    <span>Some text inside the box</span>
                  </div>
                </Card>
                <Card>
                  <div style={{ width: "200px" }}>
                    <span>Some text inside the box</span>
                  </div>
                </Card>
                <Card>
                  <div style={{ width: "100px" }}>
                    <span>Some text inside the box</span>
                  </div>
                </Card>
              </div>

              <br />
              <br />
              <Card>
                <div style={{ width: "400px" }}>
                  <span>Some text inside the box</span>
                </div>
              </Card>
              <br />
              <Button>Test button</Button>
              <br />
              <br />
              <br />
              <br />
              <br />
            </Deflector.Item>
          </div>
          <Deflector.Consumer>
            {({ toggleDeflector, isDeflectorActive: isActive }) => (
              <Button
                onClick={() => {
                  toggleDeflector();
                  setIsDeflectorActive(!isActive);
                }}
              >
                Turn {isDeflectorActive ? "off" : "on"}
              </Button>
            )}
          </Deflector.Consumer>
        </Deflector.Background>
      </Deflector.Wrapper>
      <RangeDeflectionControl
        setDeflectionX={setDeflectionX}
        setDeflectionY={setDeflectionY}
      />
    </>
  );
};

export default ScrollingDeflectionPage;
