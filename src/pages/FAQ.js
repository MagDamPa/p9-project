import axios from 'axios';
import React, {useState} from 'react'
import { useQuery } from "react-query";
import fetchDataFromSanity from '../Utils/DataFetcher';


const FAQ = () => {
  const QUERY = '*[_type == "FAQ"]' 
  const { data: FAQData, isLoading, isError } = useQuery(['FAQData', QUERY], () => fetchDataFromSanity(QUERY));
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return ( 
    <div>
      <h1 className='text-4xl mx-auto text-center mt-8'>Frequently Asked Questions</h1>
      <div className='max-w-4xl mx-auto pt-10'>
        {FAQData?.result.map((item, index) => (
          <div key={item._createdAt} className="collapse collapse-arrow bg-base-200 mt-4">
            <input 
              onClick={() => handleToggle(index)} 
              type="radio" 
              name="my-accordion-2" 
              checked={openIndex === index} 
            /> 
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content"> 
              <p>{item.answer}</p>
            </div>
          </div>
          
        ))}
        
      </div>
    </div>
  )
}

export default FAQ