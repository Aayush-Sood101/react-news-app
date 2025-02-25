import useFetch from "../../hooks/useFetch";


const NewsList = () => {

    const {data: news_list , loading , error} = useFetch("technology" , "en");
    console.log(news_list);
    

    return (
        <div>
            <h1>News List</h1>
        </div>
    )
}

export default NewsList;