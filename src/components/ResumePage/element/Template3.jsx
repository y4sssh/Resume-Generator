import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Tag,
  TagLabel,
  Wrap,
} from "@chakra-ui/react";
import { useResume } from "../Context";
import { MdMail, MdLocalPhone } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

const Template3 = () => {
  const { theme, about, skills, educationList, workList, projects, printElem } =
    useResume();

  return (
    <>
      <Box
        bg={"white"}
        w={"full"}
        rounded={"md"}
        shadow={"md"}
        overflow={"hidden"}
        minH={"100vh"}
        flexWrap={"wrap"}
      >
        <div ref={printElem}>
          {/* Main Header section - exactly matching the top of the resume image */}
          <VStack m={4} alignItems="flex-start" spacing={1}>
            <Heading as="h1" size="xl" letterSpacing={"tight"}>
              {about.name ? about.name : "Harry Potter"}
            </Heading>

            {/* Contacts row - only the 4 fields shown in the image, with icons for visual style consistency */}
            <HStack spacing={6} flexWrap="wrap" justifyContent="flex-start">
              <HStack spacing={1} alignItems="center">
                <MdMail size="1.4em" />
                <Text m={0} fontSize="sm" wordBreak="break-all">
                  {about.email ? about.email : "HarryPotter@hogwarts.edu"}
                </Text>
              </HStack>
              <HStack spacing={1} alignItems="center">
                <MdLocalPhone size="1.4em" />
                <Text m={0} fontSize="sm">
                  {about.phone ? about.phone : "+910000000000"}
                </Text>
              </HStack>
              <HStack spacing={1} alignItems="center">
                <RiLinkedinBoxFill size="1.4em" />
                <Text
                  m={0}
                  fontSize="sm"
                  as="a"
                  href={about.linkedin}
                  target="_blank"
                >
                  Linkedin
                </Text>
              </HStack>
              <HStack spacing={1} alignItems="center">
                <RiGithubFill size="1.4em" />
                <Text
                  m={0}
                  fontSize="sm"
                  as="a"
                  href={about.github}
                  target="_blank"
                >
                  Github
                </Text>
              </HStack>
            </HStack>
          </VStack>

          {/* Body - single column layout exactly like the resume image */}
          <VStack mx={4} alignItems={"flex-start"} spacing={8} mb={6}>
            {/* EDUCATION section */}
            <VStack alignItems={"flex-start"} w={"full"}>
              <Box borderBottom="3px solid gray" w="100%">
                <Heading
                  as="h4"
                  size="md"
                  color="gray.700"
                  textTransform="uppercase"
                >
                  Education
                </Heading>
              </Box>
              {educationList.map((education, index) => {
                const { degree, school, startYr, endYr, grade } = education;
                return (
                  <VStack
                    key={index}
                    spacing={0}
                    alignItems={"flex-start"}
                    w={"full"}
                    color={"gray.600"}
                  >
                    <Text fontWeight={"bold"} color={theme} mb={1}>
                      {school
                        ? school
                        : "Bachelor of Wizarding Science in Computer Engineering"}
                    </Text>
                    <HStack
                      justifyContent={"space-between"}
                      w={"full"}
                      fontSize={"sm"}
                    >
                      <Text>
                        {degree
                          ? degree
                          : "Hogwarts School of Witchcraft and Wizardry"}{" "}
                        {grade ? `, CGPA: ${grade}` : ", CGPA: 10.00"}
                      </Text>
                      <Text fontStyle={"italic"} fontSize={"xs"}>
                        {startYr ? startYr : 2018} - {endYr ? endYr : 2022}
                      </Text>
                    </HStack>
                  </VStack>
                );
              })}
            </VStack>

            {/* EXPERIENCE section */}
            <VStack alignItems={"flex-start"} w={"full"}>
              <Box borderBottom="3px solid gray" w="100%">
                <Heading
                  as="h4"
                  size="md"
                  color="gray.700"
                  textTransform="uppercase"
                >
                  Experience
                </Heading>
              </Box>
              {workList.map((work, index) => {
                const {
                  position,
                  company,
                  startDate,
                  endDate,
                  description: desc,
                } = work;
                return (
                  <VStack
                    key={index}
                    spacing={0.5}
                    alignItems={"flex-start"}
                    lineHeight={1.3}
                    color={"gray.600"}
                    w={"full"}
                  >
                    <Text fontWeight={"bold"} color={theme} mb={0}>
                      {company ? company : "Nimbus Network Solutions"}
                    </Text>
                    <Text fontSize={"sm"} fontWeight={"bold"} color={theme}>
                      {position ? position : "Full Stack Developer"}
                    </Text>
                    <Text fontSize={"xs"} fontStyle={"italic"}>
                      {startDate ? startDate : "2022-06"} -{" "}
                      {endDate ? endDate : "Present"}
                    </Text>
                    <Text fontSize={"sm"} as="p">
                      {desc
                        ? desc
                        : "Used wand (JavaScript) to vanquish bugs from existing websites and cast spells (implemented enhancements) that significantly improved web functionality and speed."}
                    </Text>
                  </VStack>
                );
              })}
            </VStack>

            {/* PROJECTS section */}
            <VStack alignItems={"flex-start"} w={"full"}>
              <Box borderBottom="3px solid gray" w="100%">
                <Heading
                  as="h4"
                  size="md"
                  color="gray.700"
                  textTransform="uppercase"
                >
                  Projects
                </Heading>
              </Box>
              {projects.map((project, index) => {
                const { name, url, description: desc } = project;
                return (
                  <VStack
                    key={index}
                    spacing={0.5}
                    alignItems={"flex-start"}
                    lineHeight={1.3}
                    color={"gray.600"}
                    w={"full"}
                  >
                    <HStack as="a" href={url} target="_blank" spacing={0.5}>
                      <Text fontWeight={"bold"} color={theme} mb={0}>
                        {name ? name : "Project Name"}
                      </Text>
                      <BiLinkExternal />
                    </HStack>
                    <Text fontSize={"sm"} as="p">
                      {desc
                        ? desc
                        : "Lorem ipsum dolor sit amet consectetur adipisicing."}
                    </Text>
                  </VStack>
                );
              })}
            </VStack>

            {/* TECHNICAL SKILLS section - exactly matching the categorized format in the image */}
            <VStack alignItems={"flex-start"} w={"full"}>
              <Box borderBottom="3px solid gray" w="100%">
                <Heading
                  as="h4"
                  size="md"
                  color="gray.700"
                  textTransform="uppercase"
                >
                  Technical Skills
                </Heading>
              </Box>
              <VStack
                alignItems="flex-start"
                spacing={1}
                color={"gray.600"}
                w="full"
              >
                <Wrap>
                  {skills.map((skill, index) => (
                    <Tag
                      size={"md"}
                      borderRadius="md"
                      variant="solid"
                      bg={theme.replace("400", "500")}
                      key={index}
                    >
                      <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                  ))}
                </Wrap>
              </VStack>
            </VStack>
          </VStack>
        </div>
      </Box>
    </>
  );
};

export default Template3;
