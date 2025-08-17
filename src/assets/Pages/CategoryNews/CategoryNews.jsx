import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'

const CategoryNews = () => {
    const {id} =  useParams();
    const data = useLoaderData();
    // const newsArray = data.news
    const [categoryNews, setCategoryNews] = useState([]);
    console.log(id,data)
    // useEffect(()=>{
    //   if(id=='0'){
    //     setCategoryNews(data);
    //     return;

    //   }else if(id == '1'){
    //     const filtererNews = data.filter(
    //       news=> news.others.is_today_id == true);
    //       setCategoryNews(filtererNews)


    //   }else{
    //   const filtererNews = data.filter(news=>news.category_id == id);
    //   console.log(filtererNews);
    //   setCategoryNews(filtererNews)

    //   }},[data,id]);
  return (
    <div>
      Total {categoryNews.length}

    </div>
  )
}

export default CategoryNews