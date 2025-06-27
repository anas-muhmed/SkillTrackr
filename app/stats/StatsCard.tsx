type StatsCardProps={
    title:string;
    value:string;
    icon?:string;
};

//this component displays a single stat item like "Totla Entries:24"
export default function StatsCard({title,value,icon}:StatsCardProps){
    return(
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold">
                 {icon && <span className="mr-2">{icon}</span>}
        {title}
            </h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">{value}</p>
        </div>
    )
}