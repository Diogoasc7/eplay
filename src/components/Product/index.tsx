import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="#" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem, iDescricaosum dolor sit amet consectetur adipisicing elit.
      Laboriosam, repellat eaque! Tenetur hic ad sunt rem eligendi voluptate nam
      sit, ratione cumque aperiam quaerat, velit sequi corrupti ullam illo
      earum!
    </Descricao>
  </Card>
)

export default Product
