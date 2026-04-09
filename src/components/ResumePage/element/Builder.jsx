import {
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import About from "./BuildSteps/About";
import Education from "./BuildSteps/Education";
import Projects from "./BuildSteps/Projects";
import Skills from "./BuildSteps/Skills";
import Work from "./BuildSteps/Work";
import Template from "./BuildSteps/Template";

const Builder = () => {
  return (
    <Box
      bg={"white"}
      w={"full"}
      maxW={"xl"}
      // minH={'100vh'}
      rounded={"md"}
      shadow={"md"}
      overflow={"hidden"}
    >
      <Tabs isFitted variant="enclosed">
        <TabList className="builderTabs" display={{md: 'flex'}} flexWrap={{md: 'wrap'}}>
          <Tab>
            <Text fontWeight={"medium"}>About</Text>
          </Tab>
          <Tab>
            <Text fontWeight={"medium"}>Education</Text>
          </Tab>
          <Tab>
            <Text fontWeight={"medium"}>Skills</Text>
          </Tab>
          <Tab>
            <Text fontWeight={"medium"}>Work</Text>
          </Tab>
          <Tab>
            <Text fontWeight={"medium"}>Projects</Text>
          </Tab>
          <Tab>
            <Text fontWeight={"medium"}>Template</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Education />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Work />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
            <Template />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Builder;
