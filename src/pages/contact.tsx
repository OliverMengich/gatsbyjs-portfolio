import * as React from "react"
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout"
import PageInfoComponent from "../components/PageInfo/PageInfo.component"
const FormElement = styled.form`
    width: 100%;
    max-width: 80vw;
    margin: 0 auto;
    padding: 20px;
`;
const FormElDiv = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px){
        flex-wrap: wrap;
        flex-direction: column;
    }
`;
const FormInput = styled.input`
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #01181d;
    padding: 10px;
    width: 100%;
    margin-right: 10px;
    margin-bottom: 20px;
    @media (max-width: 768px){
        width: 100%;
    }
    &:focus{
        border: 1px solid #007e6a;
    }
    color: #fff;
`;
const FormTextArea = styled.textarea`
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #01181d;
    width: 100%;
    margin-bottom: 20px;
    &:focus{
        border: 1px solid #007e6a;
    }
    color: #fff;
`;
const FormSubmit = styled.button`
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: #007e6a;
    padding: 10px;
    width: 150px;
    margin-right: 10px;
    margin-bottom: 20px;
    color: #fff;
    float: right;
    cursor: pointer;
    &:hover{
        background-color: #006a5a;
    }
`;
const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>
                <PageInfoComponent path="Contact" title="Contact Page"/>
                <FormElement>
                    <FormElDiv>
                        <FormInput placeholder="Name" type="text" name="name" id="name" />
                        <FormInput placeholder="Email" type="email" name="email" id="email" />
                    </FormElDiv>
                    <FormInput placeholder="Phone Number" type="text" name="phonenumber" id="phoneno" />
                    <FormTextArea placeholder="Text" name="message" id="message" cols={30} rows={10} />
                    <FormSubmit type="submit">Send</FormSubmit>
                </FormElement>
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Projects - Oliver Kipkemei</title>
