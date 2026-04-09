import { useState } from "react";
import { Box, HStack, Image, Stack } from "@chakra-ui/react";
import { useResume } from "../../Context.jsx";

const Template = () => {
  const { setTemplate } = useResume();
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setTemplate(template);
  };

  return (
    <Stack>
      <HStack spacing={4}>
        <Box
          w={"50%"}
          h={"100%"}
          border={selectedTemplate === "template1" ? "2px solid blue" : ""}
          borderRadius="md"
          overflow="hidden"
          _hover={{ cursor: "pointer" }}
          onClick={() => handleSelectTemplate("template1")}
        >
          <Image
            src="/template1.png"
            alt="Template 1"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box
          w={"50%"}
          h={"100%"}
          border={selectedTemplate === "template2" ? "2px solid blue" : ""}
          borderRadius="md"
          overflow="hidden"
          _hover={{ cursor: "pointer" }}
          onClick={() => handleSelectTemplate("template2")}
        >
          <Image
            src="/template2.png"
            alt="Template 2"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      </HStack>
    </Stack>
  );
};

export default Template;
