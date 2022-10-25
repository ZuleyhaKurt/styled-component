import styled from "styled-components"

const Button = styled.button`
background-color:${(props) =>( props.primary ? "white" : "purple")};
color:${({primary}) =>( primary ? "purple" : "white")};
cursor: pointer;
padding:1rem 2rem;
border-radius: 0.5rem;
border-color:pink;
&:hover{
    transform: scale(0.97);
}

`

export const TomatoButton = styled(Button)`
background-color:${({primary}) =>( primary ? "white" : "tomato")};
color:${({ primary }) => (primary ? "tomato" : "white")};
border:1px solid tomato;
`



export default Button