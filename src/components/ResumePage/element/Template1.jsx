import {
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Text,
  VStack,
  Wrap,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useResume } from "../Context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill, RiGithubFill, RiWindowFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import myIamge from "./Ceo.jpeg";

const Template1 = () => {
  const { theme, about, educationList, skills, workList, projects, printElem } =
    useResume();
  const imgStyle = {
    width: "115px",
    height: "115px",
    margin: "15px",
    borderRadius: "50%",
  };
  return (
    <>
      <Box
        bg={"white"}
        w={"full"}
        rounded={"md"}
        shadow={"md"}
        overflow={"hidden"}
        minH={"100vh"}
      >
        <div ref={printElem}>
          {/* Main Header section which contain image & some personal information */}
          <HStack justifyContent="space-between">
            <VStack m={4} alignItems="flex-start" spacing={0.5}>
              <Heading as="h4" size="md">
                {about.name ? about.name : "Harry Potter"}
              </Heading>
              <Text color={theme} fontWeight={"bold"}>
                {about.role ? about.role : "Full Stack Web Developer"}
              </Text>
              <HStack spacing={4} flexWrap="wrap" justifyContent="space-between" >
                <HStack spacing={1}>
                  <MdMail size='2em'/>{" "}
                  <Text m={0} wordBreak="break-all">
                    {about.email ? about.email : "HarryPotter@hogwarts.edu"}
                  </Text>
                </HStack>
                <HStack className="infoHolders" spacing={1} flexWrap="wrap" alignItems="center">
                  <MdLocalPhone size='2em'/>{" "}
                  <Text m={0}>{about.phone ? about.phone : "+910000000000"}</Text>
                </HStack>
                <HStack className="infoHolders" spacing={1}>
                  <MdLocationPin size='2em'/>{" "}
                  <Text m={0}>{about.address ? about.address : "Pune, MH"}</Text>
                </HStack>
                <HStack className="infoHolders" spacing={1}>
                  <RiWindowFill size='2em'/>{" "}
                  <Text m={0} as="a" href={about.website}>
                    Portfolio
                  </Text>
                </HStack>
                <HStack className="infoHolders" spacing={1}>
                  <RiGithubFill size='2em'/>{" "}
                  <Text m={0} as="a" href={about.github}>
                    Github
                  </Text>
                </HStack>
                <HStack className="infoHolders" spacing={1}>
                  <RiLinkedinBoxFill size='2em'/>{" "}
                  <Text m={0} as="a" href={about.linkedin}>
                    LinkedIn
                  </Text>
                </HStack>
              </HStack>
            </VStack>
            {about.addResumeImage && <>
            {about.picture ? (
              <img className="avatarImage" style={imgStyle} src={about.picture} alt="avatar" />
            ) : (
              <img className="avatarImage" style={imgStyle} src={myIamge} alt="avatar" />
            )}
            </>}
          </HStack>

          <HStack
            w={"full"}
            h={"full"}
            my={2}
            mb={6}
            px={2}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            spacing={1}
          >
            <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>
              {/* Summary */}
              <VStack alignItems={"flex-start"}>
                <Box borderBottom="3px solid gray" w="100%">
                  <Heading as="h4" size="md" color="gray.700">
                    Summary
                  </Heading>
                </Box>

                <Text color={"gray.600"}>
                  {about.aboutMe
                    ? about.aboutMe
                    : "I am a skilled wizard, trained in the art of magical application development. Using the latest incantations and spells, I create enchanting web applications that are both visually stunning and functionally powerful. My focus on precision and quality magic ensures that every product I create is worthy of the highest praise from even the most critical of magical authorities."}
                </Text>
              </VStack>
              {/* EDUCATION */}
              <VStack alignItems={"flex-start"}>
                <Box borderBottom="3px solid gray" w="100%">
                  <Heading as="h4" size="md" color="gray.700">
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
                      <Text fontWeight={"bold"} color={theme} mb={0}>
                        {degree
                          ? degree
                          : "Bachelor of Wizarding Science in Computer Engineering"}
                      </Text>
                      <Text fontSize={"sm"}>
                        {school
                          ? school
                          : "Hogwarts School of Witchcraft and Wizardry"}
                      </Text>
                      <HStack
                        fontSize={"xs"}
                        fontStyle={"italic"}
                        justifyContent={"space-between"}
                        w={"full"}
                      >
                        <Text>
                          {startYr ? startYr : 2018} - {endYr ? endYr : 2022}
                        </Text>
                        <Text>{grade ? grade : "10 CGPA"}</Text>
                      </HStack>
                    </VStack>
                  );
                })}
              </VStack>
              {/* EDUCATION WORK EXPERIENCE */}
              <VStack alignItems={"flex-start"}>
                <Box borderBottom="3px solid gray" w="100%">
                  <Heading as="h4" size="md" color="gray.700">
                    Work Experience
                  </Heading>
                </Box>

                {workList.map((work, index) => {
                  const {
                    position,
                    type,
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
                    >
                      <Text fontWeight={"bold"} color={theme} mb={0}>
                        {position ? position : "Full Stack Developer"}
                      </Text>
                      <Text fontSize={"sm"} fontWeight={"bold"} color={theme}>
                        {company ? company : "Nimbus Network Solutions"} -{" "}
                        {type ? type : "Full-time"}
                      </Text>
                      <Text fontSize={"xs"} fontStyle={"italic"}>
                        {startDate ? startDate : "2022-06"} -{" "}
                        {endDate ? endDate : "2023-02"}
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
              {/* WORK EXPERIENCE */}
            </VStack>

            <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>
              {/* Objectives */}
              <VStack alignItems={"flex-start"}>
                <Box borderBottom="3px solid gray" w="100%">
                  <Heading as="h4" size="md" color="gray.700">
                    Objectives
                  </Heading>
                </Box>
                <Text color={"gray.600"}>
                  {about.objectives
                    ? about.objectives
                    : "To leverage my skills in magical application development to create visually stunning and functionally powerful web applications that meet the highest standards of quality and exceed the expectations of even the most critical magical authorities."}
                </Text>
              </VStack>
              {/* SKILLS */}
              <VStack alignItems={"flex-start"}>
                <Box borderBottom="3px solid gray" w="100%">
                  <Heading as="h4" size="md" color="gray.700">
                    Skills
                  </Heading>
                </Box>
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
              {/* SKILLS PROJECTS */}
              <VStack alignItems={"flex-start"}>
                <Box borderBottom="3px solid gray" w="100%">
                  <Heading as="h4" size="md" color="gray.700">
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
                    >
                      <HStack as="a" href={url} target="_blank" spacing={0.5}>
                        <Text fontWeight={"medium"} flex={"row"}>
                          {name ? name : "Project Name"}{" "}
                        </Text>{" "}
                        <BiLinkExternal />
                      </HStack>
                      <UnorderedList pl={5}>
                        <ListItem>
                          <Text fontSize={"sm"} as="p">
                            {desc
                              ? desc
                              : "Lorem ipsum dolor sit amet consectetur adipisicing."}
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </VStack>
                  );
                })}
              </VStack>
            </VStack>
          </HStack>
        </div>
      </Box>
    </>
  );
};

export default Template1;
