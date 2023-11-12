import React from 'react'
import { useQuery } from 'react-query';
import { ArticleTemplate } from '../articles/ArticleTemplate';
import client from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import fetchDataFromSanity from '../Utils/DataFetcher';
import moment from 'moment';
import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';

const KnowledgeCenter = () => {
  const QUERY = '*[_type == "article"]{title, "name": author->name, "avatar": author->image,  _id, slug, coverImage, publishedAt, content}' 
  const { data: articleData, isLoading, isError } = useQuery(['articleData', QUERY], () => fetchDataFromSanity(QUERY));
 console.log(articleData)
  const urlFor = (source) => {
    return imageUrlBuilder(client).image(source)
  }
  
  return (
    <div className='flex p-4 gap-4'>
      <section className="w-full">
        <header className="flex justify-center items-center py-4 px-6 bg-white shadow">
          <img
            alt="Logo"
            className="object-contain"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/40",
              objectFit: "cover",
            }}
            width="150"
          />
        </header>
        <main className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          {articleData?.result.map((item) => (
            <div className="bg-white p-6 shadow rounded-lg" key={item._id}>
              <img
                alt="Blog cover image"
                className="object-cover mb-4 rounded"
                height="200"
                src={urlFor(item.coverImage).width(320).height(240).fit('max').auto('format')}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="flex items-center mb-4">
                <img
                  alt="Author avatar"
                  className="object-cover rounded-full mr-2"
                  height="40"
                  src={urlFor(item.avatar).width(320).height(240).fit('max').auto('format')}
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <p className="text-gray-500">Af {item.name} on {moment(item.publishedAt).format('DD. MMM, YYYY')}</p>
              </div>
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4 max-w-[12.5rem max-h-[6rem] truncate overflow-hidden">
                <PortableText
                  value={item.content} 
                />
              </p>
              <Link className="text-blue-500 hover:text-blue-600" to={"/" + item.slug.current} key={item.slug.current}>
                Læs mere
              </Link>
            </div>
          ))}
        </main>
      </section>
    </div>
  )
}

export default KnowledgeCenter