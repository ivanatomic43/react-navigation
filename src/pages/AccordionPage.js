import Accordion from "../components/Accordion";

function AccordionPage(){

    const items = [
        {
            id: 'asdf',
            label: "What is React?",
            content: "React is front end javascript framework"
        },
        {
            id: "uytre",
            label: "Why use react?",
            content: "Favourite js library"
        },
        {
            id: "somes",
            label: "How do you use React?",
            content: "You use react by creating components"
        }
    ];

return(<Accordion items={items}/>);   
}

export default AccordionPage;