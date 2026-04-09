import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Button,
  Textarea,
  Switch
} from "@chakra-ui/react";
import { useResume } from "../../Context";
import ImageUpload from "../ImageUploadButton/ImageUpload.component";

const About = () => {
  const { about, setAbout } = useResume();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbout({ ...about, [name]: value });
  };

  return (
    <>
      <Stack spacing={4} mb={2}>
        {about.picture ? (
          <Button
            onClick={() => {
              setAbout({ ...about, picture: "" });
            }}
            colorScheme="red"
            variant="outline"
          >
            Remove Image
          </Button>
        ) : (
          <>
           <FormControl display='flex' marginY="3" width="full" alignItems='center'>
              <FormLabel htmlFor='img-alerts' mb='0'>
                Add Image
              </FormLabel>
              <Switch id='img-alerts' defaultChecked={about.addResumeImage}  onChange={e => setAbout({...about, ["addResumeImage"]: e.target.checked})}/>
            </FormControl>
            {about.addResumeImage && <ImageUpload />}
          </>
        )}

        <HStack spacing={6}>
          <FormControl>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="name"
              id="name"
              type="text"
              variant="filled"
              placeholder="Full Name"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="role">Role</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="role"
              id="role"
              type="text"
              variant="filled"
              placeholder="Role"
            />
          </FormControl>
        </HStack>

        <HStack spacing={6}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="email"
              id="email"
              type="email"
              variant="filled"
              placeholder="Email"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="phone"
              id="phone"
              type="tel"
              variant="filled"
              placeholder="Phone"
            />
          </FormControl>
        </HStack>

        <HStack spacing={6}>
          <FormControl>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="address"
              id="address"
              type="text"
              variant="filled"
              placeholder="Address"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="website">Website</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="website"
              id="website"
              type="url"
              variant="filled"
              placeholder="https://portfolio.com"
            />
          </FormControl>
        </HStack>
        
        <HStack spacing={6}>
          <FormControl>
            <FormLabel htmlFor="github">Github</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="github"
              id="github"
              type="url"
              variant="filled"
              placeholder="https://github.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="linkedin">LinkedIn</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="linkedin"
              id="linkedin"
              type="url"
              variant="filled"
              placeholder="https://linkedin.com"
            />
          </FormControl>
        </HStack>

        <HStack>
          <FormControl>
            <FormLabel htmlFor="aboutMe">About Me</FormLabel>
            <Textarea
              onChange={(e) => handleChange(e)}
              name="aboutMe"
              id="aboutMe"
              variant="filled"
              placeholder="Write a summary about yourself"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="objectives">Objectives</FormLabel>
            <Textarea
              onChange={(e) => handleChange(e)}
              name="objectives"
              id="objectives"
              variant="filled"
              placeholder="Write your objectives"
            />
          </FormControl>
        </HStack>
      </Stack>
    </>
  );
};

export default About;
