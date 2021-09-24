import _ from 'lodash'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Grid, Segment } from 'semantic-ui-react'

export default function Products({ products }) {
    return (
        <Grid centered   columns={2} >
            <Grid.Column>
                <Segment placeholder style={{ maxWidth: "800px", minHeight  :  "80vh" }}>
                    <Card.Group itemsPerRow={3}>

                        {
                            _.map(products, (v, k) => {
                                return <Card as={NavLink} to={`/products/${v.id}`} header={v.name} meta={`$${v.price}`} description={v.model} key={v.id} />
                            })

                        }
                    </Card.Group>
                </Segment>
            </Grid.Column>
        </Grid>

    )
}
