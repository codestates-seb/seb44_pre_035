import styled from "styled-components";
import TagListItem from "./TagListItem";

const Wrapper = styled.div``;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li``;

export default function Tags({ tags, className }) {
  return (
    <Wrapper className={className}>
      <List>
        {tags.map((tag) => (
          <ListItem key={tag}>
            <TagListItem tag={tag} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
