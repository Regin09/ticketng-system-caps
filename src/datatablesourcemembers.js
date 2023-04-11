import { Fragment } from "react"

export const userColumns = [{ field: 'id', headerName: 'No', width: 90 }, 
{ 
    field: 'name', 
    headerName: 'Name', 
    width: 200, 
}, 
{
    field:"username", 
    headerName:"Username", 
    width: 120, 

},
{
    field:"email", 
    headerName:"Email", 
    width: 250,
},
{
    field:"role", 
    headerName:"Role", 
    width: 100,
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
        name: "John Smith",
        username: "johntor",
        email:"johnsmith@gmail.com",
        role:"engineer",
        created:"10/10/2022"
    },
    {
        id:"2",
        name: "Xenon Wallace",
        username: "xenon69",
        email:"xenonwallace@gmail.com",
        role:"engineer",
        created:"05/10/2022"
    },
    {
        id:"3",
        name: "Marshall Nicols",
        username: "marshall69",
        email:"marshallnicols@gmail.com",
        role:"engineer",
        created:"12/10/2022"
    },
]