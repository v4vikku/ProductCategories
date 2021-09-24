import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import history from '../history';
import { getProductById } from '../redux/actions/products';

export default function ProductDetail(props) {
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductById(props.match.params.id))
    }, [dispatch, props.match.params.id])
    return (
        <>
            <Segment padded="very">
                <Button circular primary icon="arrow left" onClick={() => history.goBack()} />
                <Item.Group divided style={{ padding: "10px" }}>

                    <Item>
                        <Item.Image src='https://www.incathlab.com/images/products/default_product.png' />

                        <Item.Content>
                            <Item.Header as='a'>{product.name}</Item.Header>
                            <Item.Meta>
                                <span className='cinema' style={{ color: "green" }}>{`$${product.price}`}</span>
                            </Item.Meta>
                            <Item.Description>{product.description}</Item.Description>
                            <Item.Extra>
                                <Label color="yellow">{product.model}</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>

        </>
    )
}
