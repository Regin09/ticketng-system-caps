import { Fragment } from "react"

export const userColumns = [{ field: 'id', headerName: 'Ticket ID', width: 90 }, 
    {
    field:"subjects", 
    headerName:"Subjects", 
    width: 270, 
    // renderCell: (params)=>{
    //     return(
    //         <Fragment>
    //             {params.row.username}
    //         </Fragment>
    //     );
    // },
},
{
    field:"assigned", 
    headerName:"Assigned", 
    width: 160,
},

{
    field:"status", 
    headerName:"Status", 
    width: 160,
    renderCell:(params)=>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        )
    }
},
{
    field:"client", 
    headerName:"Client", 
    width: 100,
},
{
    field:"priority", 
    headerName:"Priority", 
    width: 120,
    renderCell:(params)=>{
        return (
            <div className={`cellWithPriority ${params.row.priority}`}>
                <span class="dot" />
                {params.row.priority}
            </div>
        )
    }
},
];

//temporary data
export const userRows = [
    {
        id: 1,
        subjects: "Host 14 is down",
        assigned: "regingeorgius",
        status: "Selected",
        client: "ITB",
        priority:"Critical"
    },
    {
        id: 2,
        subjects: "Ubuntu Hardening",
        assigned: "tono36",
        status: "Done",
        client: "BRI",
        priority: "High",
    },
    {
        id: 3,
        subjects: "Host 17 is out of memory",
        assigned: "smith39",
        status: "To-Do",
        client: "ITB",
        priority: "Medium",
    },
    {
        id: 4,
        subjects: "Kubernetes is Down",
        assigned: "jana37",
        status: "In-Progress",
        client: "ITB",
        priority: "Low",
    },
]