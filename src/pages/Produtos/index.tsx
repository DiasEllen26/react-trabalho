import { useParams } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { Button, Col4, Col6, Input, Row, TextButton } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { TBTr, Td } from "../Carrinho/styles";

interface IProduto {
    "id": number,
    "nome": string,
    "valor": string,
    "promo": string,
    "id_categoria": number,
    "promoNumber": string,
    "imagemg": string,
    "imagemp": string
}


const Produtos = () => {
    const { id } = useParams();

    const [produto, setProduto] = useState<IProduto>()

    useEffect(() => {
        axios.get('http://localhost:3000/produtos?id=' + id)
            .then((response) => {
                setProduto(response.data[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%',
                    marginTop: 20,
                    marginBottom: 40
                }}
            >
                {
                    produto  ?
                <>
                    <h1>Produto</h1>
                    <Row>
                        <Col4>
                          <img src={"https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/"
                                +
                                produto.imagemg
                            } alt="" />
                                
                        </Col4>

                        <Col6>
                            <h3> {produto.nome}</h3>
                            <p
                                style={{
                                    textDecoration: 'line-through'
                                }}
                            >R$ {produto.valor}</p>
                            <p>R$ {produto.promo}</p>


                            <form>
                                <Input
                                    type="number"
                                    name="quantidade"
                                    defaultValue={1}
                                    min="1"
                                    required
                                />

                                <Button>
                                    <TextButton>
                                        Adicionar ao Carrinho
                                    </TextButton>
                                </Button>
                            </form>
                        </Col6>
                    </Row>
                </>
                :
                <h2>Nenhum produto encontrado.</h2>
                }

            </div>
        </>
    )
}

export default Produtos;