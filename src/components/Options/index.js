// Options.js

import {ImagesContainer, EachImg, EachItemBtn} from './styledComponents'

const Options = props => {
  const {choicesList, imageClicked} = props
  console.log(choicesList)

  const clickImage = itemId => {
    imageClicked(itemId)
  }

  return (
    <ImagesContainer>
      {choicesList.map(eachItem => (
        <EachItemBtn
          type="button"
          onClick={() => clickImage(eachItem.id)}
          key={eachItem.id}
          data-testid={`${eachItem.id.toLowerCase()}Button`}
        >
          <EachImg src={eachItem.imageUrl} alt={eachItem.id} />
        </EachItemBtn>
      ))}
    </ImagesContainer>
  )
}

export default Options
