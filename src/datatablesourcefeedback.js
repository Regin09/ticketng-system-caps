import { Fragment } from "react"

export const userColumns = [{ field: 'id', headerName: 'ID', width: 90 }, 
{ 
    field: 'sender', 
    headerName: 'Sender', 
    width: 150, 
}, 
{
    field:"client", 
    headerName:"Client", 
    width: 120, 

},
{
    field:"engineer", 
    headerName:"Engineer", 
    width: 100,
},
{
    field:"feedback", 
    headerName:"Feedback", 
    width: 200,
},
{
    field:"created",
    headerName:"Created Date",
    width: 120,
}
];

//temporary data
export const userRows = [
    {
        id:"1",
        sender: "jim24",
        client: "DST",
        engineer:"adikuncuro",
        feedback: "Detail of Feedback",
        created:"10/10/2022"
    },
    {
        id:"2",
        sender: "jim24",
        client: "DST",
        engineer:"adikuncuro",
        feedback: "Detail of Feedback",
        created:"10/10/2022"
    },
    {
        id:"3",
        sender: "jim24",
        client: "DST",
        engineer:"adikuncuro",
        feedback: "Detail of Feedback",
        created:"10/10/2022"
    },
]