import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useResume } from "../../Context";
import { MdDelete } from "react-icons/md";

const Education = () => {
  const { educationList, setEducationList } = useResume();

  const addMore = () => {
    setEducationList([...educationList, educationList]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = educationList.map((edu, i) =>
      index === i ? Object.assign(edu, { [name]: value }) : edu
    );

    setEducationList(updatedEducation);
  };

  const deleteEducation = (id) => {
    setEducationList(educationList.filter((edu) => edu.id !== id));
  };

  return (
    <>
      <Accordion allowToggle defaultIndex={[0]}>
        {educationList.map((education, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"medium"}>
                    {education.degree ? education.degree : "Degree"}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack spacing={4}>
                <Input
                  onChange={(e) => handleChange(e, index)}
                  name="degree"
                  type="text"
                  variant="filled"
                  placeholder="Degree"
                />
                <Input
                  onChange={(e) => handleChange(e, index)}
                  name="school"
                  type="text"
                  variant="filled"
                  placeholder="College"
                />
              </VStack>

              <HStack spacing={4} mt={4}>
                <FormControl>
                  <FormLabel htmlFor="startyr">Start Year</FormLabel>
                  <Input
                    onChange={(e) => handleChange(e, index)}
                    name="startYr"
                    id="startyr"
                    type="number"
                    variant="filled"
                    min="1900"
                    max="2030"
                    placeholder="Start Year"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="endyr">End Year</FormLabel>
                  <Input
                    onChange={(e) => handleChange(e, index)}
                    name="endYr"
                    id="endyr"
                    type="number"
                    variant="filled"
                    min="1900"
                    max="2030"
                    placeholder="Start Year"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="grade">Grade</FormLabel>
                  <Input
                    onChange={(e) => handleChange(e, index)}
                    name="grade"
                    id="grade"
                    type="text"
                    variant="filled"
                    placeholder="Grade"
                  />
                </FormControl>
              </HStack>
              {educationList[0].id !== education.id && <Button
                rightIcon={<MdDelete />}
                onClick={() => deleteEducation(education.id)}
                mt={3}
                colorScheme={"red"}
              >
                Delete
              </Button>}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      {educationList.length < 2 && (
        <Button colorScheme={"blue"} my={5} onClick={addMore}>
          Add More
        </Button>
      )}
    </>
  );
};

export default Education;
