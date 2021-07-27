import * as React from 'react'
import Layout from "../components/layout"

const Greetings = (props) => {
    return (
        <h2>Hi {props.name}</h2>
    )
}
const AboutPage = () => {
    return (
        <Layout pageTitle="About Page">
            <p>A page that explains a little bit about myself</p>
            <Greetings name="Killian" />
            <Greetings name="Pops" />
        </Layout>
    )
}

export default AboutPage