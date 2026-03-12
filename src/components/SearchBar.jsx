import {useState} from "react"

export default function SearchBar({tools}){

const [query,setQuery]=useState("")

const filtered = tools.filter(tool =>
tool.name.toLowerCase().includes(query.toLowerCase())
)

return(

<div>

<input
placeholder="Search tools..."
value={query}
onChange={e=>setQuery(e.target.value)}
/>

</div>

)

}
