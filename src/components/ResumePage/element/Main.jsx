import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Heading,
  Button,
  IconButton,
} from "@chakra-ui/react";
import Builder from "./Builder";
import Template1 from "./Template1.jsx";
import Template2 from "./Template2.jsx";
import ThemeSelect from "./Theme/ThemeSelect";
import { useReactToPrint } from "react-to-print";
import { useResume } from "../Context";
import { MdOutlineFileDownload, MdShare } from "react-icons/md";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
} from "react-share";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

const Main = () => {
  const { printElem, template } = useResume(); // Add template state variable

  const handlePrint = useReactToPrint({
    content: () => printElem.current,
  });

  const RowElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    @media (max-width: 768px) {
      margin: 0 4px;
    }
  `;

  const [share, setShare] = useState(false);
  const handleShare = () => {
    setShare((prevShow) => !prevShow);
  };

  // Conditionally render the selected template
  const selectedTemplate =
    template === "template2" ? <Template2 /> : <Template1 />;

  return (
    <Container bg={"gray.50"} minW={"full"} py={10} id="builder">
      <Heading
        as="h4"
        size="lg"
        textAlign={"center"}
        color={"gray.700"}
        style={{ fontFamily: "Poppins" }}
        fontWeight={"medium"}
      >
        Builder Dashboard
      </Heading>

      <Container maxW={"7xl"} px={8} my={3}>
        <Stack
          justifyContent={"space-between"}
          pt={4}
          direction={{ base: "column", sm: "row" }}
        >
          <ThemeSelect />
          <Stack direction={"row"} spacing={2}>
            <IconButton
              icon={<MdOutlineFileDownload />}
              onClick={handlePrint}
              colorScheme={"blue"}
              aria-label="Download"
            />
            <IconButton
              icon={<MdShare />}
              onClick={handleShare}
              colorScheme={"blue"}
              aria-label="Share"
            />
          </Stack>
        </Stack>
      </Container>

      <Stack
        direction={{ base: "column", md: "row" }}
        // mt={16}
        gap={4}
        mx={{ base: 2, md: 12 }}
        my={8}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        className="builderContainer"
      >
        <Builder />
        {selectedTemplate} {/* Render the selected template */}
      </Stack>

      {/* Add a media query for smaller screens */}
      <Box display={{ base: "block", md: "none" }} textAlign="center" mt={8}>
        <Stack direction={"row"} spacing={2}>
          <IconButton
            icon={<MdOutlineFileDownload />}
            onClick={handlePrint}
            colorScheme={"blue"}
            aria-label="Download"
          />
          <IconButton
            icon={<MdShare />}
            onClick={handleShare}
            colorScheme={"blue"}
            aria-label="Share"
          />
        </Stack>
      </Box>
      <Modal show={share} onHide={handleShare} centered>
        <Modal.Header>Share</Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RowElement>
              <FacebookShareButton url={"https://your-resume-url.com"}>
                <FaFacebook size={32} color="#4267B2" />
              </FacebookShareButton>
              <span style={{ textAlign: "center" }}>Facebook</span>
            </RowElement>
            <RowElement>
              <LinkedinShareButton url={"https://your-resume-url.com"}>
                <FaLinkedin size={32} color="#4796dd" />
              </LinkedinShareButton>
              <span style={{ textAlign: "center" }}>LinkedIn</span>
            </RowElement>
            <RowElement>
              <EmailShareButton url={"https://your-resume-url.com"}>
                <SiGmail size={32} color="brown" />
              </EmailShareButton>
              <span style={{ textAlign: "center" }}>Gmail</span>
            </RowElement>
            <RowElement>
              <WhatsappShareButton url={"https://your-resume-url.com"}>
                <FaWhatsapp size={32} color="#128C7E" />
              </WhatsappShareButton>
              <span style={{ textAlign: "center" }}>WhatsApp</span>
            </RowElement>
            <RowElement>
              <InstapaperShareButton url={"https://your-resume-url.com"}>
                <FaInstagram size={32} color="#405DE6" />
              </InstapaperShareButton>
              <span style={{ textAlign: "center" }}>Instagram</span>
            </RowElement>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShare}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Main;
