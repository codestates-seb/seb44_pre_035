import { Wrapper } from "../../pages/questions/Container.styled";
import { List, Text } from "./HelpMessage.styled";

function HelpMessage() {
  return (
    <Wrapper>
      <Text fontSize="20px" bold="400">
        Writing a good question
      </Text>
      <Text fontSize="15px">
        You’re ready to ask a programming-related question and this form will
        help guide you through the process. Looking to ask a non-programming
        question? See the topics here to find a relevant site.
      </Text>
      <Text fontSize="12px" bold="600">
        Steps
      </Text>
      <ul>
        <List fontSize="12px">Summarize your problem in a one-line title.</List>
        <List fontSize="12px">Describe your problem in more detail.</List>
        <List fontSize="12px">
          Describe what you tried and what you expected to happen.
        </List>
        <List fontSize="12px">
          Add “tags” which help surface your question to members of the
          community.
        </List>
        <List fontSize="12px">
          Review your question and post it to the site.
        </List>
      </ul>
    </Wrapper>
  );
}

export default HelpMessage;
