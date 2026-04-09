import { HStack, useRadioGroup } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { ChromePicker } from "react-color";
import { useResume } from "../../Context";
import ThemeOption from "./ThemeOption";

const ThemeSelect = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customColor, setCustomColor] = useState("#FFFFFF");
  const { theme, setTheme } = useResume();
  const ref = useRef();
  const options = [
    "blue",
    "#BD238D",
    "#6D2194",
    "#0B877C",
    "red.700",
    "orange.800",
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    value: theme,
    onChange: setTheme,
  });

  const group = getRootProps();

  const handleCustomColorChange = (color) => {
    setCustomColor(color.hex);
    setTheme(color.hex);
  };

  const handleShowColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showColorPicker && ref.current && !ref.current.contains(e.target)) {
        setShowColorPicker(!showColorPicker);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showColorPicker]);

  return (
    <HStack
      {...group}
      css={{
        "@media screen and (max-width: 768px)": {
          flexWrap: "wrap",
          justifyContent: "center",
        },
      }}
    >
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <ThemeOption key={value} {...radio}>
            {value}
          </ThemeOption>
        );
      })}
      <div
        onClick={handleShowColorPicker}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundImage:
            "url('https://e7.pngegg.com/pngimages/383/76/png-clipart-multicolored-circle-illustration-color-wheel-complementary-colors-color-scheme-color-miscellaneous-photography.png')",
          backgroundColor: customColor,
          border: "1px solid #CCC",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      ></div>
      {showColorPicker && (
        <div
          style={{
            position: "absolute",
            zIndex: "2",
            top: "10%",
            left: "32%",
            margin: 0,
            width: "fit-content",
            height: "fit-content",
          }}
          ref={ref}
        >
          <ChromePicker
            color={customColor}
            onChange={handleCustomColorChange}
          />
        </div>
      )}
    </HStack>
  );
};

export default ThemeSelect;
