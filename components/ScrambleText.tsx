"use client";

import { useEffect, useState } from "react";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

export function useScramble(text: string, trigger: boolean | number, speed: number = 0.5) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (trigger === false) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < Math.floor(iteration) || char === " " || char === ".") {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += speed; // Adjust speed of decoding here
    }, 30);

    return () => clearInterval(interval);
  }, [text, trigger]);

  return displayText;
}

export default function ScrambleText({ text, isHovered, speed = 0.5 }: { text: string; isHovered: boolean, speed?: number }) {
  const displayText = useScramble(text, isHovered, speed);
  return <span>{displayText}</span>;
}
