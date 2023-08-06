import {createClient} from 'contenetFul'

const useContentful = () => {

    const client = createClient({
        space: "r95uxgn7auwg",
        accessToken: "26RodCa-3A25iiCi_HDU2wDLqUaAmzDYRmTh_aWVq04",
        host: "preview.contentful.com"

    })
    
    const getArticles = async () => {
        try {
            client.getEntries({
                content_type: "test_cannabis_system"
            })
        }
    }


}

export default useContentful;