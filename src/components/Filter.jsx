import styled from "styled-components";

function Filter() {
  return (
    <FilterContainer>
      <p>Filter by</p>
      <select id="tags" name="tags">
        <option value="all">All</option>
        <option value="react">React</option>
        <option value="ruby">Ruby</option>
        <option value="javascript">Javascript</option>
      </select>
    </FilterContainer>
  )
}
const FilterContainer = styled.div`
  display: flex;
  width: 300px;
  margin: 0rem auto;

  p {
    padding-right: 1rem;
    font-weight: 600;
  }
`

export default Filter