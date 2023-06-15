import { Wrapper } from "../../pages/questions/Container.styled";
import { List, Text } from "./HelpMessage.styled";

function HelpMessage() {
  return (
    <Wrapper helpMessage="true">
      <Text title="true">Writing a good question</Text>
      <Text text="true">
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
        <br />
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </Text>
      <Text steps="true">Steps</Text>
      <ul>
        <List list="true">Summarize your problem in a one-line title.</List>
        <List list="true">Describe your problem in more detail.</List>
        <List list="true">
          Describe what you tried and what you expected to happen.
        </List>
        <List list="true">
          Add “tags” which help surface your question to members of the
          community.
        </List>
        <List list="true">Review your question and post it to the site.</List>
      </ul>
    </Wrapper>
  );
}

export default HelpMessage;
